import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router";
import { ProductsProvider } from "./context/products.context";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Router basename="/thepinkpanther">
      <ProductsProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ProductsProvider>
    </Router>
  </React.StrictMode>,
);

reportWebVitals();
