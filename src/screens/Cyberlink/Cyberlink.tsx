import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../../components/ui/Section";

const navItems = [
  { name: "CHATBOT", path: "/chatbot" },
  { name: "GUAZUAPP", path: "/guazuapp" },
  { name: "CRM", path: "/crm" },
  { name: "ERP", path: "/erp" },
  { name: "TURNOS", path: "/turnos" },
  { name: "SUSCRIPCIONES", path: "/suscripciones" },
  { name: "GESTIÓN DE FLOTA", path: "/gestion-flota" },
  { name: "GESTIÓN DE RESTAURANTE", path: "/gestion-restaurante" },
  { name: "E-COMMERCE", path: "/ecommerce" },
  { name: "DESARROLLO", path: "/desarrollo" }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const Cyberlink = (): JSX.Element => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <img
              className="h-12 w-auto"
              alt="Logocyber"
              src="/logocyber-1.png"
            />
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-gray-800 hover:text-purple-600 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="relative h-screen flex items-center justify-center bg-[url(https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg)] bg-cover bg-fixed">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative text-center text-white space-y-6 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold leading-tight"
          >
            Soluciones Digitales Innovadoras
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-light"
          >
            Transformamos ideas en software que impulsa tu negocio hacia el futuro
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Comenzar Ahora
          </motion.button>
        </div>
      </Section>
    </div>
  );
};