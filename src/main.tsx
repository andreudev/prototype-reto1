import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ChakraProvider>
      <StrictMode>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </StrictMode>
    </ChakraProvider>
  </BrowserRouter>
);
