export default function AboutPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            La Comunidad Club Triple Impacto
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un espacio de encuentro donde la colaboración transforma la
            solidaridad en un movimiento colectivo de cambio real
          </p>
        </div>

        {/* Misión */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="text-3xl">🎯</span>
            Nuestra Misión
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Nacemos con la misión de generar un impacto positivo en la sociedad
            y en el ambiente a través de la unión y colaboración entre
            ciudadanos, gobiernos, empresas, ONGs y emprendedores.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Construimos un espacio de encuentro donde personas y organizaciones
            comprometidas con el triple impacto —social, ambiental y económico—
            pueden compartir experiencias, recursos y conocimientos para
            impulsar proyectos que mejoren la vida de las personas y del
            planeta.
          </p>
        </div>

        {/* Visión */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="text-3xl">🌟</span>
            Nuestra Visión
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Consolidarnos como una comunidad líder en sostenibilidad, reconocida
            por inspirar y demostrar que, cuando trabajamos juntos con
            transparencia, innovación y colaboración, es posible transformar la
            solidaridad en un movimiento colectivo capaz de generar un cambio
            real y duradero.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Formamos parte de un movimiento global de impacto positivo, donde la
            economía circular hace real la visión de un mundo mejor.
          </p>
        </div>

        {/* Valores */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">💎</span>
            Nuestros Valores
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span>🔍</span>
                Transparencia
              </h3>
              <p className="text-gray-600 text-sm">
                Cada peso es trazable. Reportamos el impacto de cada donación.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span>✓</span>
                Verificación
              </h3>
              <p className="text-gray-600 text-sm">
                Todas nuestras ONGs están auditadas y certificadas.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span>🤝</span>
                Colaboración
              </h3>
              <p className="text-gray-600 text-sm">
                Creamos redes de apoyo mutuo entre todos los actores.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span>💡</span>
                Innovación
              </h3>
              <p className="text-gray-600 text-sm">
                Reinventamos la manera de generar impacto social.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-linear-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Sé parte del cambio
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Te invitamos a unirte a esta comunidad que forma parte de un
            movimiento global de impacto positivo. Con tu adhesión, no solo
            obtienes beneficios, sino que también participas en la construcción
            de un ecosistema donde la economía circular hace real la visión de
            un mundo mejor.
          </p>
          <a
            href="/"
            className="inline-block px-8 py-4 bg-linear-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Unirme a la comunidad
          </a>
        </div>
      </div>
    </div>
  );
}
