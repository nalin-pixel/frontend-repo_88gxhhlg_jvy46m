import React from 'react'

const services = [
  { title:'Luxury Home Interior', details:['Spatial planning','Material curation','Lighting design','3D + styling'], timeline:'8–12 weeks' },
  { title:'Modular Kitchen', details:['Ergonomic layout','Premium hardware','Lighting','Quartz/Granite'], timeline:'4–6 weeks' },
  { title:'Smart Home Interior', details:['Automation','Scene lighting','AV integration','Hidden storage'], timeline:'6–10 weeks' },
  { title:'Renovation Redesign', details:['Structural changes','Services overhaul','New finishes'], timeline:'10–16 weeks' },
  { title:'Office & Workspace', details:['Zoning','Acoustic treatment','Branding touchpoints'], timeline:'6–10 weeks' },
  { title:'Commercial Interiors', details:['Concept to handover','Compliance','Wayfinding'], timeline:'12–20 weeks' },
]

export default function ServiceCards(){
  return (
    <section className="relative px-6 py-20 bg-stone-900 text-white">
      <h2 className="text-center text-3xl md:text-4xl font-serif">Services</h2>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {services.map(s => (
          <div key={s.title} className="group perspective">
            <div className="relative h-56 rounded-3xl border border-white/10 overflow-hidden [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-white/5 p-5 flex flex-col" style={{ backfaceVisibility: 'hidden' }}>
                <div className="text-xl">{s.title}</div>
                <div className="text-white/70 mt-auto">Flip for details</div>
              </div>
              <div className="absolute inset-0 bg-white/10 p-5 [transform:rotateY(180deg)]" style={{ backfaceVisibility: 'hidden' }}>
                <div className="text-sm text-white/80">Deliverables</div>
                <ul className="list-disc pl-5 text-white/90 mt-2">
                  {s.details.map(d => (<li key={d}>{d}</li>))}
                </ul>
                <div className="text-sm text-white/70 mt-3">Timeline: {s.timeline}</div>
                <div className="text-sm text-white/70">Included: Consultation, site visits, supervision</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
