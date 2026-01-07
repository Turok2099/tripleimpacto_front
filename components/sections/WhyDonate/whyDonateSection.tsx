"use client";

// Tipos
interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
  beneficiaries: number;
}

interface ImpactStat {
  icon: string;
  value: string;
  label: string;
  description: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
}

// Mock Data - ONGs aliadas
const partners: Partner[] = [
  {
    id: 1,
    name: "Cáritas Argentina",
    logo: "🏥",
    description: "Asistencia social y apoyo a familias vulnerables",
    beneficiaries: 450,
  },
  {
    id: 2,
    name: "Techo",
    logo: "🏠",
    description: "Construcción de viviendas para comunidades necesitadas",
    beneficiaries: 320,
  },
  {
    id: 3,
    name: "Fundación Tzedaká",
    logo: "🎓",
    description: "Educación y desarrollo para jóvenes en riesgo",
    beneficiaries: 280,
  },
  {
    id: 4,
    name: "Banco de Alimentos",
    logo: "🍎",
    description: "Lucha contra el hambre y distribución de alimentos",
    beneficiaries: 550,
  },
];

// Estadísticas de impacto
const impactStats: ImpactStat[] = [
  {
    icon: "👥",
    value: "+1,200",
    label: "Personas beneficiadas",
    description: "Familias que recibieron apoyo directo",
  },
  {
    icon: "🎯",
    value: "+10",
    label: "Proyectos activos",
    description: "Iniciativas en curso en todo el país",
  },
  {
    icon: "💰",
    value: "$2.5M",
    label: "Donaciones gestionadas",
    description: "Total recaudado en el último año",
  },
  {
    icon: "🤝",
    value: "4",
    label: "ONGs aliadas",
    description: "Organizaciones certificadas y auditadas",
  },
];

// Testimonios
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María González",
    role: "Donante regular",
    avatar: "👩",
    text: "Donar nunca fue tan fácil y transparente. Veo el impacto de cada peso que aporto y además obtengo descuentos que uso mensualmente. Es ganar-ganar.",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Empresario",
    avatar: "👨‍💼",
    text: "Como empresa, buscábamos una forma de generar impacto social real. Club Triple Impacto nos permite hacerlo de manera medible y obtener beneficios para nuestro equipo.",
    rating: 5,
  },
  {
    id: 3,
    name: "Laura Fernández",
    role: "Beneficiaria - Fundación Tzedaká",
    avatar: "👩‍🎓",
    text: "Gracias a las donaciones pude terminar mis estudios. Hoy soy profesional y puedo ayudar a mi familia. Eternamente agradecida.",
    rating: 5,
  },
];

// Áreas de impacto
const impactAreas = [
  { icon: "🏥", title: "Salud", description: "Acceso a atención médica" },
  { icon: "🎓", title: "Educación", description: "Becas y capacitación" },
  { icon: "🍎", title: "Alimentación", description: "Seguridad alimentaria" },
  { icon: "🏠", title: "Vivienda", description: "Construcción y mejoras" },
];

export default function WhyDonateSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            🛡️ Confianza y transparencia
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            ¿Por qué donar con Club Triple Impacto?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos el puente entre tu generosidad y el cambio real. Cada donación
            es 100% trazable y genera impacto verificable.
          </p>
        </div>

        {/* Estadísticas de Impacto */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-linear-to-br from-blue-50 to-purple-50 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="text-5xl mb-3">{stat.icon}</div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-gray-800 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* ONGs Aliadas */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              Nuestras ONGs aliadas
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trabajamos exclusivamente con organizaciones certificadas,
              auditadas y con trayectoria comprobada
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {partners.map((partner, index) => (
              <div
                key={partner.id}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.15}s both`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-16 h-16 bg-linear-to-br from-emerald-400 to-blue-400 rounded-xl flex items-center justify-center text-3xl">
                    {partner.logo}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {partner.name}
                    </h4>
                    <p className="text-gray-600 mb-3 text-sm">
                      {partner.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-medium">
                        ✓ Verificada
                      </span>
                      <span className="text-gray-500">
                        {partner.beneficiaries} beneficiarios
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Áreas de Impacto */}
        <div className="mb-20 bg-linear-to-br from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              Áreas donde generamos impacto
            </h3>
            <p className="text-gray-600">
              Tu donación llega a donde realmente se necesita
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-3">{area.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{area.title}</h4>
                <p className="text-sm text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonios */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              Lo que dicen nuestros donantes
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Historias reales de personas que confían en nuestro modelo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-300 hover:shadow-xl transition-all duration-300"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.15}s both`,
                }}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Texto */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Autor */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="w-12 h-12 bg-linear-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sello de Confianza */}
        <div className="bg-linear-to-br from-emerald-500 to-blue-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-6xl mb-4">🛡️</div>
            <h3 className="text-3xl font-bold mb-4">
              Transparencia garantizada
            </h3>
            <p className="text-emerald-50 text-lg mb-6">
              Cada donación es auditada, trazable y verificable. Recibís
              reportes mensuales del impacto generado con tu aporte.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <span>✓</span>
                <span>Auditorías independientes</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <span>✓</span>
                <span>Reportes de impacto</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <span>✓</span>
                <span>100% trazabilidad</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <span>✓</span>
                <span>Datos verificables</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Formá parte del cambio
          </h3>
          <p className="text-gray-600 mb-6">
            Más de 1,200 personas ya confían en nuestro modelo
          </p>
          <button className="px-8 py-4 bg-linear-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
            Comenzar a donar ahora
          </button>
        </div>
      </div>
    </section>
  );
}
