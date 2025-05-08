import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const diagnosticServices = [
  {
    category: "Diagnóstico de Hardware",
    items: [
      {
        name: "Diagnóstico de PC",
        description: "Análisis completo de componentes y rendimiento",
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
        features: [
          "Prueba de CPU y GPU",
          "Análisis de memoria RAM",
          "Diagnóstico de disco duro",
          "Prueba de fuente de poder"
        ],
        price: "Desde $50"
      },
      {
        name: "Diagnóstico de Laptop",
        description: "Evaluación especializada para portátiles",
        image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
        features: [
          "Prueba de batería",
          "Diagnóstico de pantalla",
          "Análisis de teclado",
          "Prueba de puertos"
        ],
        price: "Desde $40"
      },
      {
        name: "Diagnóstico de Periféricos",
        description: "Evaluación de dispositivos externos",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "Prueba de teclados",
          "Diagnóstico de mouse",
          "Análisis de impresoras",
          "Prueba de monitores"
        ],
        price: "Desde $30"
      }
    ]
  },
  {
    category: "Diagnóstico de Software",
    items: [
      {
        name: "Diagnóstico de Sistema",
        description: "Análisis completo del sistema operativo",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "Análisis de rendimiento",
          "Detección de malware",
          "Optimización del sistema",
          "Backup de datos"
        ],
        price: "Desde $45"
      },
      {
        name: "Recuperación de Datos",
        description: "Recuperación de información perdida",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "Recuperación de archivos",
          "Recuperación de particiones",
          "Backup de emergencia",
          "Recuperación de correos"
        ],
        price: "Desde $60"
      },
      {
        name: "Optimización",
        description: "Mejora del rendimiento del sistema",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "Limpieza de sistema",
          "Optimización de inicio",
          "Gestión de programas",
          "Actualizaciones"
        ],
        price: "Desde $35"
      }
    ]
  },
  {
    category: "Servicios Adicionales",
    items: [
      {
        name: "Mantenimiento Preventivo",
        description: "Servicios de mantenimiento regular",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "Limpieza física",
          "Actualización de drivers",
          "Verificación de seguridad",
          "Optimización general"
        ],
        price: "Desde $70"
      },
      {
        name: "Instalación de Software",
        description: "Instalación y configuración de programas",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "Sistema operativo",
          "Programas de oficina",
          "Antivirus",
          "Drivers"
        ],
        price: "Desde $40"
      },
      {
        name: "Consultoría Técnica",
        description: "Asesoramiento especializado",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "Evaluación de necesidades",
          "Recomendaciones",
          "Plan de mantenimiento",
          "Soporte continuo"
        ],
        price: "Desde $55"
      }
    ]
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const Diagnostico = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Servicios de Diagnóstico</h1>
            <p className="text-xl text-purple-100">Soluciones técnicas profesionales para tu equipo</p>
          </div>
        </div>
      </div>

      {/* Diagnostic Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {diagnosticServices.map((category, categoryIndex) => (
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
                        {service.price}
                      </span>
                    </div>
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
                      to={`/diagnostico/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
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
          <h2 className="text-3xl font-bold mb-4">¿Necesitas ayuda con tu equipo?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Nuestro equipo técnico está listo para ayudarte
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-50 transition-colors duration-300"
          >
            Contactar Técnico
          </Link>
        </div>
      </div>
    </div>
  );
}; 