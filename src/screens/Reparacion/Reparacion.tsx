import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const repairServices = [
  {
    category: "Reparación de Hardware",
    items: [
      {
        name: "Reparación de PC",
        description: "Servicio técnico especializado para computadoras de escritorio",
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
        features: [
          "Cambio de componentes",
          "Reparación de placa madre",
          "Reemplazo de fuente",
          "Actualización de hardware"
        ],
        price: "Desde $80",
        time: "24-48 horas"
      },
      {
        name: "Reparación de Laptop",
        description: "Servicio técnico especializado para portátiles",
        image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
        features: [
          "Reparación de pantalla",
          "Cambio de teclado",
          "Reparación de batería",
          "Mantenimiento general"
        ],
        price: "Desde $100",
        time: "24-72 horas"
      },
      {
        name: "Reparación de Periféricos",
        description: "Servicio técnico para dispositivos externos",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "Reparación de impresoras",
          "Arreglo de monitores",
          "Reparación de teclados",
          "Servicio de mouse"
        ],
        price: "Desde $40",
        time: "24 horas"
      }
    ]
  },
  {
    category: "Reparación de Software",
    items: [
      {
        name: "Reparación de Sistema",
        description: "Solución de problemas del sistema operativo",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "Recuperación de sistema",
          "Eliminación de virus",
          "Optimización de rendimiento",
          "Backup de datos"
        ],
        price: "Desde $60",
        time: "2-4 horas"
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
        price: "Desde $80",
        time: "24-48 horas"
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
        price: "Desde $50",
        time: "2-4 horas"
      }
    ]
  },
  {
    category: "Servicios Especializados",
    items: [
      {
        name: "Reparación de Redes",
        description: "Solución de problemas de conectividad",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "Configuración de routers",
          "Reparación de cables",
          "Optimización de red",
          "Seguridad de red"
        ],
        price: "Desde $70",
        time: "2-4 horas"
      },
      {
        name: "Reparación de Servidores",
        description: "Mantenimiento y reparación de servidores",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "Mantenimiento preventivo",
          "Reparación de hardware",
          "Optimización de rendimiento",
          "Backup de datos"
        ],
        price: "Desde $150",
        time: "24-48 horas"
      },
      {
        name: "Reparación de Dispositivos Móviles",
        description: "Servicio técnico para smartphones y tablets",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        features: [
          "Cambio de pantalla",
          "Reparación de batería",
          "Cambio de puertos",
          "Mantenimiento general"
        ],
        price: "Desde $90",
        time: "24-48 horas"
      }
    ]
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const Reparacion = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Servicios de Reparación</h1>
            <p className="text-xl text-purple-100">Soluciones técnicas profesionales para tu equipo</p>
          </div>
        </div>
      </div>

      {/* Repair Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {repairServices.map((category, categoryIndex) => (
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
                      <div className="text-right">
                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium block mb-2">
                          {service.price}
                        </span>
                        <span className="text-gray-500 text-sm">
                          Tiempo: {service.time}
                        </span>
                      </div>
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
                      to={`/reparacion/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300"
                    >
                      Solicitar Reparación
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
          <h2 className="text-3xl font-bold mb-4">¿Necesitas reparar tu equipo?</h2>
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