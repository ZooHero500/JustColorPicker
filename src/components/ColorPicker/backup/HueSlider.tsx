'use client'

import React from 'react'

interface Color {
  h: number
  s: number
  v: number
  a: number
}

interface Props {
  hue: number
  color: Color
  onChange: (hue: number) => void
}

const HueSlider: React.FC<Props> = ({ hue, color, onChange }) => {
  const { h, s, v, a } = color

  return (
    <div className="relative w-full h-10">
      <div
        className="absolute w-full h-full rounded-xl"
        style={{
          background: `linear-gradient(to right, 
            #ff0000 0%, #ffff00 17%, #00ff00 33%, 
            #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)`
        }}
      />
      <input
        type="range"
        min="0"
        max="360"
        value={hue}
        onChange={e => onChange(Number(e.target.value))}
        className="absolute w-full h-full opacity-0 cursor-pointer"
      />
      <div
        className="absolute w-6 h-14 border-2 border-gray-300 rounded-md shadow-md pointer-events-none"
        style={{
          left: `calc(${(hue / 360) * 100}% - 20px)`,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: `hsla(${hue}, 100%, 50%, 1)`
        }}
      />
    </div>
  )
}

export default HueSlider
