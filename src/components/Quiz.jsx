import React, { useMemo, useState } from 'react'

const QUESTIONS = [
  { q: 'Pick your primary vibe', a: ['Minimal', 'Luxury', 'Earthy', 'Urban', 'Tech'] },
  { q: 'Preferred base tones', a: ['Warm Neutrals', 'Cool Greys', 'Earth Browns', 'Monochrome', 'Bold Contrast'] },
  { q: 'Lifestyle focus', a: ['Calm', 'Entertaining', 'Family', 'Creative', 'Smart Living'] },
  { q: 'Textures you love', a: ['Linen', 'Velvet', 'Bouclé', 'Stone', 'Metal'] },
  { q: 'Lighting mood', a: ['Warm', 'Neutral', 'Cool'] },
]

const RESULT_MAP = {
  Minimal: 'Minimal Royal',
  Luxury: 'Neo-Luxury',
  Earthy: 'Earth-Tone Calm',
  Urban: 'Urban Cozy',
  Tech: 'Tech-Modern',
}

const PALETTES = {
  'Minimal Royal': ['#F3F0EA', '#D9D4CC', '#A89474', '#0F0F0F'],
  'Neo-Luxury': ['#F2EFEA', '#D6C7B6', '#C5A572', '#1A1A1A'],
  'Earth-Tone Calm': ['#EEE7DE', '#D5C7B3', '#8B6F4E', '#2B2A28'],
  'Urban Cozy': ['#F0EFEF', '#C9C9C9', '#8A8A8A', '#1E1E1E'],
  'Tech-Modern': ['#F5F7FA', '#C7CED9', '#8FA6C9', '#0E1116'],
}

const SAMPLE_ROOMS = {
  'Minimal Royal': [
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
    'https://images.unsplash.com/photo-1505691723518-36a5ac3b2dba'
  ],
  'Neo-Luxury': [
    'https://images.unsplash.com/photo-1484154218962-a197022b5858',
    'https://images.unsplash.com/photo-1519710164239-da123dc03ef4'
  ],
  'Earth-Tone Calm': [
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
    'https://images.unsplash.com/photo-1493666438817-866a91353ca9'
  ],
  'Urban Cozy': [
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    'https://images.unsplash.com/photo-1519710164239-da123dc03ef4'
  ],
  'Tech-Modern': [
    'https://images.unsplash.com/photo-1518779578993-ec3579fee39f',
    'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c'
  ]
}

export default function Quiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])

  const result = useMemo(() => {
    if (answers.length < QUESTIONS.length) return null
    const primary = answers[0]
    return RESULT_MAP[primary]
  }, [answers])

  const handleSelect = (choice) => {
    const next = [...answers]
    next[step] = choice
    setAnswers(next)
    if (step < QUESTIONS.length - 1) setStep(step + 1)
  }

  return (
    <section className="relative px-6 py-16 bg-gradient-to-b from-stone-950 to-stone-900 text-white">
      <h2 className="text-center text-3xl md:text-4xl font-serif">Design Personality Scanner</h2>
      <p className="text-center text-white/70 mt-2">A 30-second quiz to understand your design soul</p>

      {!result ? (
        <div className="max-w-3xl mx-auto mt-10">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-6 shadow-2xl">
            <div className="text-white/80">Question {step + 1} of {QUESTIONS.length}</div>
            <div className="mt-4 text-2xl">{QUESTIONS[step].q}</div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {QUESTIONS[step].a.map((choice) => (
                <button key={choice} onClick={() => handleSelect(choice)} className="rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-3 text-left transition">
                  {choice}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-5xl mx-auto mt-10">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-6 shadow-2xl">
            <div className="text-2xl">You are <span className="font-semibold">{result}</span></div>
            <div className="mt-4">Matching Palette</div>
            <div className="mt-2 flex gap-2">
              {PALETTES[result].map((c) => (
                <div key={c} className="h-10 w-10 rounded-lg border border-white/20" style={{ background: c }} />
              ))}
            </div>
            <div className="mt-6">Moodboard & Rooms</div>
            <div className="mt-3 grid sm:grid-cols-3 gap-3">
              {SAMPLE_ROOMS[result].map((src, i) => (
                <img key={i} src={`${src}?auto=format&fit=crop&w=800&q=60`} className="rounded-xl h-36 w-full object-cover" />
              ))}
            </div>
            <div className="mt-6">
              <button className="rounded-full bg-white text-stone-900 px-6 py-3">See Custom Ideas for Your Space</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
