export default function FloatingButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a
        href="#"
        className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-110"
        aria-label="Experimente agora"
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </a>
    </div>
  )
}
