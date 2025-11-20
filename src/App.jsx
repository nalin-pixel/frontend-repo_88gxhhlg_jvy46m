import React from 'react'
import Hero from './components/Hero'
import Quiz from './components/Quiz'
import BeforeAfterScroll from './components/BeforeAfterScroll'
import Rooms3D from './components/Rooms3D'
import DesignBuilder from './components/DesignBuilder'
import MaterialLibrary from './components/MaterialLibrary'
import ProjectStories from './components/ProjectStories'
import AudioMood from './components/AudioMood'
import ProcessTimeline from './components/ProcessTimeline'
import ServiceCards from './components/ServiceCards'
import Chatbot from './components/Chatbot'
import ContactForm from './components/ContactForm'
import StickyCTA from './components/StickyCTA'

function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0C0C0C] to-[#121212] text-white font-[var(--font-manrope)]">
      <Hero onStart={() => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
      }} />
      <Quiz />
      <BeforeAfterScroll />
      <Rooms3D />
      <DesignBuilder />
      <MaterialLibrary />
      <ProjectStories />
      <AudioMood />
      <ProcessTimeline />
      <ServiceCards />
      <Chatbot />
      <ContactForm />
      <StickyCTA />
      <footer className="px-6 py-10 text-center text-white/60">© 2025 Areté Interiors — Luxury, Minimal, Modern</footer>
    </div>
  )
}

export default App
