import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../../components/ui/Section";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const Desarrollo = (): JSX.Element => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      {/* Hero Section */}
      <Section className="relative h-[70vh] flex items-center justify-center bg-[url(https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg)] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative text-center text-white space-y-6 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold leading-tight"
          >
            Desarrollo de Software a Medida
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-light"
          >
            Soluciones tecnológicas integrales para la era digital
          </motion.p>
        </div>
      </Section>

      {/* Web Development Section */}
      <Section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Desarrollo Web</h2>
          <p className="text-xl text-gray-600">Aplicaciones web modernas y escalables</p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Tecnologías Web</h3>
            <ul className="space-y-4">
              {[
                "React y Next.js",
                "Node.js y Express",
                "APIs RESTful",
                "Bases de datos SQL y NoSQL",
                "Arquitectura en la nube",
                "Integración continua"
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
              src="https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg"
              alt="Desarrollo Web"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </Section>

      {/* Mobile Development Section */}
      <Section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Desarrollo Móvil</h2>
            <p className="text-xl text-gray-600">Aplicaciones nativas y multiplataforma</p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
                alt="Desarrollo Móvil"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl"></div>
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">Tecnologías Móviles</h3>
              <ul className="space-y-4">
                {[
                  "React Native",
                  "Flutter",
                  "iOS nativo (Swift)",
                  "Android nativo (Kotlin)",
                  "PWA",
                  "Integración con APIs"
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

      {/* IoT Development Section */}
      <Section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Desarrollo IoT</h2>
          <p className="text-xl text-gray-600">Soluciones inteligentes conectadas</p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Tecnologías IoT</h3>
            <ul className="space-y-4">
              {[
                "Sensores y actuadores",
                "Conectividad (WiFi, BLE, LoRa)",
                "Procesamiento en tiempo real",
                "Edge Computing",
                "Plataformas IoT en la nube",
                "Análisis de datos IoT"
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
              src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg"
              alt="Desarrollo IoT"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600">Soluciones completas para tu negocio</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Desarrollo a Medida",
                features: [
                  "Análisis de requerimientos",
                  "Diseño de arquitectura",
                  "Desarrollo ágil",
                  "Testing y QA"
                ]
              },
              {
                title: "Consultoría Técnica",
                features: [
                  "Auditoría de sistemas",
                  "Optimización de procesos",
                  "Arquitectura cloud",
                  "Seguridad informática"
                ]
              },
              {
                title: "Mantenimiento",
                features: [
                  "Soporte continuo",
                  "Actualizaciones",
                  "Monitoreo 24/7",
                  "Backups y recuperación"
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