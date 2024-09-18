import { colorUnit } from '@/config/color'

// 定义颜色值类型,可以是以下任意一种颜色格式
type ColorValue = HEX | RGB | HSL | HSV | HWB | CMYK | LAB | LCH

type ColorUnit = (typeof colorUnit)[number]

// 十六进制颜色接口
type HEX = string

// RGB颜色接口
interface RGB {
  r: number // 红色值 (0-255)
  g: number // 绿色值 (0-255)
  b: number // 蓝色值 (0-255)
  a?: number // 透明度 (0-1)
}

// HSL颜色接口
interface HSL {
  h: number // 色相 (0-360)
  s: number // 饱和度 (0-100)
  l: number // 亮度 (0-100)
  a?: number // 透明度 (0-1)
}

// HSV颜色接口
interface HSV {
  h: number // 色相 (0-360)
  s: number // 饱和度 (0-100)
  v: number // 明度 (0-100)
  a?: number // 透明度 (0-1)
}

// HWB颜色接口
interface HWB {
  h: number // 色相 (0-360)
  w: number // 白色 (0-100)
  b: number // 黑色 (0-100)
}

// CMYK颜色接口
interface CMYK {
  c: number // 青色 (0-100)
  m: number // 品红 (0-100)
  y: number // 黄色 (0-100)
  k: number // 黑色 (0-100)
}

// LAB颜色接口
interface LAB {
  l: number // 亮度 (0-100)
  a: number // 从绿色到红色的范围 (-128 到 127)
  b: number // 从蓝色到黄色的范围 (-128 到 127)
}

// LCH颜色接口
interface LCH {
  l: number // 亮度 (0-100)
  c: number // 彩度 (0-132)
  h: number // 色相 (0-360)
}

export type { ColorValue, ColorUnit, HEX, RGB, HSL, HSV, HWB, CMYK, LAB, LCH }
