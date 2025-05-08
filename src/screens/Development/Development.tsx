import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const developmentServices = [
  {
    category: "Desarrollo Web",
    items: [
      {
        name: "Frontend Development",
        description: "Desarrollo de interfaces modernas y responsivas",
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
        technologies: ["React", "Vue.js", "Angular", "Next.js"],
        features: [
          "Diseño responsivo",
          "Optimización de rendimiento",
          "Accesibilidad",
          "SEO"
        ]
      },
      {
        name: "Backend Development",
        description: "APIs robustas y escalables",
        image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
        technologies: ["Node.js", "Python", "Java", "PHP"],
        features: [
          "Arquitectura RESTful",
          "Microservicios",
          "Seguridad",
          "Escalabilidad"
        ]
      },
      {
        name: "Full Stack Development",
        description: "Soluciones completas de principio a fin",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        technologies: ["MERN Stack", "MEAN Stack", "LAMP Stack"],
        features: [
          "Desarrollo integral",
          "Integración continua",
          "DevOps",
          "Mantenimiento"
        ]
      }
    ]
  },
  {
    category: "Desarrollo Móvil",
    items: [
      {
        name: "iOS Development",
        description: "Aplicaciones nativas para iPhone y iPad",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        technologies: ["Swift", "Objective-C", "Xcode"],
        features: [
          "UI/UX nativa",
          "Integración con iOS",
          "App Store",
          "Push Notifications"
        ]
      },
      {
        name: "Android Development",
        description: "Aplicaciones nativas para dispositivos Android",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        technologies: ["Kotlin", "Java", "Android Studio"],
        features: [
          "Material Design",
          "Google Play",
          "Firebase",
          "Android SDK"
        ]
      },
      {
        name: "Cross-Platform Development",
        description: "Desarrollo multiplataforma eficiente",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        technologies: ["React Native", "Flutter", "Xamarin"],
        features: [
          "Código compartido",
          "Rendimiento nativo",
          "Actualizaciones OTA",
          "Hot Reload"
        ]
      }
    ]
  },
  {
    category: "Tecnologías Emergentes",
    items: [
      {
        name: "Inteligencia Artificial",
        description: "Soluciones inteligentes y automatizadas",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        technologies: ["Machine Learning", "Deep Learning", "NLP"],
        features: [
          "Análisis predictivo",
          "Procesamiento de lenguaje",
          "Computer Vision",
          "Chatbots"
        ]
      },
      {
        name: "Blockchain",
        description: "Desarrollo de aplicaciones descentralizadas",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        technologies: ["Ethereum", "Solidity", "Web3.js"],
        features: [
          "Smart Contracts",
          "DApps",
          "Tokens",
          "DeFi"
        ]
      },
      {
        name: "IoT Development",
        description: "Soluciones para Internet de las Cosas",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        technologies: ["Arduino", "Raspberry Pi", "MQTT"],
        features: [
          "Sensores",
          "Actuadores",
          "Cloud Integration",
          "Real-time Data"
        ]
      }
    ]
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const Development = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Desarrollo de Software</h1>
            <p className="text-xl text-purple-100">Soluciones tecnológicas innovadoras para tu negocio</p>
          </div>
        </div>
      </div>

      {/* Development Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {developmentServices.map((category, categoryIndex) => (
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
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Tecnologías:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
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
                      to={`/desarrollo/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
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
          <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar tu proyecto?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Nuestro equipo de desarrolladores está listo para ayudarte
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-50 transition-colors duration-300"
          >
            Contactar Desarrollador
          </Link>
        </div>
      </div>
    </div>
  );
}; 