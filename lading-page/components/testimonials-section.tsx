export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-5xl mx-auto text-center animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Depoimentos
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">O que nossos usuários estão dizendo sobre o DevTrails</p>

        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard
            initial="A"
            name="Ana Silva"
            role="Dev Júnior"
            testimonial="O DevTrails me ajudou a finalmente me sentir pronta para encarar entrevistas técnicas. As perguntas são muito realistas e o feedback da IA me ajudou a identificar pontos fracos que eu nem sabia que tinha. Recomendo demais!"
            gradientFrom="blue-500"
            gradientTo="purple-600"
          />

          <TestimonialCard
            initial="L"
            name="Lucas Oliveira"
            role="Backend Developer"
            testimonial="O simulador é muito realista, e o feedback me ajudou a melhorar rápido. Depois de duas semanas de prática, consegui passar em uma entrevista para uma empresa que eu sempre sonhei. Excelente ideia e execução perfeita!"
            gradientFrom="purple-500"
            gradientTo="pink-600"
          />
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  initial: string
  name: string
  role: string
  testimonial: string
  gradientFrom: string
  gradientTo: string
}

function TestimonialCard({ initial, name, role, testimonial, gradientFrom, gradientTo }: TestimonialCardProps) {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700 hover:border-blue-500/30 transition-all duration-300 text-left">
      <div className="flex items-center mb-6">
        <div
          className={`w-12 h-12 bg-gradient-to-br from-${gradientFrom} to-${gradientTo} rounded-full flex items-center justify-center text-white font-bold text-lg`}
        >
          {initial}
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
      <p className="italic text-gray-300">"{testimonial}"</p>
      <div className="mt-4 flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  )
}
