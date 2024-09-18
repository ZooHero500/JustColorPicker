import sharp from 'sharp'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const color = searchParams.get('c') || 'ffffff' // 移除了 '#' 前缀

  // 验证颜色值是否为有效的十六进制颜色，不包含 '#'
  const isValidHex = /^[0-9A-Fa-f]{6,8}$/.test(color)
  if (!isValidHex) {
    return new NextResponse('Invalid color format. Use RRGGBB or RRGGBBAA', { status: 400 })
  }

  try {
    // 创建一个 100x100 像素的纯色图片
    const svg = `<svg width="100" height="100"><rect width="100" height="100" fill="#${color}"/></svg>`
    const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer()

    // 返回 PNG 图片
    return new NextResponse(pngBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    })
  } catch (error) {
    console.error('Error generating image:', error)
    return new NextResponse('Error generating image', { status: 500 })
  }
}
