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
  { name: "TRACKING", path: "/tracking" },
  { name: "E-COMMERCE", path: "/ecommerce" },
  { name: "DESARROLLO", path: "/desarrollo" }
];

const pricingPlans = [
  {
    name: "GuazuBase",
    price: "€10/mes",
    features: [
      "1 canal de comunicación",
      "Mensajes ilimitados",
      "Búsqueda básica",
      "Integraciones básicas"
    ]
  },
  {
    name: "GuazuPlus",
    price: "€15/mes",
    features: [
      "Todo lo de GuazuBase",
      "3 canales de comunicación",
      "CRM básico",
      "Automatizaciones"
    ]
  },
  {
    name: "GuazuPro",
    price: "€111/mes",
    features: [
      "Todo lo de GuazuPlus",
      "Canales ilimitados",
      "CRM avanzado",
      "API personalizada"
    ]
  }
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

      {/* GuazuApp Section */}
      <Section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50" id="guazuapp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">GuazuApp</h2>
            <p className="text-xl text-gray-600">Sistema Multicanal de Chatbots y CRM</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
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
              <Link
                to="/guazuapp"
                className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Conocer Más
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7014766/pexels-photo-7014766.jpeg"
                alt="GuazuApp Dashboard"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4">{plan.name}</h4>
                <p className="text-3xl font-bold text-purple-600 mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3 text-gray-700">
                      <span className="text-purple-600">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition-colors duration-300">
                  Elegir Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CRM Section */}
      <Section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="crm">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sistema CRM Avanzado</h2>
          <p className="text-xl text-gray-600">Gestión integral de relaciones con clientes</p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Funcionalidades Principales</h3>
            <ul className="space-y-4">
              {[
                "Gestión de contactos y leads",
                "Pipeline de ventas personalizable",
                "Automatización de marketing",
                "Seguimiento de interacciones",
                "Análisis y reportes avanzados",
                "Integración con email y calendario"
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
            <Link
              to="/crm"
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Conocer Más
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="Sistema CRM"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </Section>

      {/* ERP Section */}
      <Section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="erp">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sistema ERP Empresarial</h2>
          <p className="text-xl text-gray-600">Gestión integral para tu empresa</p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg"
              alt="Sistema ERP"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl"></div>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Funcionalidades Principales</h3>
            <ul className="space-y-4">
              {[
                "Contabilidad y finanzas",
                "Gestión de inventario",
                "Recursos humanos",
                "Facturación electrónica",
                "Reportes personalizados",
                "Integración con otros sistemas"
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
            <Link
              to="/erp"
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Conocer Más
            </Link>
          </div>
        </div>
      </Section>

      {/* Appointment Management System */}
      <Section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50" id="turnos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sistema de Gestión de Turnos</h2>
            <p className="text-xl text-gray-600">Optimiza la gestión de citas y reservas</p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">Características Principales</h3>
              <ul className="space-y-4">
                {[
                  "Calendario interactivo multiusuario",
                  "Reservas online 24/7",
                  "Notificaciones automáticas",
                  "Gestión de disponibilidad",
                  "Recordatorios por SMS/Email",
                  "Panel de administración intuitivo"
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
              <Link
                to="/turnos"
                className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Conocer Más
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg"
                alt="Sistema de Turnos"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Subscription Management System */}
      <Section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="suscripciones">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sistema de Gestión de Suscripciones</h2>
          <p className="text-xl text-gray-600">Automatiza tus servicios recurrentes</p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
              alt="Sistema de Suscripciones"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl"></div>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Funcionalidades Avanzadas</h3>
            <ul className="space-y-4">
              {[
                "Gestión de planes y precios",
                "Facturación automática",
                "Recordatorios de pago",
                "Informes financieros",
                "Portal de autogestión",
                "Integración con pasarelas de pago"
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
            <Link
              to="/suscripciones"
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Conocer Más
            </Link>
          </div>
        </div>
      </Section>

      {/* Tracking System Section */}
      <Section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50" id="tracking">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sistema de Tracking</h2>
            <p className="text-xl text-gray-600">Seguimiento en tiempo real para tu logística</p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Características Principales</h3>
                <ul className="space-y-4">
                  {[
                    "Seguimiento GPS en tiempo real",
                    "Gestión de flotas y rutas",
                    "Alertas y notificaciones",
                    "Reportes personalizados",
                    "Integración con otros sistemas",
                    "App móvil para conductores"
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
              <Link
                to="/tracking"
                className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Conocer Más
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7348711/pexels-photo-7348711.jpeg"
                alt="Sistema de Tracking"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* E-commerce Preview Section */}
      <Section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="e-commerce">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Solución E-commerce</h2>
          <p className="text-xl text-gray-600">Potencia tus ventas online con nuestra plataforma integral</p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Características Principales</h3>
              <ul className="space-y-4">
                {[
                  "Diseño personalizado y responsive",
                  "Sistema de pagos integrado",
                  "Gestión de inventario en tiempo real",
                  "Panel de administración intuitivo",
                  "Sistema de tracking de envíos",
                  "Integración con marketplaces"
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
            <Link
              to="/ecommerce"
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Conocer Más
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg"
              alt="E-commerce Platform"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </Section>

      {/* Custom Development Section */}
      <Section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50" id="desarrollo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Desarrollo de Software a Medida</h2>
            <p className="text-xl text-gray-600">Soluciones personalizadas para cada necesidad</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Desarrollo Web",
                features: [
                  "Aplicaciones web modernas",
                  "APIs y microservicios",
                  "Arquitectura cloud",
                  "Integración continua"
                ]
              },
              {
                title: "Desarrollo Móvil",
                features: [
                  "Apps nativas iOS/Android",
                  "Aplicaciones híbridas",
                  "PWA",
                  "UX/UI móvil"
                ]
              },
              {
                title: "Desarrollo IoT",
                features: [
                  "Dispositivos conectados",
                  "Procesamiento en tiempo real",
                  "Edge Computing",
                  "Análisis de datos IoT"
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

          <div className="text-center">
            <Link
              to="/desarrollo"
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Conocer Más
            </Link>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="mb-8 md:mb-0">
              <img
                className="h-12 w-auto mb-4"
                alt="Logocyber"
                src="/logocyber-1.png"
              />
              <p className="text-gray-600">
                Buenos Aires 1631 3300, N3301IJH<br />
                Posadas, Misiones<br />
                Teléfono: 0376 438-2705
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Store</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Productos</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Servicios</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Repairs</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Diagnóstico</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Reparación</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Sistemas/Web</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Desarrollo</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Consultoría</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Guazuapp</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Características</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Precios</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4 md:mb-0">©2024 MisTec Capital, All rights reserved</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors">
                <img src="/vector.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors">
                <img src="/vector-1.svg" alt="Instagram" className="w-6 h-6" />
              </a>
              
              <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors">
                <img src="/vector-2.svg" alt="YouTube" className="w-6 h-6" />
              </a>
              <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors">
                <img src="/vector-3.svg" alt="Google+" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};