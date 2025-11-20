import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero({ onStart }) {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="backdrop-blur-sm bg-black/30 rounded-3xl px-8 py-6 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight text-white/95">
            Designing Spaces That Feel Alive.
          </h1>
          <p className="mt-4 text-white/80 text-sm sm:text-base">
            Modern • Luxury • Minimal • Smart Interiors
          </p>
          <button onClick={onStart} className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 border border-white/20 transition-all shadow-lg">
            Start Your Design Journey
          </button>
        </div>

        <div className="absolute bottom-6 text-white/70 text-xs animate-bounce">Scroll to explore ↓</div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
    </section>
  )
}
