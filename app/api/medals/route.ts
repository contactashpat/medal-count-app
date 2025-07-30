import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const year = parseInt(searchParams.get('year') || '2022', 10)

  console.log('Fetching medals for year:', year)
  try {
    const medals = await prisma.medal.findMany({
      where: {
        year: {
          value: year,
        },
      },
      include: { country: true },
    })

    const grouped = medals.reduce<
      Record<string, { code: string; gold: number; silver: number; bronze: number }>
    >((acc, medal) => {
      const code = medal.country.code
      if (!acc[code]) {
        acc[code] = { code, gold: 0, silver: 0, bronze: 0 }
      }
      acc[code][medal.type as 'gold' | 'silver' | 'bronze'] = medal.count
      return acc
    }, {})

    return NextResponse.json(Object.values(grouped))
  } catch (e) {
    console.error('API error:', e)
    return NextResponse.json({ error: 'Failed to fetch medals' }, { status: 500 })
  }
}
