import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../../components/ui/Section";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function GestionFlota() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      {/* Hero Section */}
      <Section className="relative h-[70vh] flex items-center justify-center bg-[url(https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg)] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative text-center text-white space-y-6 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold leading-tight"
          >
            Sistema de Gestión de Flotas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-light"
          >
            Control total de tu flota vehicular en tiempo real
          </motion.p>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Características Principales</h2>
          <p className="text-xl text-gray-600">Gestión integral de tu flota</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Seguimiento en Tiempo Real",
              features: [
                "GPS en tiempo real",
                "Historial de rutas",
                "Geocercas",
                "Alertas de velocidad"
              ]
            },
            {
              title: "Gestión de Vehículos",
              features: [
                "Mantenimiento preventivo",
                "Control de combustible",
                "Documentación digital",
                "Estado del vehículo"
              ]
            },
            {
              title: "Gestión de Conductores",
              features: [
                "Perfiles de conductor",
                "Control de licencias",
                "Evaluación de conducción",
                "Reportes de desempeño"
              ]
            }
          ].map((section, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
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
      </Section>

      {/* Map Section */}
      <Section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Control Total de tu Flota</h2>
            <p className="text-xl text-gray-600">Visualización y gestión en tiempo real</p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">Monitoreo Avanzado</h3>
              <ul className="space-y-4">
                {[
                  "Visualización en mapa en tiempo real",
                  "Reportes detallados de rutas",
                  "Control de paradas y desvíos",
                  "Optimización de rutas",
                  "Alertas personalizables",
                  "Dashboard interactivo"
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
                src="/flota.png"
                alt="Sistema de Flotas"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Analytics Section */}
      <Section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Análisis y Reportes</h2>
          <p className="text-xl text-gray-600">Información detallada para toma de decisiones</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Reportes de Eficiencia",
              features: [
                "Consumo de combustible",
                "Tiempo de uso",
                "Costos operativos",
                "Rendimiento por ruta"
              ]
            },
            {
              title: "Reportes de Seguridad",
              features: [
                "Incidentes",
                "Excesos de velocidad",
                "Frenados bruscos",
                "Comportamiento del conductor"
              ]
            },
            {
              title: "Reportes de Mantenimiento",
              features: [
                "Programación de servicios",
                "Historial de reparaciones",
                "Costos de mantenimiento",
                "Alertas preventivas"
              ]
            }
          ].map((section, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
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
      </Section>

      {/* CTA Section */}
      <Section className="py-16 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para optimizar tu flota?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Comienza a gestionar tu flota de manera eficiente
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-50 transition-colors duration-300"
          >
            Solicitar Demo
          </Link>
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
}