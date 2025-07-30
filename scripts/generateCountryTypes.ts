import fs from 'fs'
import path from 'path'

const medalsPath = path.resolve(__dirname, '../public/medals.json')
const outPath = path.resolve(__dirname, '../src/constants/countryCodes.ts')

type Country = { code: string }

const raw = fs.readFileSync(medalsPath, 'utf-8')
const countries: Country[] = JSON.parse(raw)

const codes = [...new Set(countries.map((c) => c.code))].sort()

const enumLines = codes.map((code) => `  ${code} = '${code}',`).join('\n')
const arrayLines = codes.map((code) => `  CountryCode.${code},`).join('\n')

const output = `// Auto-generated from medals.json
export enum CountryCode {
${enumLines}
}

export const countryOrder: CountryCode[] = [
${arrayLines}
]
`

fs.writeFileSync(outPath, output)
console.log(`✅ Generated countryCodes.ts with ${codes.length} entries`)
