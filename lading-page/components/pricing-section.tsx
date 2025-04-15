export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto text-center animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Planos e Preços
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">Escolha o plano ideal para o seu nível de preparação</p>

        <div className="grid md:grid-cols-3 gap-8">
          <PricingCard
            title="Gratuito"
            price="0"
            description="Perfeito para quem está começando a se preparar para entrevistas."
            features={[
              { included: true, text: "5 simulações por mês" },
              { included: true, text: "Feedback básico" },
              { included: true, text: "Perguntas de nível iniciante" },
              { included: false, text: "Simulações específicas por empresa" },
              { included: false, text: "Feedback avançado" },
            ]}
            buttonText="Começar Grátis"
            buttonStyle="standard"
            featured={false}
          />

          <PricingCard
            title="Básico"
            price="49"
            description="Ideal para quem está em busca ativa de emprego."
            features={[
              { included: true, text: "Simulações ilimitadas" },
              { included: true, text: "Feedback detalhado" },
              { included: true, text: "Perguntas de nível intermediário" },
              { included: true, text: "5 simulações específicas por empresa" },
              { included: false, text: "Mentoria personalizada" },
            ]}
            buttonText="Assinar Agora"
            buttonStyle="gradient"
            featured={true}
          />

          <PricingCard
            title="Premium"
            price="99"
            description="Para profissionais que buscam as melhores oportunidades."
            features={[
              { included: true, text: "Tudo do plano Básico" },
              { included: true, text: "Simulações ilimitadas específicas por empresa" },
              { included: true, text: "Perguntas de nível avançado" },
              { included: true, text: "Feedback avançado com sugestões de código" },
              { included: true, text: "2 sessões de mentoria por mês" },
            ]}
            buttonText="Obter Premium"
            buttonStyle="gradient"
            featured={false}
          />
        </div>

        <div className="mt-12 text-gray-400">
          <p>
            Não tem certeza de qual plano escolher?{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300 underline">
              Entre em contato
            </a>{" "}
            para uma consultoria personalizada.
          </p>
        </div>
      </div>
    </section>
  )
}

interface PricingFeature {
  included: boolean
  text: string
}

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: PricingFeature[]
  buttonText: string
  buttonStyle: "standard" | "gradient"
  featured: boolean
}

function PricingCard({ title, price, description, features, buttonText, buttonStyle, featured }: PricingCardProps) {
  return (
    <div
      className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl border ${featured ? "border-purple-500/30" : "border-gray-700"} overflow-hidden transition-all duration-300 hover:shadow-blue-500/10 hover:border-blue-500/30 group ${featured ? "transform md:-translate-y-4" : ""}`}
    >
      {featured && (
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 py-3 text-center">
          <span className="text-sm font-medium text-white">Mais Popular</span>
        </div>
      )}
      <div className="p-8">
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-white">R${price}</span>
          <span className="text-gray-400">/mês</span>
        </div>
        <p className="text-gray-400 mb-8">{description}</p>

        <ul className="space-y-3 mb-8 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              )}
              <span className={`${feature.included ? "text-gray-300" : "text-gray-400 opacity-50"}`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className={`block w-full py-3 px-4 ${
            buttonStyle === "gradient"
              ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-blue-500/20"
              : "bg-gray-700 hover:bg-gray-600"
          } text-white rounded-lg transition-all text-center`}
        >
          {buttonText}
        </a>
      </div>
    </div>
  )
}
