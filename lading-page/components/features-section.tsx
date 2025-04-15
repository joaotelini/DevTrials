import type React from "react"
import { Code, MessageSquare, LineChart } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto text-center animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Funcionalidades
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Ferramentas poderosas para impulsionar sua preparação para entrevistas técnicas
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Code size={28} className="text-blue-400" />}
            title="Simulador de Entrevistas"
            description="Teste suas habilidades com perguntas reais e adaptativas baseadas em entrevistas de grandes empresas."
            colorClass="blue"
          />

          <FeatureCard
            icon={<MessageSquare size={28} className="text-purple-400" />}
            title="Feedback Imediato"
            description="Receba dicas e avaliações instantâneas com IA para melhorar suas respostas e abordagem."
            colorClass="purple"
          />

          <FeatureCard
            icon={<LineChart size={28} className="text-pink-400" />}
            title="Histórico de Progresso"
            description="Acompanhe sua evolução com relatórios detalhados e identifique áreas para melhorar."
            colorClass="pink"
          />
        </div>
        <div className="mt-12">
          <a
            href="#pricing"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-blue-500/20"
          >
            Ver Planos
          </a>
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  colorClass: string
}

function FeatureCard({ icon, title, description, colorClass }: FeatureCardProps) {
  const bgColorClass = `bg-${colorClass}-600/20`
  const hoverBgColorClass = `group-hover:bg-${colorClass}-600/30`
  const hoverBorderClass = `hover:border-${colorClass}-500/30`
  const hoverShadowClass = `hover:shadow-${colorClass}-500/10`

  return (
    <div
      className={`bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700 ${hoverBorderClass} ${hoverShadowClass} transition-all duration-300 group`}
    >
      <div className={`${bgColorClass} p-3 rounded-xl inline-block mb-4 ${hoverBgColorClass} transition-all`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
