import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../../components/ui/Section";

const navItems = [
  { name: "CHATBOT", path: "/chatbot" },
  { name: "GUAZUAPP", path: "/guazuapp" },
  { name: "ERP", path: "/erp" },
  { name: "TURNOS", path: "/turnos" },
  { name: "SUSCRIPCIONES", path: "/suscripciones" },
  { name: "FLOTAS", path: "/gestion-flota" },
  { name: "RESTAURANTES", path: "/gestion-restaurante" },
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
          <div className="flex justify-center space-x-4">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Comenzar Ahora
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/productos">Ir a la Tienda</Link>
            </motion.button>
          </div>
        </div>
      </Section>

      {/* Chatbot Section */}
      <Section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sistema de Chatbot Inteligente</h2>
            <p className="text-xl text-gray-600">Automatiza tu atención al cliente con IA avanzada</p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">Características Avanzadas</h3>
              <ul className="space-y-4">
                {[
                  "Procesamiento de lenguaje natural",
                  "Aprendizaje automático continuo",
                  "Integración con múltiples plataformas",
                  "Personalización avanzada",
                  "Análisis de sentimientos",
                  "Reportes detallados"
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
                to="/chatbot"
                className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Conocer Más
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg"
                alt="Chatbot Features"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* GuazuApp Section */}
      <Section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="guazuapp">
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

      {/* Fleet Management System */}
      <Section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50" id="flotas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sistema de Gestión de Flotas</h2>
            <p className="text-xl text-gray-600">Control total de tu flota vehicular</p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">Características Principales</h3>
              <ul className="space-y-4">
                {[
                  "Seguimiento GPS en tiempo real",
                  "Control de combustible",
                  "Mantenimiento preventivo",
                  "Gestión de conductores",
                  "Reportes detallados",
                  "Optimización de rutas"
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
                to="/gestion-flota"
                className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Conocer Más
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7348711/pexels-photo-7348711.jpeg"
                alt="Sistema de Flotas"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Restaurant Management System */}
      <Section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="restaurantes">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sistema de Gestión de Restaurantes</h2>
          <p className="text-xl text-gray-600">Control total de tu negocio gastronómico</p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg"
              alt="Sistema de Restaurantes"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl"></div>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Funcionalidades Principales</h3>
            <ul className="space-y-4">
              {[
                "Gestión de mesas y reservas",
                "Control de inventario",
                "Sistema de pedidos",
                "Facturación electrónica",
                "Gestión de personal",
                "Reportes y estadísticas"
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
              to="/gestion-restaurante"
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Conocer Más
            </Link>
          </div>
        </div>
      </Section>

      {/* E-commerce Preview Section */}
      <Section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50" id="e-commerce">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                src="/rename.png"
                alt="E-commerce Platform"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Custom Development Section */}
      <Section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="desarrollo">
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
            <div className="grid grid-cols-3 gap-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="px-4 py-2 text-gray-600 hover:text-white bg-gray-100 hover:bg-purple-600 rounded-full transition-all duration-300 text-center text-sm font-medium transform hover:scale-105"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4 md:mb-0">©2025 MisTec Capital, Todos los derechos reservados</p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="#" 
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="#" 
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};