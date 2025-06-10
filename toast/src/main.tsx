import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// contexts
import { ToastProvider } from "./contexts/ToastContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </StrictMode>
);
