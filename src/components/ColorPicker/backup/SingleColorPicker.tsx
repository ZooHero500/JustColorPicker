'use client'

import React, { useState, useCallback, useMemo } from 'react'
import SaturationValuePicker from './SaturationValuePicker'
import HueSlider from './HueSlider'
import AlphaSlider from './AlphaSlider'

interface Color {
  h: number
  s: number
  v: number
  a: number
}

const SingleColorPicker: React.FC = () => {
  const [color, setColor] = useState<Color>({ h: 0, s: 100, v: 100, a: 1 })

  const handleColorChange = useCallback((newColor: Partial<Color>) => {
    setColor(prevColor => ({ ...prevColor, ...newColor }))
  }, [])

  const colorString = useMemo(() => {
    const { h, s, v, a } = color
    return `hsla(${h}, ${s}%, ${v}%, ${a})`
  }, [color])

  return (
    <div className="w-64 bg-white rounded-lg shadow-sm p-3 space-y-4">
      <SaturationValuePicker color={color} onChange={handleColorChange} />
      <HueSlider color={color} hue={color.h} onChange={h => handleColorChange({ h })} />
      <AlphaSlider color={color} onChange={a => handleColorChange({ a })} />
    </div>
  )
}

export default SingleColorPicker
