import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const pricingPlans = [
  {
    name: "GuazuBase",
    price: "€10",
    period: "mes",
    description: "Ideal para pequeñas empresas que comienzan su transformación digital",
    features: [
      "1 canal de comunicación",
      "Mensajes ilimitados",
      "Búsqueda básica",
      "Integraciones básicas",
      "Soporte por email",
      "Actualizaciones mensuales"
    ],
    recommended: false
  },
  {
    name: "GuazuPlus",
    price: "€15",
    period: "mes",
    description: "Perfecto para empresas en crecimiento que necesitan más funcionalidades",
    features: [
      "Todo lo de GuazuBase",
      "3 canales de comunicación",
      "CRM básico",
      "Automatizaciones",
      "Soporte prioritario",
      "Actualizaciones semanales",
      "API básica",
      "Reportes personalizados"
    ],
    recommended: true
  },
  {
    name: "GuazuPro",
    price: "€111",
    period: "mes",
    description: "Solución completa para empresas que buscan maximizar su potencial",
    features: [
      "Todo lo de GuazuPlus",
      "Canales ilimitados",
      "CRM avanzado",
      "API personalizada",
      "Soporte 24/7",
      "Actualizaciones en tiempo real",
      "Integraciones premium",
      "Panel de administración avanzado",
      "Análisis predictivo",
      "SLA garantizado"
    ],
    recommended: false
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const Precios = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Planes y Precios</h1>
            <p className="text-xl text-purple-100">Elige el plan perfecto para tu negocio</p>
          </div>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                plan.recommended ? 'ring-2 ring-purple-600 relative' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 rounded-bl-lg">
                  Recomendado
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">/{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <span className="text-purple-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contacto"
                  className={`block w-full text-center py-3 px-6 rounded-full font-medium transition-colors duration-300 ${
                    plan.recommended
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Comenzar Ahora
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Preguntas Frecuentes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "¿Puedo cambiar de plan en cualquier momento?",
                answer: "Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se reflejarán en tu próxima factura."
              },
              {
                question: "¿Hay un período de prueba?",
                answer: "Ofrecemos una prueba gratuita de 14 días para que puedas evaluar todas las funcionalidades."
              },
              {
                question: "¿Qué métodos de pago aceptan?",
                answer: "Aceptamos todas las tarjetas de crédito principales, PayPal y transferencia bancaria."
              },
              {
                question: "¿Ofrecen descuentos para organizaciones sin fines de lucro?",
                answer: "Sí, ofrecemos descuentos especiales para organizaciones sin fines de lucro y educativas."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas un plan personalizado?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Contáctanos para crear una solución adaptada a tus necesidades
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-50 transition-colors duration-300"
          >
            Contactar Ventas
          </Link>
        </div>
      </div>
    </div>
  );
}; 