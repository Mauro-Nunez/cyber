import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../../components/ui/Section";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const Ecommerce = (): JSX.Element => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      {/* Hero Section */}
      <Section className="relative h-[70vh] flex items-center justify-center bg-[url(https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg)] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative text-center text-white space-y-6 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold leading-tight"
          >
            Plataforma E-commerce
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-light"
          >
            La solución completa para tu negocio online
          </motion.p>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Características Destacadas</h2>
          <p className="text-xl text-gray-600">Todo lo que necesitas para vender en línea</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Gestión de Productos",
              features: [
                "Catálogo ilimitado",
                "Variantes de productos",
                "Categorías y etiquetas",
                "Importación masiva",
                "Control de stock",
                "Precios especiales"
              ]
            },
            {
              title: "Proceso de Compra",
              features: [
                "Carrito de compras",
                "Múltiples formas de pago",
                "Checkout optimizado",
                "Cupones de descuento",
                "Calculadora de envíos",
                "Emails transaccionales"
              ]
            },
            {
              title: "Marketing y SEO",
              features: [
                "SEO optimizado",
                "Integración con redes",
                "Email marketing",
                "Programa de fidelización",
                "Analytics avanzado",
                "Remarketing"
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
      </Section>

      {/* Advanced Features */}
      <Section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Funcionalidades Avanzadas</h2>
            <p className="text-xl text-gray-600">Herramientas poderosas para tu negocio</p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">Gestión Integral</h3>
              <ul className="space-y-4">
                {[
                  "Panel de administración intuitivo",
                  "Gestión de inventario multinivel",
                  "Sistema de roles y permisos",
                  "Integración con marketplaces",
                  "Gestión de proveedores",
                  "Reportes avanzados"
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
                src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg"
                alt="Panel de Administración"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mobile Experience */}
      <Section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5632395/pexels-photo-5632395.jpeg"
              alt="Experiencia Móvil"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl"></div>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Experiencia Móvil Optimizada</h3>
            <ul className="space-y-4">
              {[
                "Diseño responsive adaptativo",
                "App móvil para clientes",
                "Notificaciones push",
                "Checkout optimizado para móvil",
                "Carrito persistente",
                "Búsqueda por voz"
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
      </Section>

      {/* Call to Action */}
      <Section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-purple-600 rounded-3xl p-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url(https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg)] bg-cover bg-center opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-8">¿Listo para empezar a vender en línea?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Únete a los cientos de negocios que ya confían en nuestra plataforma para sus ventas online
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Solicitar Demo
            </button>
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