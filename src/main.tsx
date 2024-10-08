import React from "react";
import ReactDOM from "react-dom/client";

// React Router
import { BrowserRouter } from "react-router-dom";

// Helmet
import { HelmetProvider } from "react-helmet-async";

// i18n
import "./i18n";

// App
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
  </React.StrictMode>
);
