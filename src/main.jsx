import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/global.css";
import "./styles/variables.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./components/context/ThemeContext.jsx";
import { Analytics } from "@vercel/analytics/react";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
        <Analytics />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
