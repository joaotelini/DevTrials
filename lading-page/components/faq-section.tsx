import { ChevronDown } from "lucide-react"

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Tire suas dúvidas sobre o DevTrails</p>
        </div>

        <div className="space-y-6">
          <FAQItem
            question="Preciso pagar para usar o DevTrails?"
            answer="Não. Oferecemos uma versão gratuita com funcionalidades principais. Temos também planos premium com recursos avançados para quem deseja uma preparação mais completa."
          />

          <FAQItem
            question="Como funciona o simulador de entrevistas?"
            answer="Você responde perguntas em tempo real e recebe um feedback automático gerado por IA. O sistema analisa suas respostas, identifica pontos fortes e fracos, e oferece sugestões de melhoria personalizadas."
          />

          <FAQItem
            question="Quais tecnologias e linguagens são suportadas?"
            answer="Atualmente suportamos JavaScript, TypeScript, Python, Java, C#, React, Node.js, e várias outras tecnologias populares. Estamos constantemente adicionando novas linguagens e frameworks."
          />

          <FAQItem
            question="Posso praticar entrevistas para empresas específicas?"
            answer="Sim! Nosso plano premium permite selecionar simulações baseadas em processos seletivos de empresas específicas, incluindo grandes empresas de tecnologia e startups em crescimento."
          />
        </div>
      </div>
    </section>
  )
}

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl border border-gray-700 overflow-hidden">
      <details className="group">
        <summary className="cursor-pointer p-6 flex justify-between items-center">
          <h3 className="font-semibold text-white text-lg">{question}</h3>
          <span className="transition-transform duration-300 group-open:rotate-180">
            <ChevronDown size={20} />
          </span>
        </summary>
        <div className="p-6 pt-0 text-gray-300 border-t border-gray-700">
          <p>{answer}</p>
        </div>
      </details>
    </div>
  )
}
