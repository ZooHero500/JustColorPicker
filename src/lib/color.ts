import { colord, extend } from 'colord'
import namesPlugin from 'colord/plugins/names'

extend([namesPlugin])

// 颜色格式正则表达式
const colorFormats = {
  rgb: /^(\d{1,3})\s*,?\s*(\d{1,3})\s*,?\s*(\d{1,3})$/,
  rgba: /^(\d{1,3})\s*,?\s*(\d{1,3})\s*,?\s*(\d{1,3})\s*,?\s*([\d.]+)$/,
  hsl: /^(\d{1,3})\s*,?\s*(\d{1,3}%?)\s*,?\s*(\d{1,3}%?)$/,
  hsla: /^(\d{1,3})\s*,?\s*(\d{1,3}%?)\s*,?\s*(\d{1,3}%?)\s*,?\s*([\d.]+)$/,
  hwb: /^(\d{1,3})\s*,?\s*(\d{1,3}%?)\s*,?\s*(\d{1,3}%?)$/,
  cmyk: /^(\d{1,3}%?)\s*,?\s*(\d{1,3}%?)\s*,?\s*(\d{1,3}%?)\s*,?\s*(\d{1,3}%?)$/,
  lab: /^(\d{1,3}%?)\s*,?\s*([-\d.]+)\s*,?\s*([-\d.]+)$/,
  lch: /^(\d{1,3}%?)\s*,?\s*([\d.]+)\s*,?\s*([\d.]+)$/
}

/**
 * 安全的 URI 解码函数
 * @param str 需要解码的字符串
 * @returns 解码后的字符串，如果解码失败则返回原字符串
 */
export function safeDecodeURIComponent(str: string): string {
  try {
    return decodeURIComponent(str);
  } catch (e) {
    return str;
  }
}

/**
 * 格式化颜色值
 * @param value 原始颜色值
 * @returns 格式化后的颜色值
 */
export function formatColorValue(value: string): string {
  // 替换编码的百分号和多余的空格
  value = value.replace(/%25/g, '%').replace(/\s+/g, ' ').trim()

  for (const [format, regex] of Object.entries(colorFormats)) {
    const match = value.match(regex)
    if (match) {
      const [, ...parts] = match
      // 确保百分比值有 % 符号
      const formattedParts = parts.map(part => 
        part.includes('%') ? part : (parseInt(part) <= 100 ? `${part}%` : part)
      )
      return `${format}(${formattedParts.join(', ')})`
    }
  }

  return value
}

/**
 * 解析颜色值为十六进制格式
 * @param input 输入的颜色值
 * @returns 解析后的十六进制颜色值
 */
export function parseColor(input: string): string {
  const formattedInput = formatColorValue(input)
  const color = colord(formattedInput)
  
  if (color.isValid()) {
    return color.toHex()
  } else {
    console.log('无效的颜色值:', input)
    return '#000000' // 默认返回黑色
  }
}