import { motion } from "framer-motion";
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
      <Section className="relative h-screen bg-[#0B1121] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/guazuBack.png" 
            alt="Background Pattern"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl w-full px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center mb-16"
          >
            <h1 className="text-7xl font-bold mb-6">GuazuApp</h1>
            <p className="text-2xl text-gray-300">Sistema Multicanal de Chatbots y CRM</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-full max-w-5xl mx-auto"
          >
            <img 
              src="/guazubanner.png" 
              alt="GuazuApp Interface"
              className="w-full rounded-xl shadow-2xl"
            />
          </motion.div>
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
                "CRM integrado",
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

      {/* CRM Section */}
      <Section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sistema CRM Integrado</h2>
            <p className="text-xl text-gray-600">Gestión eficiente de relaciones con clientes</p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Sistema CRM"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl"></div>
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">Funcionalidades CRM</h3>
              <ul className="space-y-4">
                {[
                  "Gestión de contactos y leads",
                  "Pipeline de ventas personalizable",
                  "Automatización de marketing",
                  "Seguimiento de interacciones",
                  "Análisis y reportes",
                  "Integración con email y calendario"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
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