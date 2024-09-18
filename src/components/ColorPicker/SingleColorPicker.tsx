'use client'

import React, { useState, useEffect } from 'react'
import { HexAlphaColorPicker } from 'react-colorful'
import ColorValueGroup from './ColorValueGroup'
import { safeDecodeURIComponent, parseColor, formatColorValue } from '@/lib/color'
import { colorUnit } from '@/config/color'
import { Skeleton } from '@/components/ui/skeleton'

import './custom.css'
import { cn } from '@/lib/utils'

const SingleColorPicker: React.FC = () => {
  const [color, setColor] = useState<string>('#aabbcc')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const url = new URL(window.location.href)
    console.log('完整 URL:', url.href)

    // 获取 '?' 之后的所有内容
    const fullQueryString = url.href.split('?')[1] || ''

    // 手动解析参数
    const params: Record<string, string> = {}
    fullQueryString.split('&').forEach(pair => {
      const [key, value] = pair.split('=')
      if (key && value) {
        // 使用安全的解码函数，并替换 %20 为空格
        params[safeDecodeURIComponent(key)] = safeDecodeURIComponent(value).replace(/%20/g, ' ')
      }
    })

    console.log('所有参数:', params)

    const initialColor = params['c']
    console.log('原始 initialColor:', initialColor)

    if (initialColor) {
      const formattedColor = formatColorValue(initialColor)
      console.log('格式化后的 initialColor:', formattedColor)
      const hexColor = parseColor(formattedColor)
      console.log('处理后的 initialColor:', hexColor)
      setColor(hexColor)
    }

    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  const handleColorChange = (color: string) => {
    setColor(color as string)
  }

  return (
    <div className="relative w-full">
      <div
        className={cn(
          'flex items-center absolute top-0 left-0 z-10 transition-all duration-300 justify-center flex-col pointer-events-none w-full',
          loading ? 'opacity-100' : 'opacity-0',
          'md:flex-row md:items-end md:space-x-4'
        )}
      >
        <div className="flex flex-col space-y-4">
          <Skeleton className="h-[21rem] w-80 rounded-lg" />
          <Skeleton className="h-10 w-80 rounded-lg" />
          <Skeleton className="h-10 w-80 rounded-lg" />
        </div>
        <div className="flex flex-col items-start space-y-[0.7rem] md:items-end">
          <Skeleton className="w-32 h-10 order-last mt-4 md:order-first md:mt-0" />
          {colorUnit.map((unit, index) => (
            <Skeleton key={index} className="w-80 h-10 md:w-60" />
          ))}
        </div>
      </div>
      <div
        className={cn(
          'w-full flex items-center justify-center flex-col transition-all duration-300',
          loading ? 'opacity-0' : 'opacity-100',
          'md:flex-row md:items-end md:space-x-4'
        )}
      >
        <div className="border rounded-md bg-card shadow-xs p-3 custom-react-colorful">
          <HexAlphaColorPicker
            className="w-80 h-full space-y-4"
            color={color}
            onChange={handleColorChange}
          />
        </div>

        <ColorValueGroup color={color} onChange={handleColorChange} />
      </div>
    </div>
  )
}

export default SingleColorPicker
