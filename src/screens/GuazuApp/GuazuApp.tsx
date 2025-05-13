import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../../components/ui/Section";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const GuazuApp = (): JSX.Element => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      {/* Hero Section */}
      <Section className="relative h-[70vh] flex items-center justify-center bg-[url(https://images.pexels.com/photos/7014766/pexels-photo-7014766.jpeg)] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative text-center text-white space-y-6 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold leading-tight"
          >
            GuazuApp
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-light"
          >
            Sistema Multicanal de Chatbots y CRM
          </motion.p>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Características Principales</h2>
          <p className="text-xl text-gray-600">Una solución completa para tu comunicación</p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Sistema Integral de Comunicación</h3>
            <ul className="space-y-4">
              {[
                "Gestión centralizada de canales",
                "Chatbots con IA",
                "Integración multi-plataforma",
                "CRM avanzado",
                "Automatización inteligente"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-700"
                >
                  <span className="h-6 w-6 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">✓</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3059748/pexels-photo-3059748.jpeg"
              alt="GuazuApp Features"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </Section>

      {/* Back to Home */}
      <div className="fixed bottom-8 right-8">
        <Link
          to="/"
          className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};