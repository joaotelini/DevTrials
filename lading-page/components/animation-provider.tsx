"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface AnimationProviderProps {
  children: ReactNode
}

export default function AnimationProvider({ children }: AnimationProviderProps) {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Intersection Observer para animações de entrada
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
          }
        })
      },
      { threshold: 0.1 },
    )

    // Seleciona todos os elementos com a classe animate-on-scroll
    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => {
      observerRef.current?.observe(el)
    })

    // Adiciona a classe show ao hero content após um pequeno delay
    setTimeout(() => {
      const heroContent = document.querySelector(".hero-content")
      if (heroContent) {
        heroContent.classList.add("show")
      }
    }, 300)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return <>{children}</>
}
