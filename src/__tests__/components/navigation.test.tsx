import { render, screen, within } from "@testing-library/react";
import { waitForElementToBeRemoved } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router";
import userEvent from "@testing-library/user-event";
import { ROUTES } from "../../routes/routes.config";
import Navigation from "../../components/navbar/navbar";
import CartContent from "../../components/cart-content/cart-content";
import { CartProvider } from "../../context/cart.context";

describe("Navigation", () => {
  function setup() {
    const user = userEvent.setup();

    render(
      <CartProvider>
        <MemoryRouter initialEntries={[ROUTES.HOME]}>
          <Navigation />

          <Routes>
            <Route path={ROUTES.HOME} element={<div />} />
            <Route path={ROUTES.SHOP.ENGAGEMENT} element={<div />} />
            <Route path={ROUTES.ABOUT} element={<div />} />
            <Route path={ROUTES.BOOK} element={<div />} />
          </Routes>
        </MemoryRouter>
      </CartProvider>,
    );

    return { user };
  }

  test("renders desktop navigation links", () => {
    setup();

    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /engagement rings/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /book an appointment/i }),
    ).toBeInTheDocument();
  });

  test("mobile menu toggles when hamburger is clicked", async () => {
    const { user } = setup();

    const toggleButton = screen.getByLabelText(/toggle navigation/i);

    await user.click(toggleButton);

    const menu = screen.getByTestId("mobile-menu");

    const closeButton = within(menu).getByLabelText(/close menu/i);

    expect(closeButton).toBeInTheDocument();

    await user.click(closeButton);

    expect(screen.getByLabelText(/toggle navigation/i)).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  test("clicking nav links closes mobile menu", async () => {
    const { user } = setup();

    const toggleButton = screen.getByLabelText(/toggle navigation/i);
    await user.click(toggleButton);

    const menu = screen.getByTestId("mobile-menu");

    const link = within(menu).getByRole("link", {
      name: /about/i,
    });

    await user.click(link);

    expect(screen.getByLabelText(/toggle navigation/i)).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });
});
