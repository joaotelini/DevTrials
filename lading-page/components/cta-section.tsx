export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto text-center animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-3xl shadow-2xl border border-gray-700 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Pronto para conquistar sua próxima vaga?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Comece agora mesmo a treinar para suas entrevistas técnicas e destaque-se dos demais candidatos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-blue-500/20"
              >
                Criar Conta Grátis
              </a>
              <a
                href="#"
                className="inline-block bg-gray-800 text-white border border-gray-700 px-8 py-3 rounded-full hover:bg-gray-700 transition-all"
              >
                Ver Planos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
