import React, { useMemo, useState } from 'react'

export default function ContactForm(){
  const [form, setForm] = useState({ name:'', phone:'', email:'', city:'', project_type:'Home', files:[], notes:'' })
  const summary = useMemo(() => {
    return `${form.name || 'Client'} in ${form.city || 'your city'} looking for ${form.project_type} interiors.`
  }, [form])
  const [status, setStatus] = useState(null)
  const backend = import.meta.env.VITE_BACKEND_URL || ''

  const submit = async () => {
    setStatus('')
    try {
      const payload = { name: form.name, phone: form.phone, email: form.email, city: form.city, project_type: form.project_type, notes: form.notes, summary }
      const r = await fetch(`${backend}/api/contact`, { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify(payload) })
      const data = await r.json()
      if (data.status === 'ok') setStatus('Thanks! We will reach out shortly.')
      else setStatus('Something went wrong. Please try again.')
    } catch(e) {
      setStatus('Unable to submit. Check connection.')
    }
  }

  return (
    <section className="relative px-6 py-20 bg-stone-900 text-white">
      <h2 className="text-center text-3xl md:text-4xl font-serif">Start Your Project</h2>
      <div className="max-w-4xl mx-auto mt-8 grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <input placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full bg-black/20 border border-white/10 rounded-lg p-3" />
          <input placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="w-full bg-black/20 border border-white/10 rounded-lg p-3" />
          <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full bg-black/20 border border-white/10 rounded-lg p-3" />
          <input placeholder="City" value={form.city} onChange={e=>setForm({...form,city:e.target.value})} className="w-full bg-black/20 border border-white/10 rounded-lg p-3" />
          <select value={form.project_type} onChange={e=>setForm({...form,project_type:e.target.value})} className="w-full bg-black/20 border border-white/10 rounded-lg p-3">
            {['Home','Office','Renovation','Other'].map(o => <option key={o}>{o}</option>)}
          </select>
          <input type="file" multiple onChange={e=>setForm({...form, files: Array.from(e.target.files||[])})} className="w-full text-sm" />
        </div>
        <div className="space-y-3">
          <textarea placeholder="Tell us more" rows={8} value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})} className="w-full bg-black/20 border border-white/10 rounded-lg p-3" />
          <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white/80">Auto-summary: {summary}</div>
          <button onClick={submit} className="w-full rounded-full bg-white text-stone-900 py-3">Send Enquiry</button>
          {status && <div className="text-sm text-white/80">{status}</div>}
        </div>
      </div>
    </section>
  )
}
