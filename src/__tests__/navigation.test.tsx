import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import Navigation from "../components/navbar/navbar";
import { ProductsProvider } from "../context/products.context";

describe("Navigation", () => {
  function setup() {
    return render(
      <ProductsProvider>
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      </ProductsProvider>,
    );
  }

  test("renders all main nav links", () => {
    setup();

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/engagement rings/i)).toBeInTheDocument();
    expect(screen.getByText(/wedding rings/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/book an appointment/i)).toBeInTheDocument();
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
