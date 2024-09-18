'use client'

import { cn } from '@/lib/utils'
import React, { useRef, useEffect, useCallback } from 'react'

interface Color {
  h: number
  s: number
  v: number
  a: number
}

interface Props {
  color: Color
  onChange: (newColor: Partial<Color>) => void
  className?: string
}

const SaturationValuePicker: React.FC<Props> = ({ color, onChange, className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const drawGradient = useCallback(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        const width = canvas.width
        const height = canvas.height

        ctx.fillStyle = `hsl(${color.h}, 100%, 50%)`
        ctx.fillRect(0, 0, width, height)

        const whiteGradient = ctx.createLinearGradient(0, 0, width, 0)
        whiteGradient.addColorStop(0, 'rgba(255,255,255,1)')
        whiteGradient.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.fillStyle = whiteGradient
        ctx.fillRect(0, 0, width, height)

        const blackGradient = ctx.createLinearGradient(0, 0, 0, height)
        blackGradient.addColorStop(0, 'rgba(0,0,0,0)')
        blackGradient.addColorStop(1, 'rgba(0,0,0,1)')
        ctx.fillStyle = blackGradient
        ctx.fillRect(0, 0, width, height)
      }
    }
  }, [color.h])

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (canvas && container) {
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          const { width, height } = entry.contentRect
          canvas.width = width
          canvas.height = height
          drawGradient()
        }
      })

      resizeObserver.observe(container)

      return () => {
        resizeObserver.disconnect()
      }
    }
  }, [drawGradient])

  const handleInteraction = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const container = containerRef.current
      if (container) {
        const rect = container.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const s = (x / rect.width) * 100
        const v = 100 - (y / rect.height) * 100
        onChange({ s, v })
      }
    },
    [onChange]
  )

  return (
    <div
      ref={containerRef}
      className={cn('relative w-full h-48 rounded-xl overflow-hidden cursor-pointer', className)}
      onMouseDown={handleInteraction}
      onMouseMove={e => e.buttons === 1 && handleInteraction(e)}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
      <div
        className="absolute w-4 h-4 border-2 border-white rounded-full shadow-md pointer-events-none"
        style={{
          left: `${color.s}%`,
          top: `${100 - color.v}%`,
          transform: 'translate(-50%, -50%)'
        }}
      />
    </div>
  )
}

export default SaturationValuePicker
