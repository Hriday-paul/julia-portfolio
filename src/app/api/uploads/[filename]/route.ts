import { NextRequest, NextResponse } from 'next/server'
import { join, extname } from 'path'
import { existsSync, readFileSync } from 'fs'

export async function GET(req: NextRequest, { params }: { params: Promise<{ filename: string }> }) {
  const { filename } = await params
  const filePath = join(process.cwd(), 'uploads', filename)

  if (!existsSync(filePath)) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 })
  }

  const fileBuffer = readFileSync(filePath)
  const ext = extname(filename).slice(1)
  const mimeType =
    ext === 'png' ? 'image/png' :
    ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' :
    'application/octet-stream'

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      'Content-Type': mimeType,
      'Content-Disposition': `inline; filename="${filename}"`,
    },
  })
}
