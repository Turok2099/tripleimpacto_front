export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-emerald-50 via-white to-blue-50 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido Izquierdo */}
          <div className="text-center lg:text-left">
            {/* Título principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Dona y recibe{" "}
              <span className="bg-linear-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                descuentos exclusivos
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Tu donación apoya proyectos sociales y te da acceso a cupones de
              descuento.
            </p>

            {/* Propuesta de valor rápida */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8 text-left">
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">🎁</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Para ti</h3>
                  <p className="text-sm text-gray-600">
                    Descuentos en comercios de Bonda
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">🤝</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Para todos
                  </h3>
                  <p className="text-sm text-gray-600">
                    Apoyo a proyectos sociales
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-linear-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2">
                <span>Quiero donar y obtener descuentos</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              </button>
              <button className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 border-2 border-gray-200 hover:border-emerald-300">
                Ver beneficios disponibles
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-emerald-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>100% transparente</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-emerald-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Impacto verificado</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-emerald-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Descuentos inmediatos</span>
              </div>
            </div>
          </div>

          {/* Contenido Derecho - Ilustración Visual */}
          <div className="relative hidden lg:block">
            {/* Card de ejemplo de beneficio */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="absolute -top-4 -right-4 bg-red-500 text-white font-bold px-4 py-2 rounded-full shadow-lg">
                -30%
              </div>
              <div className="mb-4">
                <div className="w-16 h-16 bg-linear-to-br from-emerald-400 to-blue-400 rounded-xl flex items-center justify-center text-3xl mb-4">
                  🛍️
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Cupón de Descuento
                </h3>
                <p className="text-gray-600 mb-4">
                  Obtén descuentos exclusivos en comercios de Bonda
                </p>
                <div className="border-t-2 border-dashed border-gray-200 pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Tu donación:</span>
                    <span className="font-bold text-emerald-600">$10.000</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-gray-600">Tu ahorro:</span>
                    <span className="font-bold text-blue-600">$15.000</span>
                  </div>
                </div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-3 text-center">
                <p className="text-sm font-medium text-emerald-800">
                  ¡Ganas más de lo que donas! 💚
                </p>
              </div>
            </div>

            {/* Elementos flotantes */}
            <div className="absolute -top-8 -left-8 bg-white rounded-xl shadow-lg p-4 animate-float">
              <div className="flex items-center gap-2">
                <span className="text-2xl">❤️</span>
                <div className="text-sm">
                  <div className="font-bold text-gray-900">1,250</div>
                  <div className="text-gray-600">Donaciones</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-lg p-4 animate-float animation-delay-2000">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <div className="text-sm">
                  <div className="font-bold text-gray-900">500+</div>
                  <div className="text-gray-600">Beneficios</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flecha scroll down */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
