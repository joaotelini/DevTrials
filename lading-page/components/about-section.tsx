export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Sobre o DevTrails
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nossa missão é ajudar desenvolvedores a conquistarem suas vagas dos sonhos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700 aspect-square flex items-center justify-center">
            <div className="relative w-full h-full">
              <div className="absolute inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  DevTrails
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300">
              O DevTrails nasceu da ideia de que todo desenvolvedor merece um ambiente seguro e realista para praticar
              entrevistas técnicas. Com tecnologia de IA e foco no progresso individual, nossa missão é fazer você
              brilhar nos processos seletivos.
            </p>
            <p className="text-gray-300">
              Nossa plataforma foi desenvolvida por profissionais que passaram por centenas de entrevistas e entendem
              exatamente quais são os desafios e expectativas dos recrutadores nas principais empresas de tecnologia.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-blue-500/20"
              >
                Ver Planos
              </a>
              <a
                href="#"
                className="inline-block bg-gray-800 text-white border border-gray-700 px-6 py-3 rounded-full hover:bg-gray-700 transition-all"
              >
                Agendar Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
