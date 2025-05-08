import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    category: "Desarrollo de Software",
    items: [
      {
        name: "Desarrollo Web",
        description: "Creamos aplicaciones web modernas y responsivas con las últimas tecnologías",
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
        features: [
          "Diseño responsivo",
          "Optimización SEO",
          "Integración con APIs",
          "Panel de administración"
        ]
      },
      {
        name: "Desarrollo Móvil",
        description: "Desarrollamos aplicaciones nativas e híbridas para iOS y Android",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "Apps nativas",
          "Aplicaciones híbridas",
          "PWA",
          "Integración con servicios"
        ]
      },
      {
        name: "Desarrollo a Medida",
        description: "Soluciones personalizadas para necesidades específicas de tu negocio",
        image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
        features: [
          "Análisis de requerimientos",
          "Desarrollo personalizado",
          "Soporte continuo",
          "Capacitación"
        ]
      }
    ]
  },
  {
    category: "Soporte y Mantenimiento",
    items: [
      {
        name: "Soporte Técnico",
        description: "Asistencia técnica especializada para tu infraestructura tecnológica",
        image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
        features: [
          "Soporte 24/7",
          "Resolución remota",
          "Asistencia in situ",
          "Monitoreo proactivo"
        ]
      },
      {
        name: "Mantenimiento Preventivo",
        description: "Servicios de mantenimiento para prevenir fallas y optimizar rendimiento",
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
        features: [
          "Revisión periódica",
          "Actualizaciones",
          "Optimización",
          "Reportes detallados"
        ]
      },
      {
        name: "Recuperación de Datos",
        description: "Servicios especializados en recuperación de información",
        image: "https://images.pexels.com/photos/1181464/pexels-photo-1181464.jpeg",
        features: [
          "Recuperación de archivos",
          "Backup automático",
          "Recuperación de sistemas",
          "Consultoría"
        ]
      }
    ]
  },
  {
    category: "Consultoría y Capacitación",
    items: [
      {
        name: "Consultoría IT",
        description: "Asesoramiento especializado en tecnología y sistemas",
        image: "https://images.pexels.com/photos/3183155/pexels-photo-3183155.jpeg",
        features: [
          "Análisis de necesidades",
          "Planificación estratégica",
          "Optimización de procesos",
          "Implementación"
        ]
      },
      {
        name: "Capacitación",
        description: "Programas de formación para tu equipo en nuevas tecnologías",
        image: "https://images.pexels.com/photos/3183156/pexels-photo-3183156.jpeg",
        features: [
          "Cursos personalizados",
          "Workshops prácticos",
          "Certificaciones",
          "Seguimiento"
        ]
      },
      {
        name: "Auditoría de Sistemas",
        description: "Evaluación y mejora de tu infraestructura tecnológica",
        image: "https://images.pexels.com/photos/3183157/pexels-photo-3183157.jpeg",
        features: [
          "Análisis de seguridad",
          "Optimización de recursos",
          "Recomendaciones",
          "Plan de mejora"
        ]
      }
    ]
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const Services = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
            <p className="text-xl text-purple-100">Soluciones tecnológicas integrales para tu empresa</p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {services.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{category.category}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {category.items.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  transition={{ delay: serviceIndex * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <span className="text-purple-600 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/servicios/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300"
                    >
                      Solicitar Servicio
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
          <h2 className="text-3xl font-bold mb-4">¿Necesitas una solución personalizada?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Nuestro equipo de expertos está listo para ayudarte
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-50 transition-colors duration-300"
          >
            Contactar Consultor
          </Link>
        </div>
      </div>
    </div>
  );
}; 