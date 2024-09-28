import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { BathtubProvider } from "@context"

import App from "./App.tsx"

import "./index.css"
import "./theme/index.scss"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BathtubProvider>
      <App />
    </BathtubProvider>
  </StrictMode>
)
