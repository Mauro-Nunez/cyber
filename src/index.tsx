import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cyberlink } from "./screens/Cyberlink/Cyberlink";
import { Ecommerce } from "./screens/Ecommerce/Ecommerce";
import { GuazuApp } from "./screens/GuazuApp/GuazuApp";
import { CRM } from "./screens/CRM/CRM";
import { ERP } from "./screens/ERP/ERP";
import { Turnos } from "./screens/Turnos/Turnos";
import { Suscripciones } from "./screens/Suscripciones/Suscripciones";
import { Tracking } from "./screens/Tracking/Tracking";
import { Desarrollo } from "./screens/Desarrollo/Desarrollo";
import { Chatbot } from "./screens/Chatbot/Chatbot";
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
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/desarrollo" element={<Desarrollo />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  </StrictMode>
);