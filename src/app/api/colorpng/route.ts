export const runtime = 'edge'

import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const color = searchParams.get('c') || 'ffffff'

  // 验证颜色值
  const isValidHex = /^[0-9A-Fa-f]{6}$/.test(color)
  if (!isValidHex) {
    return new NextResponse('无效的颜色格式。请使用 RRGGBB', { status: 400 })
  }

  // 生成 SVG
  const svg = `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="300" fill="#${color}" rx="20" />
  </svg>`

  // 返回 SVG 图像
  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  })
}
