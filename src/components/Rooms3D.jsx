import React from 'react'
import Spline from '@splinetool/react-spline'

const rooms = [
  { name: 'Living Room', url: 'https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode' },
  { name: 'Bedroom', url: 'https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode' },
  { name: 'Kitchen', url: 'https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode' },
  { name: 'Workspace', url: 'https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode' },
]

export default function Rooms3D() {
  return (
    <section className="relative px-6 py-20 bg-gradient-to-b from-stone-900 to-stone-950 text-white">
      <h2 className="text-center text-3xl md:text-4xl font-serif">3D Virtual Walkthrough</h2>
      <p className="text-center text-white/70 mt-2">Rotate, zoom and explore hotspots</p>
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-10">
        {rooms.map((r) => (
          <div key={r.name} className="relative h-[360px] rounded-3xl overflow-hidden border border-white/10">
            <Spline scene={r.url} style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
            <div className="absolute bottom-4 left-4 text-white/90">
              <div className="font-semibold">{r.name}</div>
              <ul className="text-xs text-white/80 list-disc pl-4">
                <li>Material Used: Walnut, Linen</li>
                <li>Lighting Technique: Layered ambient</li>
                <li>Color Theme: Warm neutrals</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
