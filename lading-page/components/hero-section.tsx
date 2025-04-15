import { ChevronDown } from "lucide-react"


export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4 pt-28 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-3xl space-y-8 hero-content opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
        <div className="inline-block mb-4">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-1 rounded-full text-sm font-medium">
            Novo Simulador de Entrevistas com IA
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold hero-title bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Treine. Evolua. <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Supere.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Prepare-se para entrevistas técnicas com nosso simulador de IA. Pratique, receba feedback instantâneo e ganhe
          confiança para conquistar a sua vaga dos sonhos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="#features"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-blue-500/20"
          >
            Quero Evoluir
          </a>
          <a
            href="#about"
            className="inline-block bg-gray-800 text-white border border-gray-700 px-8 py-3 rounded-full hover:bg-gray-700 transition-all"
          >
            Saiba Mais
          </a>
        </div>

        <div className="pt-12 animate-bounce">
          <a href="#features" className="inline-block text-gray-400 hover:text-white">
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
