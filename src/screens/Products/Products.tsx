import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
  {
    category: "Hardware",
    items: [
      {
        name: "Computadoras",
        description: "Equipos de escritorio y notebooks de última generación",
        image: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg"
      },
      {
        name: "Periféricos",
        description: "Teclados, mouse, monitores y accesorios",
        image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg"
      },
      {
        name: "Redes",
        description: "Routers, switches y equipos de conectividad",
        image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg"
      }
    ]
  },
  {
    category: "Software",
    items: [
      {
        name: "Sistemas Operativos",
        description: "Windows, Linux y soluciones empresariales",
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg"
      },
      {
        name: "Antivirus",
        description: "Soluciones de seguridad y protección",
        image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg"
      },
      {
        name: "Ofimática",
        description: "Suites de productividad y herramientas",
        image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
      }
    ]
  },
  {
    category: "Servicios",
    items: [
      {
        name: "Mantenimiento",
        description: "Servicios de mantenimiento preventivo y correctivo",
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
      },
      {
        name: "Soporte Técnico",
        description: "Asistencia técnica especializada",
        image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
      },
      {
        name: "Consultoría",
        description: "Asesoramiento en tecnología y sistemas",
        image: "https://images.pexels.com/photos/3183155/pexels-photo-3183155.jpeg"
      }
    ]
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const Products = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Productos</h1>
            <p className="text-xl text-purple-100">Soluciones tecnológicas para tu negocio</p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {products.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{category.category}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {category.items.map((product, productIndex) => (
                <motion.div
                  key={productIndex}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  transition={{ delay: productIndex * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <Link
                      to={`/productos/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300"
                    >
                      Ver Detalles
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
          <h2 className="text-3xl font-bold mb-4">¿Necesitas ayuda para elegir?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Nuestro equipo de expertos está listo para asesorarte
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-50 transition-colors duration-300"
          >
            Contactar Asesor
          </Link>
        </div>
      </div>
    </div>
  );
}; 