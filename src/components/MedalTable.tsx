'use client'

import { CountryMedals } from '@/hooks/useMedalData'
import { sortCountries } from '@/utils/sortCountries'
import { SortKey } from '@/types/sort'
import { useRouter } from 'next/navigation'
import FlagIcon from './FlagIcon'
import { countryOrder } from '@/constants/countryCodes'
import { MedalLabels, MedalType } from '@/constants/medalTypes'

type Props = {
  countries: CountryMedals[]
  sortKey: SortKey
}

export default function MedalTable({ countries, sortKey }: Props) {
  const router = useRouter()
  const sorted = sortCountries(countries, sortKey, countryOrder) // ← updated

  const handleSort = (key: SortKey) => {
    router.push(`/?sort=${key}`)
  }

  const highlight = (col: SortKey) => (sortKey === col ? 'bg-yellow-100 dark:bg-zinc-800' : '')

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[480px] border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-zinc-800">
            <th className="p-2 text-left">🏳</th>
            <th className="p-2 text-left">Code</th>
            {(Object.values(MedalType) as SortKey[]).map((key) => (
              <th
                key={key}
                className={`p-2 text-left cursor-pointer transition-all ${
                  sortKey === key ? 'underline underline-offset-4 font-semibold' : ''
                }`}
                onClick={() => handleSort(key)}
              >
                {MedalLabels[key]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((country) => {
            const total = country.gold + country.silver + country.bronze
            return (
              <tr key={country.code} className="border-b border-gray-300 dark:border-zinc-700">
                <td className="p-2">
                  <FlagIcon code={country.code} />
                </td>
                <td className="p-2">{country.code}</td>
                <td className={`p-2 ${highlight('gold')}`}>{country.gold}</td>
                <td className={`p-2 ${highlight('silver')}`}>{country.silver}</td>
                <td className={`p-2 ${highlight('bronze')}`}>{country.bronze}</td>
                <td className={`p-2 ${highlight('total')}`}>{total}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
