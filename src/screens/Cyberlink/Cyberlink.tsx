import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Section } from "../../components/ui/Section";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const mainNavItems = [
  { name: "CHATBOT", path: "/chatbot" },
  { name: "GUAZUAPP", path: "/guazuapp" },
  { name: "DESARROLLOS A MEDIDA", path: "/desarrollo" }
];

const otherProducts = [
  { name: "ERP", path: "/erp" },
  { name: "RRHH", path: "/rrhh" },
  { name: "TURNOS", path: "/turnos" },
  { name: "SUSCRIPCIONES", path: "/suscripciones" },
  { name: "FLOTAS", path: "/gestion-flota" },
  { name: "RESTAURANTES", path: "/gestion-restaurante" },
  { name: "E-COMMERCE", path: "/ecommerce" },
  { name: "CRM", path: "/crm" }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const Cyberlink = (): JSX.Element => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('productos-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStoreRedirect = () => {
    window.open('https://tienda.cyberlink.com.ar', '_blank');
  };

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
            <div className="hidden md:flex space-x-8 items-center">
              {mainNavItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-gray-800 hover:text-purple-600 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Dropdown for Other Products */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center text-gray-800 hover:text-purple-600 transition-colors duration-200 font-medium"
                >
                  OTROS PRODUCTOS
                  <ChevronDownIcon 
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {otherProducts.map((product, index) => (
                      <Link
                        key={index}
                        to={product.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
              onClick={scrollToProducts}
              className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Comenzar Ahora
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              onClick={handleStoreRedirect}
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Ir a la Tienda
            </motion.button>
          </div>
        </div>
      </Section>

      {/* Chatbot Section */}
      <div id="productos-section">
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
                  src="/bot.png"
                  alt="Chatbot Features"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </Section>
      </div>

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
              src="/guazu.png"
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
              src="/erp.png"
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

      {/* HR System Section */}
      <Section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50" id="rrhh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sistema de Recursos Humanos</h2>
            <p className="text-xl text-gray-600">Gestión integral del capital humano</p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">Funcionalidades Principales</h3>
              <ul className="space-y-4">
                {[
                  "Gestión de personal",
                  "Reclutamiento y selección",
                  "Evaluación de desempeño",
                  "Control de asistencia",
                  "Gestión de nómina",
                  "Capacitación y desarrollo"
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
                to="/rrhh"
                className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Conocer Más
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg"
                alt="Sistema RRHH"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl"></div>
            </div>
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
                src="/turno.png"
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
              src="/suscrip.png"
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
                src="/flota.png"
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
              src="/restaurante.png"
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
              {[...mainNavItems, ...otherProducts].map((item, index) => (
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
                href="https://www.facebook.com/CyberlinkSrl" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/cyberlink.com.ar" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://wa.link/sllkx1" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};