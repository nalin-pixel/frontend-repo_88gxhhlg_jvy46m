import React from 'react'

const items = [
  {
    title: 'Skyline Living Room',
    before: 'https://images.unsplash.com/photo-1505692794403-34d4982fa0bd',
    after: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
  },
  {
    title: 'Minimal Chef Kitchen',
    before: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    after: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
  },
  {
    title: 'Calm Bedroom',
    before: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c',
    after: 'https://images.unsplash.com/photo-1540518614846-7eded433c457',
  }
]

export default function BeforeAfterScroll() {
  return (
    <section className="relative px-6 py-20 bg-stone-950 text-white">
      <h2 className="text-center text-3xl md:text-4xl font-serif mb-10">Transformations</h2>
      <div className="space-y-12 max-w-6xl mx-auto">
        {items.map((item) => (
          <div key={item.title} className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
            <div className="relative h-72 sm:h-[28rem]">
              <img src={`${item.before}?auto=format&fit=crop&w=1400&q=60`} className="absolute inset-0 h-full w-full object-cover opacity-100" />
              <img src={`${item.after}?auto=format&fit=crop&w=1400&q=60`} className="absolute inset-0 h-full w-full object-cover mix-blend-normal" style={{ clipPath: 'inset(0 40% 0 0)' }} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
            <div className="absolute bottom-4 left-4 text-white/90">
              <div className="text-lg">{item.title}</div>
              <div className="text-xs text-white/70">Scroll to reveal</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
