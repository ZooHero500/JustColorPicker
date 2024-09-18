import React from 'react'

interface Color {
  h: number
  s: number
  v: number
  a: number
}

interface Props {
  color: Color
  onChange: (alpha: number) => void
}

const AlphaSlider: React.FC<Props> = ({ color, onChange }) => {
  const { h, s, v, a } = color
  const backgroundColor = `hsla(${h}, ${s}%, ${v}%, 1)`

  return (
    <div className="relative w-full h-10">
      <div className="absolute w-full h-full bg-checkerboard rounded-xl" />
      <div
        className="absolute w-full h-full rounded-xl"
        style={{
          background: `linear-gradient(to right, rgba(0,0,0,0), ${backgroundColor})`
        }}
      />
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={a}
        onChange={e => onChange(Number(e.target.value))}
        className="absolute w-full h-full opacity-0 cursor-pointer"
      />
      <div
        className="absolute w-12 h-12 border-2 border-gray-300 rounded-full shadow-md pointer-events-none"
        style={{
          left: `${a * 100}%`,
          top: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: `hsla(${h}, ${s}%, ${v}%, ${a})`
        }}
      />
    </div>
  )
}

export default AlphaSlider
