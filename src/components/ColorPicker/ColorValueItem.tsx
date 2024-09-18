'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { useToast } from '@/hooks/use-toast'

import { colord } from 'colord'
import { ColorUnit, HEX } from '@/types/color'
import { COLOR_CONSTANTS } from '@/config/color'
import { colorConversionByUnit, updateColor } from './ColorContrast'

interface ColorValueItemProps {
  color: string
  unit: ColorUnit
  onChange: (color: HEX) => void
  onlyValue?: boolean
}

const ColorValueItem: React.FC<ColorValueItemProps> = ({
  color,
  unit,
  onlyValue = false,
  onChange
}) => {
  const [colorValue, setColorValue] = useState<string>('')
  const [inputValue, setInputValue] = useState<string>('')
  const [shouldUpdate, setShouldUpdate] = useState<number>(Math.random())
  const [colorName, setColorName] = useState<string>('')
  const [bagColor, setBagColor] = useState<string>('')
  const [readyOnly, setReadyOnly] = useState<boolean>(true)
  const [originalColorValue, setOriginalColorValue] = useState<string>('')

  const inputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  useEffect(() => {
    const { value, name } = colorConversionByUnit(color, unit)

    const colorObj = colord(color)
    const rgb = colorObj.toRgb()

    setBagColor(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)

    /**
     * 如果只显示值，则保留括号内的内容
     */
    const regex = /\(([^)]+)\)/
    const match = regex.exec(value)
    if (onlyValue && match && match[1]) {
      setColorValue(match[1])
      setInputValue(match[1])
    } else {
      setColorValue(value)
      setInputValue(value)
    }

    setColorName(name)
    setOriginalColorValue(value)
  }, [color, unit, onlyValue, shouldUpdate])

  const handleColorValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    if (unit === 'hex' && !value.startsWith(COLOR_CONSTANTS.HEX_PREFIX)) {
      value = COLOR_CONSTANTS.HEX_PREFIX + value
    }
    setInputValue(value)
  }

  const handleInputBlur = () => {
    setReadyOnly(true)
    const newColor = updateColor(inputValue, unit, originalColorValue, onlyValue)
    if (newColor) {
      onChange(newColor)
      setShouldUpdate(Math.random())
    } else {
      setInputValue(colorValue)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleInputBlur()
    }
  }

  const handleClick = () => {
    setReadyOnly(false)
    inputRef.current?.focus()
  }

  const handleCopyValue = () => {
    navigator.clipboard.writeText(colorValue)
    toast({
      description: COLOR_CONSTANTS.COPY_SUCCESS
    })
  }

  return (
    <div className="flex items-stretch border rounded-md shadow-xs bg-background overflow-hidden h-10">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <div
              className="px-4 h-full border-r bg-muted flex items-center transition-all duration-300 min-w-24 cursor-pointer"
              onClick={handleCopyValue}
            >
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: bagColor }}></div>
              <span className="text-xs font-light ml-2 text-foreground">{colorName}</span>
            </div>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p className="text-xs font-light select-none">{COLOR_CONSTANTS.TOOLTIP_COPY}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div className="px-3 py-2 bg-background flex items-center flex-1 relative">
        <input
          type="text"
          ref={inputRef}
          className="w-full bg-transparent border-none outline-none text-sm text-foreground/70 font-light"
          value={readyOnly ? colorValue : inputValue}
          readOnly={readyOnly}
          onChange={handleColorValueChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
        />
        {readyOnly && (
          <div
            className="absolute top-0 right-0 left-0 bottom-0 bg-transparent hover:bg-muted/30 transition-all duration-300 cursor-pointer"
            onClick={handleClick}
          ></div>
        )}
      </div>
    </div>
  )
}

export default ColorValueItem
