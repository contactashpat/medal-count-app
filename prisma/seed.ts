import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()
const MEDAL_DATA_PATH = path.join(__dirname, '../public/medals.json')
const YEAR = 2022

async function main() {
  const raw = fs.readFileSync(MEDAL_DATA_PATH, 'utf-8')
  const countries: { code: string; gold: number; silver: number; bronze: number }[] =
    JSON.parse(raw)

  for (const { code, gold, silver, bronze } of countries) {
    const country = await prisma.country.upsert({
      where: { code },
      update: {},
      create: { code, name: code },
    })

    await prisma.medal.createMany({
      data: [
        { countryId: country.id, year: YEAR, type: 'gold', count: gold },
        { countryId: country.id, year: YEAR, type: 'silver', count: silver },
        { countryId: country.id, year: YEAR, type: 'bronze', count: bronze },
      ],
    })
  }

  console.log(`✅ Seeded ${countries.length} countries and their medals for ${YEAR}`)
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
