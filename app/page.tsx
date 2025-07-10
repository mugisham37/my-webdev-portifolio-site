"use client"

import { useState, useEffect } from "react"
import { Navigation } from "../components/Navigation"
import { Hero } from "../components/Hero"
import { About } from "../components/About"
import { Projects } from "../components/Projects"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "skills", "experience", "articles", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#141414]">
      <Navigation activeSection={activeSection} />
      <Hero />
      <About />
      <Projects />

      {/* Placeholder sections for future development */}
      <section id="skills" className="min-h-screen bg-[#141414] flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-pp-editorial text-4xl font-light italic text-white/90 mb-4">Skills</h2>
          <p className="text-white/60">Interactive skills visualization coming soon...</p>
        </div>
      </section>

      <section id="experience" className="min-h-screen bg-[#141414] flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-pp-editorial text-4xl font-light italic text-white/90 mb-4">Experience</h2>
          <p className="text-white/60">Detailed experience timeline coming soon...</p>
        </div>
      </section>

      <section id="articles" className="min-h-screen bg-[#141414] flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-pp-editorial text-4xl font-light italic text-white/90 mb-4">Articles</h2>
          <p className="text-white/60">Blog and writing showcase coming soon...</p>
        </div>
      </section>

      <section id="contact" className="min-h-screen bg-[#141414] flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-pp-editorial text-4xl font-light italic text-white/90 mb-4">Contact</h2>
          <p className="text-white/60">Contact form and social links coming soon...</p>
        </div>
      </section>
    </div>
  )
}
