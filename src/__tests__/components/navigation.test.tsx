import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router";
import { ROUTES } from "../../routes/routes.config";
import Navigation from "../../components/navbar/navbar";

describe("Navigation", () => {
  function setup() {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={[ROUTES.HOME]}>
        <Navigation />
        <Routes>
          <Route
            path={ROUTES.HOME}
            element={<div data-testid="home-route" />}
          />
          <Route
            path={ROUTES.SHOP.ENGAGEMENT}
            element={<div data-testid="engagement-route" />}
          />
          <Route
            path={ROUTES.SHOP.ROOT}
            element={<div data-testid="shop-route" />}
          />
          <Route
            path={ROUTES.ABOUT}
            element={<div data-testid="about-route" />}
          />
          <Route
            path={ROUTES.BOOK}
            element={<div data-testid="book-route" />}
          />
        </Routes>
      </MemoryRouter>,
    );

    return { user };
  }

  test("renders all main nav links", () => {
    setup();

    const links = [
      /home/i,
      /engagement rings/i,
      /wedding rings/i,
      /about/i,
      /book an appointment/i,
    ];

    links.forEach((link) => {
      expect(screen.getByRole("link", { name: link })).toBeInTheDocument();
    });
  });

  test("mobile menu toggles when hamburger is clicked", async () => {
    setup();

    const user = userEvent.setup();
    const toggleButton = screen.getByLabelText(/toggle navigation/i);

    expect(screen.queryByText(/home/i)).toBeInTheDocument();
    await user.click(toggleButton);

    expect(screen.getByLabelText(/close menu/i)).toBeInTheDocument();
    await user.click(screen.getByLabelText(/close menu/i));

    expect(screen.queryByLabelText(/close menu/i)).not.toBeInTheDocument();
  });

  test("clicking nav links closes mobile menu", async () => {
    setup();
    const user = userEvent.setup();
    const toggleButton = screen.getByLabelText(/toggle navigation/i);

    await user.click(toggleButton);

    const link = screen.getByText(/about/i);
    await user.click(link);

    expect(screen.queryByLabelText(/close menu/i)).not.toBeInTheDocument();
  });
});
