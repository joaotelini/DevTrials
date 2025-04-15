"use client"

import { useState, useEffect } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mobileMenuOpen])

  return (
    <header className="fixed w-full top-0 left-0 z-50 transition-all duration-300 bg-opacity-90 backdrop-blur-sm">
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Dev</span>
          <span className="text-white">Trails</span>
        </h1>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="mobile-menu-button p-2 rounded-md hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm shadow-lg py-4 px-6 border-t border-gray-800 flex flex-col space-y-4 md:hidden animate-in fade-in slide-in-from-top-5 duration-300">
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Funcionalidades
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a
              href="#faq"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Planos
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-blue-500/20 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Entrar
            </a>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">
            Funcionalidades
          </a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">
            Sobre
          </a>
          <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
            Depoimentos
          </a>
          <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
            FAQ
          </a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
            Planos
          </a>
          <a
            href="#"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-blue-500/20"
          >
            Entrar
          </a>
        </div>
      </nav>
    </header>
  )
}
