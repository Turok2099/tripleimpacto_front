export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      icon: "🎯",
      title: "Donás al proyecto que elijas",
      description: "ONGs verificadas y transparentes.",
      details:
        "Elegí la causa que más te importa y decidís cuánto querés aportar. Sin mínimos, sin ataduras.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      number: "2",
      icon: "🎁",
      title: "Recibís tus cupones de descuento",
      description: "Automático, directo a tu correo o dashboard.",
      details:
        "Al instante, sin trámites. Accedé a tus beneficios desde donde quieras.",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      iconBg: "bg-emerald-100",
    },
    {
      number: "3",
      icon: "💰",
      title: "Ahorrás mientras generás impacto",
      description: "Usá tus beneficios en Bonda.",
      details:
        "Disfrutá descuentos exclusivos y recordá que cada compra ya generó un cambio positivo.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            En solo 3 pasos simples comenzás a generar impacto y recibir
            beneficios
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 relative">
          {/* Línea conectora vertical (solo desktop) */}
          <div className="hidden md:block absolute left-16 top-24 bottom-24 w-0.5 bg-linear-to-b from-blue-200 via-emerald-200 to-purple-200"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 0.2}s both`,
              }}
            >
              {/* Card */}
              <div
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-gray-100`}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Número y ícono */}
                  <div className="relative shrink-0">
                    {/* Círculo del número */}
                    <div
                      className={`w-32 h-32 rounded-full bg-linear-to-br ${step.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-center">
                        <div className="text-5xl mb-1">{step.icon}</div>
                        <div className="text-white font-bold text-lg">
                          Paso {step.number}
                        </div>
                      </div>
                    </div>

                    {/* Línea conectora a la siguiente card (solo en desktop) */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-8 bg-linear-to-b from-gray-300 to-transparent"></div>
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-lg font-medium text-emerald-600 mb-3">
                      {step.description}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {step.details}
                    </p>

                    {/* Indicador visual de progreso */}
                    <div className="mt-6 flex items-center gap-2">
                      {steps.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i <= index
                              ? `bg-linear-to-r ${step.color} w-12`
                              : "bg-gray-200 w-8"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow decoration */}
                  <div className="hidden lg:block shrink-0">
                    <svg
                      className="w-8 h-8 text-gray-300 group-hover:text-emerald-500 transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-full text-gray-700 mb-6">
            <svg
              className="w-5 h-5 text-emerald-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">Proceso 100% digital y seguro</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Listo para empezar?
          </h3>
          <button className="px-8 py-4 bg-linear-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
            Hacer mi primera donación
          </button>
        </div>
      </div>
    </section>
  );
}
