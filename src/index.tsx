import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main screens
import { Cyberlink } from "./screens/Cyberlink/Cyberlink";
import { Ecommerce } from "./screens/Ecommerce/Ecommerce";
import { GuazuApp } from "./screens/GuazuApp/GuazuApp";
import { CRM } from "./screens/CRM/CRM";
import { ERP } from "./screens/ERP/ERP";
import { Turnos } from "./screens/Turnos/Turnos";
import { Suscripciones } from "./screens/Suscripciones/Suscripciones";
import { GestionFlota } from "./screens/GestionFlota/GestionFlota";
import { Desarrollo } from "./screens/Desarrollo/Desarrollo";
import { Chatbot } from "./screens/Chatbot/Chatbot";

// Additional screens
import { Products } from "./screens/Products/Products";
import { Services } from "./screens/Services/Services";
import { Development } from "./screens/Development/Development";
import { Diagnostico } from "./screens/Diagnostico/Diagnostico";
import { Reparacion } from "./screens/Reparacion/Reparacion";
import { Consultoria } from "./screens/Consultoria/Consultoria";
import { Caracteristicas } from "./screens/Caracteristicas/Caracteristicas";
import { Precios } from "./screens/Precios/Precios";

// Admin and Dashboard
import AdminPanel from "./screens/AdminPanel/AdminPanel";
import { Dashboard } from "./screens/Dashboard/Dashboard";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Cyberlink />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/guazuapp" element={<GuazuApp />} />
        <Route path="/crm" element={<CRM />} />
        <Route path="/erp" element={<ERP />} />
        <Route path="/turnos" element={<Turnos />} />
        <Route path="/suscripciones" element={<Suscripciones />} />
        <Route path="/gestion-flota" element={<GestionFlota />} />
        <Route path="/desarrollo" element={<Desarrollo />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/desarrollo" element={<Development />} />
        <Route path="/diagnostico" element={<Diagnostico />} />
        <Route path="/reparacion" element={<Reparacion />} />
        <Route path="/consultoria" element={<Consultoria />} />
        <Route path="/caracteristicas" element={<Caracteristicas />} />
        <Route path="/precios" element={<Precios />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  </StrictMode>
);