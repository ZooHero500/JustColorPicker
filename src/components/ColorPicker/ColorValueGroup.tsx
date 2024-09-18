'use client'

import React, { useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ColorValueItem from './ColorValueItem'
import { colorUnit } from '@/config/color'

import type { HEX } from '@/types/color'

const tabs = [
  {
    value: 'default',
    label: 'Default'
  },
  {
    value: 'value',
    label: 'Values Only'
  }
]

interface ColorValueGroupProps {
  color: HEX
  onChange: (color: HEX) => void
}

const ColorValueGroup: React.FC<ColorValueGroupProps> = ({ color, onChange }) => {
  const [value, setValue] = useState<string>(tabs[0].value)

  return (
    <div className="flex flex-col w-full items-start mt-4 px-8 md:items-end md:mt-0 md:w-auto">
      <Tabs className='order-last mt-4 md:order-first md:mt-0' defaultValue={tabs[0].value}>
        <TabsList className="border shadow-xs">
          {tabs.map(tab => (
            <TabsTrigger key={tab.value} value={tab.value} onClick={() => setValue(tab.value)}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="flex flex-col space-y-[0.7rem] mt-2 w-full">
        {colorUnit.map((unit, index) => (
          <ColorValueItem
            key={index}
            color={color}
            unit={unit}
            onlyValue={value === 'value'}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  )
}

export default ColorValueGroup
