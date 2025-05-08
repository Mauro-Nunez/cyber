import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const features = [
  {
    category: "Comunicación Multicanal",
    items: [
      {
        name: "Chatbots Inteligentes",
        description: "Automatización de conversaciones con IA avanzada",
        image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
        features: [
          "Procesamiento de lenguaje natural",
          "Respuestas contextuales",
          "Aprendizaje continuo",
          "Integración multi-plataforma"
        ]
      },
      {
        name: "Gestión de Canales",
        description: "Centralización de todas las comunicaciones",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "WhatsApp Business",
          "Facebook Messenger",
          "Instagram Direct",
          "Email y SMS"
        ]
      },
      {
        name: "Mensajería Unificada",
        description: "Interfaz única para todos los canales",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "Bandeja de entrada unificada",
          "Historial de conversaciones",
          "Plantillas personalizables",
          "Respuestas rápidas"
        ]
      }
    ]
  },
  {
    category: "CRM Avanzado",
    items: [
      {
        name: "Gestión de Contactos",
        description: "Base de datos centralizada de clientes",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "Perfiles detallados",
          "Historial de interacciones",
          "Segmentación avanzada",
          "Importación/Exportación"
        ]
      },
      {
        name: "Automatización",
        description: "Flujos de trabajo automatizados",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "Reglas personalizables",
          "Acciones automáticas",
          "Notificaciones programadas",
          "Integración con APIs"
        ]
      },
      {
        name: "Análisis y Reportes",
        description: "Métricas y estadísticas en tiempo real",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "Dashboard personalizable",
          "Reportes exportables",
          "KPIs clave",
          "Análisis predictivo"
        ]
      }
    ]
  },
  {
    category: "Integración y Seguridad",
    items: [
      {
        name: "APIs y Webhooks",
        description: "Integración con sistemas externos",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "API RESTful",
          "Webhooks personalizables",
          "Documentación completa",
          "SDKs disponibles"
        ]
      },
      {
        name: "Seguridad Avanzada",
        description: "Protección de datos y comunicaciones",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "Encriptación end-to-end",
          "Autenticación multifactor",
          "Cumplimiento GDPR",
          "Auditorías de seguridad"
        ]
      },
      {
        name: "Escalabilidad",
        description: "Infraestructura cloud de alto rendimiento",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "Auto-scaling",
          "Alta disponibilidad",
          "Backup automático",
          "Monitoreo 24/7"
        ]
      }
    ]
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const Caracteristicas = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Características de GuazuApp</h1>
            <p className="text-xl text-purple-100">Descubre todo lo que nuestra plataforma puede hacer por tu negocio</p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {features.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{category.category}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {category.items.map((feature, featureIndex) => (
                <motion.div
                  key={featureIndex}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  transition={{ delay: featureIndex * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <img
                      src={feature.image}
                      alt={feature.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.name}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2 mb-6">
                      {feature.features.map((item, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <span className="text-purple-600 mr-2">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/caracteristicas/${feature.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300"
                    >
                      Más Información
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para transformar tu negocio?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Comienza a utilizar GuazuApp hoy mismo
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-50 transition-colors duration-300"
          >
            Solicitar Demo
          </Link>
        </div>
      </div>
    </div>
  );
}; 