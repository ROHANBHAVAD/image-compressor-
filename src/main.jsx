import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { initGA, trackPageView } from "./utils/analytics";


import App from "./App";
import "./styles/global.css";
initGA();
trackPageView(window.location.pathname);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);