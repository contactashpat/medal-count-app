'use client'

import { CountryMedals } from '@/hooks/useMedalData'
import { sortCountries } from '@/utils/sortCountries'
import { SortKey } from '@/types/sort'
import { useRouter } from 'next/navigation'
import FlagIcon from './FlagIcon'

type Props = {
  countries: CountryMedals[]
  sortKey: SortKey
}

export default function MedalTable({ countries, sortKey }: Props) {
  const router = useRouter()
  const sorted = sortCountries(countries, sortKey)

  const handleSort = (key: SortKey) => {
    router.push(`/?sort=${key}`)
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[480px] border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-zinc-800">
            <th className="p-2 text-left">🏳</th>
            <th className="p-2 text-left">Code</th>
            <th
              className={`p-2 text-left cursor-pointer ${sortKey === 'gold' ? 'underline' : ''}`}
              onClick={() => handleSort('gold')}
            >
              🥇 Gold
            </th>
            <th
              className={`p-2 text-left cursor-pointer ${sortKey === 'silver' ? 'underline' : ''}`}
              onClick={() => handleSort('silver')}
            >
              🥈 Silver
            </th>
            <th
              className={`p-2 text-left cursor-pointer ${sortKey === 'bronze' ? 'underline' : ''}`}
              onClick={() => handleSort('bronze')}
            >
              🥉 Bronze
            </th>
            <th
              className={`p-2 text-left cursor-pointer ${sortKey === 'total' ? 'underline' : ''}`}
              onClick={() => handleSort('total')}
            >
              🏅 Total
            </th>
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
                <td className="p-2">{country.gold}</td>
                <td className="p-2">{country.silver}</td>
                <td className="p-2">{country.bronze}</td>
                <td className="p-2">{total}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
