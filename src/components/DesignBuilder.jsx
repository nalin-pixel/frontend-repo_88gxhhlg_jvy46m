import React, { useMemo, useState } from 'react'

const COLORS = [
  { name: 'Warm Beige', value: '#EAE6DF' },
  { name: 'Stone Grey', value: '#CFCAC3' },
  { name: 'Off-White', value: '#F5F3EE' },
  { name: 'Deep Charcoal', value: '#1E1E1E' },
]
const SOFAS = [
  { name: 'Linear', img: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9' },
  { name: 'Sectional', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36' },
]
const FLOORS = [
  { name: 'Oak', img: 'https://images.unsplash.com/photo-1533090368676-1fd25485db88' },
  { name: 'Walnut', img: 'https://images.unsplash.com/photo-1616628188460-20b6b3f5ad5b' },
]
const LIGHTS = [
  { name: 'Warm', temp: 2700 },
  { name: 'Neutral', temp: 3500 },
  { name: 'Cool', temp: 5000 },
]

export default function DesignBuilder() {
  const [color, setColor] = useState(COLORS[0])
  const [sofa, setSofa] = useState(SOFAS[0])
  const [floor, setFloor] = useState(FLOORS[0])
  const [light, setLight] = useState(LIGHTS[0])

  const overlay = useMemo(() => {
    if (light.temp < 3000) return 'rgba(255, 180, 100, 0.10)'
    if (light.temp < 4200) return 'rgba(255, 230, 200, 0.08)'
    return 'rgba(150, 190, 255, 0.10)'
  }, [light])

  return (
    <section className="relative px-6 py-20 bg-stone-950 text-white">
      <h2 className="text-center text-3xl md:text-4xl font-serif">Design Builder</h2>
      <p className="text-center text-white/70 mt-2">Play with palettes, textures and lighting</p>

      <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
        <div className="lg:col-span-2 relative rounded-3xl overflow-hidden border border-white/10">
          <div className="h-96 sm:h-[28rem] relative" style={{ background: color.value }}>
            <img src={`${sofa.img}?auto=format&fit=crop&w=1600&q=60`} className="absolute bottom-0 w-full h-full object-cover mix-blend-multiply" />
            <img src={`${floor.img}?auto=format&fit=crop&w=1600&q=60`} className="absolute inset-0 w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0" style={{ background: overlay }} />
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="text-sm mb-2">Color Palette</div>
            <div className="flex flex-wrap gap-2">
              {COLORS.map(c => (
                <button key={c.name} onClick={() => setColor(c)} className={`h-10 w-10 rounded-lg border ${color.name===c.name? 'ring-2 ring-yellow-400':'border-white/20'}`} style={{ background: c.value }} />
              ))}
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="text-sm mb-2">Sofa Style</div>
            <div className="flex gap-2">
              {SOFAS.map(s => (
                <button key={s.name} onClick={() => setSofa(s)} className={`rounded-xl overflow-hidden border ${sofa.name===s.name? 'ring-2 ring-yellow-400':'border-white/10'}`}>
                  <img src={`${s.img}?auto=format&fit=crop&w=300&q=60`} className="h-16 w-24 object-cover" />
                </button>
              ))}
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="text-sm mb-2">Flooring</div>
            <div className="flex gap-2">
              {FLOORS.map(f => (
                <button key={f.name} onClick={() => setFloor(f)} className={`rounded-xl overflow-hidden border ${floor.name===f.name? 'ring-2 ring-yellow-400':'border-white/10'}`}>
                  <img src={`${f.img}?auto=format&fit=crop&w=300&q=60`} className="h-16 w-24 object-cover" />
                </button>
              ))}
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="text-sm mb-2">Lighting</div>
            <div className="flex gap-2">
              {LIGHTS.map(l => (
                <button key={l.name} onClick={() => setLight(l)} className={`px-3 py-2 rounded-full border ${light.name===l.name? 'bg-white text-stone-900':'border-white/20'}`}>{l.name}</button>
              ))}
            </div>
          </div>
          <button className="w-full rounded-full bg-white text-stone-900 py-3">Generate My Room Concept</button>
        </div>
      </div>
    </section>
  )
}
