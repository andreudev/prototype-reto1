import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router"; // Corrige la importación de 'react-router-dom'
import App from "./App.tsx"; // Asegúrate de que App esté configurado correctamente para manejar las rutas internas

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<App />} />{" "}
          {/* App maneja la lógica de rutas internas */}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
