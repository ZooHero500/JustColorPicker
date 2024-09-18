import { colord, extend } from 'colord'
import type { AnyColor } from 'colord'
import cmykPlugin from 'colord/plugins/cmyk'
import labPlugin from 'colord/plugins/lab'
import lchPlugin from 'colord/plugins/lch'
import namesPlugin from 'colord/plugins/names'
import hwbPlugin from 'colord/plugins/hwb'

import { ColorUnit } from '@/types/color'
import { shadcnUiColors, shadcnUiColorKey, COLOR_CONSTANTS, COLOR_REGEX } from '@/config/color'
import type { shadcnUiColor } from '@/config/color'

extend([cmykPlugin, labPlugin, lchPlugin, namesPlugin, hwbPlugin])

/**
 * 根据单位转换颜色
 * @param color 颜色值
 * @param unit 单位
 * @returns 转换后的颜色值
 */
export function colorConversionByUnit(color: string, unit: ColorUnit) {
  const colorObj = colord(color)
  const isAlpha = colorObj.alpha() < 1

  const data = {
    value: '',
    name: unit.toUpperCase()
  }

  switch (unit) {
    case 'name':
      let name = ''
      // 根据是否有透明度，获取不同的十六进制颜色值
      const hex = isAlpha ? colorObj.toHex().slice(0, 7) : colorObj.toHex()
      // 寻找匹配的颜色键
      const colorKey = Object.keys(shadcnUiColors).find(key =>
        shadcnUiColors[key as shadcnUiColorKey].some(color => color.hex === hex)
      )
      if (colorKey) {
        // 获取颜色比例
        const color = shadcnUiColors[colorKey as shadcnUiColorKey].find(color => color.hex === hex)
        if (color) {
          const scale = color.scale
          // 根据是否有透明度，生成不同的名称
          name = isAlpha
            ? `${colorKey}-${scale}/${Math.round(colorObj.alpha() * 100)}`
            : `${colorKey}-${scale}`
        }
      } else {
        // 如果没有找到匹配的颜色键，使用颜色名称或错误名称
        const colorName = colord(hex).toName()
        if (colorName) {
          name = isAlpha ? `${colorName}/${Math.round(colorObj.alpha() * 100)}` : colorName
        } else {
          name = COLOR_CONSTANTS.NO_NAME_TIP
        }
      }
      data.value = name
      break
    case 'hex':
      data.value = colorObj.toHex()
      break
    case 'rgb':
      data.value = colorObj.toRgbString()
      data.name = isAlpha ? `${data.name}A` : data.name
      break
    case 'hsl':
      const hsl = colorObj.toHsl()
      if (isAlpha) {
        data.value = `hsl(${hsl.h} ${hsl.s}% ${hsl.l}% / ${hsl.a})`
      } else {
        data.value = colorObj.toHslString().replace(/,/g, '')
      }
      break
    case 'hwb':
      data.value = colorObj.toHwbString()
      break
    case 'cmyk':
      data.value = colorObj.toCmykString()
      break
    case 'lab': {
      const lab = colorObj.toLab()
      const l = `${lab.l}% ${lab.a} ${lab.b}`
      data.value = isAlpha ? `lab(${l} / ${lab.alpha})` : `lab(${l})`
      break
    }
    case 'lch':
      data.value = colorObj.toLchString()
      break
    default:
      data.value = ''
  }

  return data
}

/**
 * 更新颜色值
 * @param value 颜色值
 * @param unit 单位
 * @param originalColorValue 原始颜色值
 * @param onlyValue 是否只更新颜色值
 * @returns 更新后的颜色值
 */
export function updateColor(
  value: string,
  unit: ColorUnit,
  originalColorValue: string,
  onlyValue: boolean
) {
  let newValue: AnyColor = value

  if (unit === 'name' && value === COLOR_CONSTANTS.NO_NAME_TIP) {
    return null
  }

  switch (unit) {
    case 'name':
      {
        const [colorKey, scale] = value.split('-')

        if (colorKey && scale) {
          const colorTypeData = shadcnUiColors[colorKey]
          if (colorTypeData) {
            const colorValue = colorTypeData.find(
              (data: shadcnUiColor) => data.scale === parseInt(scale)
            )
            if (colorValue) {
              newValue = colorValue.hex
            }
          }
        }
      }
      break
    case 'lab':
      {
        if (onlyValue) {
          newValue = formatLab(value)
        } else {
          const match = COLOR_REGEX.PARENTHESES.exec(newValue)
          if (match && match[1]) {
            newValue = formatLab(match[1])
          }
        }
      }
      break
    case 'lch': {
      if (onlyValue) {
        newValue = formatLch(value)
      } else {
        const match = COLOR_REGEX.PARENTHESES.exec(newValue)
        if (match && match[1]) {
          newValue = formatLch(match[1])
        }
      }
      break
    }
    default:
      {
        if (onlyValue) {
          const match = COLOR_REGEX.PARENTHESES.exec(originalColorValue)
          if (match && match[1]) {
            newValue = originalColorValue.replace(match[1], value)
          }
        }
      }
      break
  }

  const colorObj = colord(newValue)
  return colorObj.toHex()
}

/**
 * 格式化LAB颜色
 * @param _value 颜色值
 * @returns 格式化后得到colord接受的对象
 */
function formatLab(_value: string) {
  /**
   * 24.24% 15.93 6.91 or 30.47% 43.37 27.48 / 0.79
   * 转换成 { l: 24.24, a: 15.93, b: 6.91 } or { l: 30.47, c: 43.37, h: 27.48, alpha: 0.79 }
   */
  const labValues = _value.split(' ')
  const l = parseFloat(labValues[0].replace('%', ''))
  const a = parseFloat(labValues[1])
  const b = parseFloat(labValues[2])
  let alpha = 1 // 默认alpha为1
  if (labValues.length > 3 && labValues[3] === '/') {
    alpha = parseFloat(labValues[4])
  }
  return {
    l,
    a,
    b,
    alpha
  }
}

/**
 * 格式化LCH颜色
 * @param _value 颜色值
 * @returns 格式化后得到colord接受的对象
 */
function formatLch(_value: string) {
  /**
   * 42.37% 0 0  or  42.37% 0 0 / 0.5
   * 转换成 { l: 42.37, c: 0, h: 0, alpha: 1 } or { l: 42.37, c: 0, h: 0, alpha: 0.5 }
   */
  const lchValues = _value.split(' ')
  const l = parseFloat(lchValues[0].replace('%', ''))
  const c = parseFloat(lchValues[1])
  const h = parseFloat(lchValues[2])
  let a = 1 // 默认alpha为1
  if (lchValues.length > 3 && lchValues[3] === '/') {
    a = parseFloat(lchValues[4])
  }
  return {
    l,
    c,
    h,
    a
  }
}
