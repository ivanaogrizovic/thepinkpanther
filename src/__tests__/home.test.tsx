import { render, screen } from "@testing-library/react";
import Home from "../routes/home";
import { BrowserRouter } from "react-router-dom";

test("matches snapshot", () => {
  const { container } = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  );
  expect(container).toMatchSnapshot();
});
