import { Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";
import Checkout from "./pages/Checkout.tsx";
// Asegúrate de tener el archivo Checkout.tsx// Si usas un Navbar o Drawer

const App = () => {
  return (
    <div>
      <Routes>
        {/* Definición de rutas dentro de App */}
        <Route path="/" element={<Home />} /> {/* Página principal */}
        <Route path="/checkout" element={<Checkout cartItems={[]} />} />{" "}
        {/* Página de checkout */}
      </Routes>
    </div>
  );
};

export default App;
