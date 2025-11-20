import React from 'react'
import { Phone, MessageCircle, Calendar, Upload } from 'lucide-react'

export default function StickyCTA(){
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <button className="h-12 w-12 rounded-full bg-white text-stone-900 flex items-center justify-center shadow-xl hover:scale-105 transition" title="Call"><Phone size={18} /></button>
      <button className="h-12 w-12 rounded-full bg-emerald-400 text-stone-900 flex items-center justify-center shadow-xl hover:scale-105 transition" title="WhatsApp"><MessageCircle size={18} /></button>
      <button className="h-12 w-12 rounded-full bg-amber-300 text-stone-900 flex items-center justify-center shadow-xl hover:scale-105 transition" title="Book Consult"><Calendar size={18} /></button>
      <button className="h-12 w-12 rounded-full bg-stone-800 text-white flex items-center justify-center shadow-xl hover:scale-105 transition" title="Upload Room"><Upload size={18} /></button>
    </div>
  )
}
