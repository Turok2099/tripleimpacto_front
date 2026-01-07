"use client";

import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "¿Por qué recibo descuentos por donar?",
    answer:
      "Nuestro modelo de Triple Impacto conecta tu generosidad con comercios aliados que creen en la responsabilidad social. Ellos ofrecen descuentos exclusivos como reconocimiento a tu compromiso con el cambio social. Así, tu donación genera impacto positivo y tú recibes beneficios tangibles.",
    icon: "🎁",
  },
  {
    id: 2,
    question: "¿Cómo recibo mis cupones?",
    answer:
      "Los cupones se envían automáticamente a tu correo electrónico inmediatamente después de confirmar tu donación. También podés acceder a todos tus beneficios desde tu dashboard personal en cualquier momento. Los cupones incluyen códigos únicos y condiciones de uso claras.",
    icon: "📧",
  },
  {
    id: 3,
    question: "¿Qué pasa si no uso el cupón?",
    answer:
      "No hay problema. Los cupones tienen una validez que aparece claramente indicada (generalmente de 30 a 90 días). Si no los usás, no perdés nada: tu donación ya generó el impacto social que buscabas. Los descuentos son un beneficio adicional, no una obligación.",
    icon: "⏰",
  },
  {
    id: 4,
    question: "¿Mi donación es deducible de impuestos?",
    answer:
      "Sí. Todas nuestras ONGs aliadas están certificadas y habilitadas para emitir comprobantes de donación válidos para deducción de impuestos según la normativa vigente. Recibís el certificado automáticamente después de cada donación para tu declaración anual.",
    icon: "📄",
  },
  {
    id: 5,
    question: "¿Qué proyectos apoyo con mi donación?",
    answer:
      "Podés elegir el proyecto específico que querés apoyar: educación, salud, vivienda, alimentación, entre otros. Cada proyecto incluye descripción detallada, objetivos y reportes de impacto. También ofrecemos la opción de que tu donación se distribuya automáticamente según las necesidades más urgentes.",
    icon: "🎯",
  },
  {
    id: 6,
    question: "¿Cuál es el monto mínimo para donar?",
    answer:
      "No hay monto mínimo. Podés donar desde $5.000 en adelante. Creemos que cada aporte cuenta y genera impacto. Los beneficios y descuentos están disponibles desde la primera donación, independientemente del monto.",
    icon: "💰",
  },
  {
    id: 7,
    question: "¿Cómo sé que mi donación llega a destino?",
    answer:
      "Garantizamos 100% de transparencia. Recibís reportes mensuales con el impacto específico de tu donación: cuántas personas se beneficiaron, en qué se usó tu aporte y resultados medibles. Además, todas nuestras ONGs están auditadas por terceros independientes.",
    icon: "🔍",
  },
  {
    id: 8,
    question: "¿Puedo cancelar mis donaciones recurrentes?",
    answer:
      "Absolutamente. Si elegiste donar de forma recurrente (mensual), podés cancelar en cualquier momento desde tu dashboard sin penalidades ni preguntas. Tenés control total sobre tus donaciones.",
    icon: "🔄",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-gray-600">
            Todo lo que necesitás saber sobre cómo funciona Club Triple Impacto
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border-2 border-gray-100"
              style={{
                animation: `slideInUp 0.4s ease-out ${index * 0.05}s both`,
              }}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-3xl shrink-0">{faq.icon}</span>
                  <span className="font-semibold text-gray-900 text-lg pr-4">
                    {faq.question}
                  </span>
                </div>
                <svg
                  className={`w-6 h-6 text-gray-500 shrink-0 transition-transform duration-300 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openId === faq.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <div className="pl-14 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA adicional */}
        <div className="mt-12 text-center bg-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            ¿Tenés otra pregunta?
          </h3>
          <p className="text-gray-600 mb-6">
            Nuestro equipo está disponible para ayudarte
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
              📧 Contactar soporte
            </button>
            <button className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-colors">
              💬 Chat en vivo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
