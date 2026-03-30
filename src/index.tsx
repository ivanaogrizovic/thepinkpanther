import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { ProductsProvider } from "./context/engagementRings.context";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Router basename="/thepinkpanther">
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </Router>
  </React.StrictMode>,
);

reportWebVitals();
