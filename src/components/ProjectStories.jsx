import React from 'react'

const projects = [
  {
    id: 'p1',
    title: 'Skyline Living Room',
    challenge: 'Dark, cramped living area lacking identity.',
    moodboard: [
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36'
    ],
    sketch: 'https://images.unsplash.com/photo-1529088743536-4bc3ee39c1ff',
    materials: ['Walnut', 'Calacatta Marble', 'Matte Black'],
    before: 'https://images.unsplash.com/photo-1505692794403-34d4982fa0bd',
    after: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
    testimonial: 'They turned our apartment into a sanctuary in the sky.'
  }
]

export default function ProjectStories(){
  return (
    <section className="relative px-6 py-20 bg-stone-950 text-white">
      <h2 className="text-center text-3xl md:text-4xl font-serif">Project Stories</h2>
      <p className="text-center text-white/70 mt-2">From challenge to cinematic reveal</p>

      <div className="max-w-6xl mx-auto mt-10 space-y-12">
        {projects.map(p => (
          <div key={p.id} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-6 space-y-3">
                <div className="text-xs text-white/60">Client Challenge</div>
                <div className="text-white/90">{p.challenge}</div>
                <div className="text-xs text-white/60 mt-4">Moodboard</div>
                <div className="grid grid-cols-2 gap-2">
                  {p.moodboard.map((m,i)=> (
                    <img key={i} src={`${m}?auto=format&fit=crop&w=800&q=60`} className="rounded-xl h-24 w-full object-cover" />
                  ))}
                </div>
                <div className="text-xs text-white/60 mt-4">Early Sketch</div>
                <img src={`${p.sketch}?auto=format&fit=crop&w=800&q=60`} className="rounded-xl h-28 w-full object-cover" />
                <div className="text-xs text-white/60 mt-4">Material Palette</div>
                <div className="flex gap-2 text-sm text-white/80 flex-wrap">{p.materials.map(m=> (<span key={m} className="px-3 py-1 rounded-full bg-white/10 border border-white/10">{m}</span>))}</div>
              </div>
              <div className="relative">
                <img src={`${p.before}?auto=format&fit=crop&w=1400&q=60`} className="h-full w-full object-cover" />
                <img src={`${p.after}?auto=format&fit=crop&w=1400&q=60`} className="absolute inset-0 h-full w-full object-cover" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                <div className="absolute bottom-4 left-4 bg-black/40 px-4 py-2 rounded-full border border-white/10 text-sm">Before → After</div>
              </div>
            </div>
            <div className="p-6 text-white/80 text-sm border-t border-white/10">“{p.testimonial}”</div>
          </div>
        ))}
      </div>
    </section>
  )
}
