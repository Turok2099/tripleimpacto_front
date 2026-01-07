export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-600 via-blue-600 to-purple-700 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
          <span className="mr-2">✨</span>
          Tu momento de generar cambio
        </div>

        {/* Título Principal */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Convertí tu ayuda en{" "}
          <span className="block bg-white/20 backdrop-blur-sm inline-block px-4 py-2 rounded-2xl mt-2">
            impacto y beneficios
          </span>
        </h2>

        {/* Subtítulo */}
        <p className="text-xl sm:text-2xl text-emerald-50 mb-10 leading-relaxed max-w-2xl mx-auto">
          Cada donación transforma vidas y te recompensa. 
          <span className="block mt-2 font-semibold">Doná hoy, cambiá el futuro.</span>
        </p>

        {/* Propuesta de valor rápida */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-white">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-full">
            <span className="text-2xl">⚡</span>
            <span className="font-medium">Impacto inmediato</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-full">
            <span className="text-2xl">🎁</span>
            <span className="font-medium">Descuentos al instante</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-full">
            <span className="text-2xl">✓</span>
            <span className="font-medium">100% transparente</span>
          </div>
        </div>

        {/* CTA Principal */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="group px-10 py-5 bg-white text-emerald-700 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
            <span className="flex items-center justify-center gap-3">
              <span>Donar ahora</span>
              <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
            </span>
          </button>
          <button className="px-8 py-5 bg-transparent text-white font-semibold text-lg rounded-2xl border-2 border-white hover:bg-white hover:text-emerald-700 transition-all duration-300 w-full sm:w-auto">
            Ver proyectos activos
          </button>
        </div>

        {/* Trust elements */}
        <div className="flex flex-wrap justify-center gap-4 text-emerald-50 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Sin comisiones ocultas</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Cancelá cuando quieras</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Seguro y confiable</span>
          </div>
        </div>

        {/* Stats pequeños */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid grid-cols-3 gap-4 text-white max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold mb-1">1.2K+</div>
              <div className="text-emerald-100 text-sm">Donantes activos</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">$2.5M</div>
              <div className="text-emerald-100 text-sm">Recaudado</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">98%</div>
              <div className="text-emerald-100 text-sm">Satisfacción</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

