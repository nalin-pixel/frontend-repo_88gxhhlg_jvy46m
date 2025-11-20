import React from 'react'

const cards = [
  { type:'Wood', title:'Walnut', look:'Rich, deep brown with straight grain', use:'Cabinetry, feature walls', durability:'High', budget:'$$$', alt:['Teak','Oak'], img:'https://images.unsplash.com/photo-1616628188460-20b6b3f5ad5b' },
  { type:'Marble', title:'Calacatta', look:'Bold veining on white base', use:'Countertops, bathroom', durability:'Medium', budget:'$$$$', alt:['Carrara','Quartz'], img:'https://images.unsplash.com/photo-1523419409543-8ce8a06673f6' },
  { type:'Fabric', title:'Bouclé', look:'Soft looped texture', use:'Sofas, ottomans', durability:'Medium', budget:'$$$', alt:['Chenille','Velvet'], img:'https://images.unsplash.com/photo-1610312275356-8e9aa9e8cf9e' },
  { type:'Lighting', title:'Linear LED', look:'Minimal continuous glow', use:'Cove, task lighting', durability:'High', budget:'$$', alt:['COB','Track'], img:'https://images.unsplash.com/photo-1550226891-ef816aed4a47' },
]

export default function MaterialLibrary(){
  return (
    <section className="relative px-6 py-20 bg-gradient-to-b from-stone-900 to-stone-950 text-white">
      <h2 className="text-center text-3xl md:text-4xl font-serif">Material Library</h2>
      <p className="text-center text-white/70 mt-2">Explore textures with use cases, durability and budget</p>
      <div className="max-w-6xl mx-auto mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div key={c.title} className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
            <div className="h-48 overflow-hidden">
              <img src={`${c.img}?auto=format&fit=crop&w=1200&q=60`} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-5 space-y-2">
              <div className="text-xs text-white/60">{c.type}</div>
              <div className="text-xl font-medium">{c.title}</div>
              <div className="text-sm text-white/80">Look & feel: {c.look}</div>
              <div className="text-sm text-white/80">Use cases: {c.use}</div>
              <div className="text-sm text-white/80">Durability: {c.durability} • Budget: {c.budget}</div>
              <div className="text-sm text-white/80">Alternatives: {c.alt.join(', ')}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
