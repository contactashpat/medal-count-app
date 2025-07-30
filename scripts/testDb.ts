import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const medals = await prisma.medal.findMany({
    where: { yearValue: 2022 },
    include: { country: true },
    orderBy: [{ country: { code: 'asc' } }, { type: 'asc' }],
  })

  for (const medal of medals) {
    console.log(`${medal.country.code}: ${medal.type.toUpperCase()} = ${medal.count}`)
  }
}

main()
  .catch((e) => {
    console.error('❌ DB test failed:', e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
