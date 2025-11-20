import React, { useState } from 'react'

export default function Chatbot(){
  const [form, setForm] = useState({ room:'Living Room', style:'Minimal', budget:'₹5–8L', measurements:'' })
  const [resp, setResp] = useState(null)
  const [loading, setLoading] = useState(false)

  const backend = import.meta.env.VITE_BACKEND_URL || ''

  const ask = async () => {
    setLoading(true)
    setResp(null)
    try {
      const r = await fetch(`${backend}/api/chatbot`,{
        method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify(form)
      })
      const data = await r.json()
      setResp(data)
    } catch(e) {
      setResp({ title: 'Error', recommendations: ['Unable to connect to server'], estimate: '-', timeline:'-', palette: ['#333'] })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative px-6 py-20 bg-stone-950 text-white">
      <h2 className="text-center text-3xl md:text-4xl font-serif">AI Interior Consultation</h2>
      <div className="max-w-5xl mx-auto mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
          <label className="block text-sm">What room are you designing?</label>
          <select value={form.room} onChange={e=>setForm({ ...form, room: e.target.value })} className="w-full bg-black/20 border border-white/10 rounded-lg p-2">
            {['Living Room','Bedroom','Kitchen','Workspace'].map(o => <option key={o}>{o}</option>)}
          </select>
          <label className="block text-sm">Style preference</label>
          <select value={form.style} onChange={e=>setForm({ ...form, style: e.target.value })} className="w-full bg-black/20 border border-white/10 rounded-lg p-2">
            {['Minimal','Luxury','Boho','Modern'].map(o => <option key={o}>{o}</option>)}
          </select>
          <label className="block text-sm">Budget range</label>
          <input value={form.budget} onChange={e=>setForm({ ...form, budget: e.target.value })} className="w-full bg-black/20 border border-white/10 rounded-lg p-2" />
          <label className="block text-sm">Measurement inputs</label>
          <textarea value={form.measurements} onChange={e=>setForm({ ...form, measurements: e.target.value })} className="w-full bg-black/20 border border-white/10 rounded-lg p-2" rows={3} />
          <button onClick={ask} disabled={loading} className="w-full rounded-full bg-white text-stone-900 py-3">{loading? 'Thinking...':'Get Suggestions'}</button>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
          {!resp? <div className="text-white/70">Fill the form to get bespoke suggestions.</div> : (
            <div>
              <div className="text-xl">{resp.title}</div>
              <ul className="list-disc pl-5 mt-3 space-y-1">
                {resp.recommendations.map((r,i) => <li key={i}>{r}</li>)}
              </ul>
              <div className="mt-3 text-white/80">Estimate: {resp.estimate} • Timeline: {resp.timeline}</div>
              <div className="mt-3 flex gap-2">
                {resp.palette.map((c,i) => <div key={i} className="h-8 w-8 rounded-lg border border-white/20" style={{ background:c }} />)}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
