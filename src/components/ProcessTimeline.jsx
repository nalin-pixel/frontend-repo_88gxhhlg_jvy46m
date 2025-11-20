import React from 'react'
import { Check, Layers, Layout, Palette, Box, Hammer, Sparkles } from 'lucide-react'

const steps = [
  { title: 'Concept', icon: Sparkles, text: 'We translate your vision into a clear concept.' },
  { title: 'Moodboard', icon: Palette, text: 'Textures, colors and references come together.' },
  { title: 'Layout', icon: Layout, text: 'Functional planning for effortless living.' },
  { title: 'Material Selection', icon: Layers, text: 'Premium, timeless materials curated for you.' },
  { title: '3D Visualization', icon: Box, text: 'Cinematic renders to preview the space.' },
  { title: 'Execution', icon: Hammer, text: 'Precise build with trusted partners.' },
  { title: 'Final Styling', icon: Check, text: 'Art, accessories and scents to finish.' },
]

export default function ProcessTimeline(){
  return (
    <section className="relative px-6 py-20 bg-gradient-to-b from-stone-950 to-black text-white">
      <h2 className="text-center text-3xl md:text-4xl font-serif">Our Process</h2>
      <p className="text-center text-white/70 mt-2">Cinematic timeline</p>
      <div className="max-w-5xl mx-auto mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map(({ title, icon:Icon, text }) => (
          <div key={title} className="rounded-3xl bg-white/5 border border-white/10 p-5 backdrop-blur-md hover:bg-white/10 transition">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10"><Icon size={20} /></div>
              <div className="font-medium">{title}</div>
            </div>
            <div className="text-sm text-white/80 mt-3">{text}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
