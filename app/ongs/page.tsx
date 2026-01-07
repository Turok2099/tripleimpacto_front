export default function ONGsPage() {
  const ongs = [
    {
      id: 1,
      name: "Cáritas Argentina",
      logo: "🏥",
      description: "Organización de la Iglesia Católica dedicada a la asistencia social y el desarrollo humano integral.",
      focus: ["Asistencia alimentaria", "Salud", "Educación", "Vivienda"],
      beneficiaries: 450000,
      founded: 1960,
      website: "#",
      impact: "Presencia en todo el territorio nacional con más de 3.000 centros de atención",
    },
    {
      id: 2,
      name: "Techo",
      logo: "🏠",
      description: "Organización presente en Latinoamérica que busca superar la situación de pobreza en la que viven millones de personas.",
      focus: ["Construcción de viviendas", "Desarrollo comunitario", "Educación", "Empleo"],
      beneficiaries: 320000,
      founded: 1997,
      website: "#",
      impact: "Más de 150.000 viviendas construidas en 19 países de América Latina",
    },
    {
      id: 3,
      name: "Fundación Tzedaká",
      logo: "🎓",
      description: "Organización enfocada en la educación y el desarrollo de jóvenes en situación de vulnerabilidad.",
      focus: ["Becas educativas", "Capacitación laboral", "Mentorías", "Inserción laboral"],
      beneficiaries: 28000,
      founded: 2005,
      website: "#",
      impact: "85% de los egresados consiguen empleo en los primeros 6 meses",
    },
    {
      id: 4,
      name: "Banco de Alimentos",
      logo: "🍎",
      description: "Red nacional que lucha contra el hambre y el desperdicio de alimentos.",
      focus: ["Seguridad alimentaria", "Rescate de alimentos", "Nutrición", "Educación alimentaria"],
      beneficiaries: 550000,
      founded: 2001,
      website: "#",
      impact: "Más de 30 millones de kg de alimentos distribuidos anualmente",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            🤝 Nuestros aliados
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            ONGs Verificadas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabajamos exclusivamente con organizaciones certificadas, auditadas y con trayectoria comprobada en el impacto social.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-emerald-600 mb-2">4</div>
            <div className="text-gray-600 text-sm">ONGs Aliadas</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">1.3M+</div>
            <div className="text-gray-600 text-sm">Beneficiarios</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-gray-600 text-sm">Verificadas</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-orange-600 mb-2">60+</div>
            <div className="text-gray-600 text-sm">Años promedio</div>
          </div>
        </div>

        {/* ONGs Grid */}
        <div className="space-y-8">
          {ongs.map((ong, index) => (
            <div
              key={ong.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Logo */}
                  <div className="shrink-0">
                    <div className="w-24 h-24 bg-linear-to-br from-emerald-400 to-blue-400 rounded-2xl flex items-center justify-center text-5xl shadow-lg">
                      {ong.logo}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                          {ong.name}
                        </h2>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <span>📅</span>
                            Desde {ong.founded}
                          </span>
                          <span className="flex items-center gap-1">
                            <span>👥</span>
                            {ong.beneficiaries.toLocaleString()} beneficiarios
                          </span>
                        </div>
                      </div>
                      <span className="shrink-0 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                        ✓ Verificada
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {ong.description}
                    </p>

                    {/* Áreas de enfoque */}
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">
                        Áreas de enfoque:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {ong.focus.map((area) => (
                          <span
                            key={area}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Impacto */}
                    <div className="bg-emerald-50 rounded-lg p-4 mb-4">
                      <h3 className="text-sm font-semibold text-emerald-900 mb-1 flex items-center gap-2">
                        <span>📊</span>
                        Impacto destacado
                      </h3>
                      <p className="text-sm text-emerald-800">{ong.impact}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <a
                        href={ong.website}
                        className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors"
                      >
                        Apoyar a {ong.name}
                      </a>
                      <a
                        href={ong.website}
                        className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors"
                      >
                        Más información
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="mt-16 text-center bg-linear-to-br from-emerald-500 to-blue-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            ¿Tu ONG quiere unirse?
          </h2>
          <p className="text-emerald-50 mb-6 max-w-2xl mx-auto">
            Si representás una organización sin fines de lucro y querés formar parte de nuestra red, contactanos.
          </p>
          <button className="px-8 py-4 bg-white text-emerald-700 font-bold rounded-xl hover:shadow-xl transition-all">
            Contactar para alianzas
          </button>
        </div>
      </div>
    </div>
  );
}

