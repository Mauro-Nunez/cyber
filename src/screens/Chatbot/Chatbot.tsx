import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../../components/ui/Section";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const Chatbot = (): JSX.Element => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      {/* Hero Section */}
      <Section className="relative h-[70vh] flex items-center justify-center bg-[url(/chatbot-header.png)] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative text-center text-white space-y-6 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold leading-tight"
          >
            Sistema de Chatbot Inteligente
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-light"
          >
            Automatiza tu atención al cliente con IA avanzada
          </motion.p>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Características Principales</h2>
          <p className="text-xl text-gray-600">Potencia tu negocio con IA</p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Funcionalidades Avanzadas</h3>
            <ul className="space-y-4">
              {[
                "Procesamiento de lenguaje natural",
                "Aprendizaje automático continuo",
                "Integración con múltiples plataformas",
                "Personalización avanzada",
                "Análisis de sentimientos",
                "Reportes detallados de interacciones"
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
              src="https://images.pexels.com/photos/8438934/pexels-photo-8438934.jpeg"
              alt="Chatbot Features"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </Section>

      {/* Integration Section */}
      <Section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Integración con GuazuApp</h2>
            <p className="text-xl text-gray-600">Potencia tu sistema de comunicación</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Comunicación Unificada",
                features: [
                  "Integración seamless",
                  "Chat unificado",
                  "Historial compartido",
                  "Transferencia inteligente"
                ]
              },
              {
                title: "Automatización",
                features: [
                  "Respuestas automáticas",
                  "Flujos de trabajo",
                  "Reglas personalizadas",
                  "Escalamiento automático"
                ]
              },
              {
                title: "Análisis Conjunto",
                features: [
                  "Métricas unificadas",
                  "Dashboard integrado",
                  "Reportes combinados",
                  "KPIs personalizados"
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {section.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3 text-gray-700">
                      <span className="text-purple-600">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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