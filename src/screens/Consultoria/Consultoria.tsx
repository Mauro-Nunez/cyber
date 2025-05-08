import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const consultingServices = [
  {
    category: "Consultoría Tecnológica",
    items: [
      {
        name: "Transformación Digital",
        description: "Asesoramiento en la implementación de tecnologías digitales",
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
        features: [
          "Análisis de procesos actuales",
          "Plan de transformación",
          "Implementación de soluciones",
          "Capacitación de personal"
        ],
        duration: "3-6 meses",
        expertise: ["Cloud Computing", "IoT", "Big Data"]
      },
      {
        name: "Seguridad Informática",
        description: "Evaluación y mejora de la seguridad de sistemas",
        image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
        features: [
          "Auditoría de seguridad",
          "Análisis de vulnerabilidades",
          "Implementación de políticas",
          "Capacitación en seguridad"
        ],
        duration: "1-3 meses",
        expertise: ["Ciberseguridad", "Compliance", "ISO 27001"]
      },
      {
        name: "Optimización de Infraestructura",
        description: "Mejora de la infraestructura tecnológica",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "Evaluación de infraestructura",
          "Plan de optimización",
          "Migración de sistemas",
          "Soporte continuo"
        ],
        duration: "2-4 meses",
        expertise: ["Networking", "Cloud", "DevOps"]
      }
    ]
  },
  {
    category: "Consultoría de Negocios",
    items: [
      {
        name: "Estrategia Digital",
        description: "Desarrollo de estrategias para el entorno digital",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "Análisis de mercado",
          "Plan estratégico",
          "Implementación de soluciones",
          "Seguimiento y ajustes"
        ],
        duration: "2-4 meses",
        expertise: ["Marketing Digital", "E-commerce", "Redes Sociales"]
      },
      {
        name: "Gestión de Proyectos",
        description: "Asesoramiento en la gestión de proyectos tecnológicos",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "Metodologías ágiles",
          "Gestión de recursos",
          "Control de calidad",
          "Documentación"
        ],
        duration: "Ongoing",
        expertise: ["Scrum", "Kanban", "PMI"]
      },
      {
        name: "Innovación Tecnológica",
        description: "Identificación e implementación de tecnologías emergentes",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "Análisis de tendencias",
          "Prueba de conceptos",
          "Implementación piloto",
          "Escalamiento"
        ],
        duration: "3-6 meses",
        expertise: ["AI/ML", "Blockchain", "AR/VR"]
      }
    ]
  },
  {
    category: "Consultoría Especializada",
    items: [
      {
        name: "Compliance y Regulaciones",
        description: "Asesoramiento en cumplimiento normativo",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "Análisis de regulaciones",
          "Implementación de controles",
          "Auditorías internas",
          "Capacitación"
        ],
        duration: "Ongoing",
        expertise: ["GDPR", "LGPD", "ISO 27001"]
      },
      {
        name: "Optimización de Procesos",
        description: "Mejora de procesos empresariales",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "Mapeo de procesos",
          "Identificación de mejoras",
          "Implementación",
          "Monitoreo"
        ],
        duration: "2-4 meses",
        expertise: ["BPM", "Lean", "Six Sigma"]
      },
      {
        name: "Soporte Continuo",
        description: "Asesoramiento técnico permanente",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "Soporte técnico",
          "Mantenimiento preventivo",
          "Actualizaciones",
          "Capacitación"
        ],
        duration: "Ongoing",
        expertise: ["Soporte IT", "Mantenimiento", "Training"]
      }
    ]
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const Consultoria = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Servicios de Consultoría</h1>
            <p className="text-xl text-purple-100">Soluciones estratégicas para impulsar tu negocio</p>
          </div>
        </div>
      </div>

      {/* Consulting Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {consultingServices.map((category, categoryIndex) => (
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
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                        {service.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Áreas de Experiencia:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.expertise.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <span className="text-purple-600 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/consultoria/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300"
                    >
                      Solicitar Consultoría
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
          <h2 className="text-3xl font-bold mb-4">¿Necesitas asesoramiento especializado?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Nuestro equipo de consultores está listo para ayudarte
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