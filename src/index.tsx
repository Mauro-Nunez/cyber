import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cyberlink } from "./screens/Cyberlink";
import { Ecommerce } from "./screens/Ecommerce";
import { GuazuApp } from "./screens/GuazuApp";
import { CRM } from "./screens/CRM";
import { ERP } from "./screens/ERP";
import { Turnos } from "./screens/Turnos";
import { Suscripciones } from "./screens/Suscripciones";
import { Tracking } from "./screens/Tracking";
import { Desarrollo } from "./screens/Desarrollo";
import { Chatbot } from "./screens/Chatbot";
import AdminPanel from "./screens/AdminPanel";

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
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/desarrollo" element={<Desarrollo />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  </StrictMode>
);