import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element. Ensure id='root' exists in your index.html.");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/* 
      We pass an empty object or force a cast to any if your specific version of 
      Material Tailwind complains about missing ThemeProvider props during compilation.
    */}
    <ThemeProvider value={undefined as any}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
