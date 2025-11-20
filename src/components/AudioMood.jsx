import React, { useEffect, useRef, useState } from 'react'

const tracks = {
  Minimal: 'https://cdn.pixabay.com/download/audio/2023/01/08/audio_2b3d7fcb88.mp3?filename=calm-piano-13495.mp3',
  Boho: 'https://cdn.pixabay.com/download/audio/2022/03/10/audio_251a7c6a4a.mp3?filename=acoustic-guitar-10369.mp3',
  Luxury: 'https://cdn.pixabay.com/download/audio/2022/03/30/audio_1b0f84322c.mp3?filename=ambient-pad-11028.mp3',
  Modern: 'https://cdn.pixabay.com/download/audio/2022/03/10/audio_50072832b1.mp3?filename=ambient-future-bass-10363.mp3',
}

export default function AudioMood(){
  const [current, setCurrent] = useState('Minimal')
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    if (!audioRef.current) return
    if (playing) audioRef.current.play().catch(()=>{})
    else audioRef.current.pause()
  }, [playing, current])

  return (
    <section className="relative px-6 py-16 bg-stone-900 text-white">
      <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center justify-between flex-wrap gap-4">
        <div>
          <div className="text-sm text-white/70">Interior Mood Soundtracks</div>
          <div className="text-xl">{current} — subtle background</div>
        </div>
        <div className="flex items-center gap-2">
          {Object.keys(tracks).map(k => (
            <button key={k} onClick={() => setCurrent(k)} className={`px-3 py-2 rounded-full border ${current===k? 'bg-white text-stone-900':'border-white/20'}`}>{k}</button>
          ))}
          <button onClick={() => setPlaying(p=>!p)} className="px-3 py-2 rounded-full bg-white text-stone-900">{playing? 'Pause':'Play'}</button>
        </div>
        <audio ref={audioRef} src={tracks[current]} loop />
      </div>
    </section>
  )
}
