import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // ONGs aliadas
  const ongs = [
    { name: "Cáritas Argentina", url: "#" },
    { name: "Techo", url: "#" },
    { name: "Fundación Tzedaká", url: "#" },
    { name: "Banco de Alimentos", url: "#" },
  ];

  // Links rápidos
  const quickLinks = [
    { name: "Cómo funciona", url: "#como-funciona" },
    { name: "Beneficios", url: "#beneficios" },
    { name: "Proyectos activos", url: "#proyectos" },
    { name: "Sobre nosotros", url: "#nosotros" },
  ];

  // Redes sociales
  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "#" },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/comunidadclubtripleimpacto/?igsh=emZzOGIzd25ldjZz",
    },
    { name: "Twitter", icon: Twitter, url: "#" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/comunidad-club-triple-impacto/posts/?feedView=all",
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Sección principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Columna 1: Logo y descripción */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center text-2xl">
                💚
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Club</h3>
                <h3 className="text-emerald-400 font-bold text-lg -mt-1">
                  Triple Impacto
                </h3>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Transformamos tu generosidad en impacto social real y beneficios
              exclusivos. Doná, ayudá y ahorrá.
            </p>
            {/* Redes sociales */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <IconComponent className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Columna 2: ONGs Aliadas */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              ONGs Aliadas
            </h4>
            <ul className="space-y-3">
              {ongs.map((ong) => (
                <li key={ong.name}>
                  <a
                    href={ong.url}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                    <span>{ong.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">📧</span>
                <a
                  href="mailto:clubtripleimpacto@gmail.com"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  clubtripleimpacto@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">📱</span>
                <a
                  href="https://wa.me/5491156393261"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  +54 11 5639-3261 (WhatsApp)
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">📍</span>
                <span className="text-gray-400">
                  Caseros 1213, San Isidro, Buenos Aires
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">🕐</span>
                <span className="text-gray-400">Atención 24 horas</span>
              </li>
            </ul>

            <a
              href="/contact"
              className="inline-block px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Formulario de contacto
            </a>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="text-white font-medium text-sm mb-3">
                Newsletter
              </h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors text-sm font-medium">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección inferior */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} Club Triple Impacto. Todos los derechos
              reservados.
            </div>

            {/* Links legales */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="#terminos"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Términos y condiciones
              </a>
              <a
                href="#privacidad"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Política de privacidad
              </a>
              <a
                href="#cookies"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Política de cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
