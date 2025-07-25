import { CountryMedals } from '@/hooks/useMedalData'
import MedalRow from './MedalRow'
import { sortCountries } from '@/utils/sortCountries'
import { SortKey } from '@/types/sort'
import { useRouter } from 'next/router'
import {CSSProperties} from "react";

type Props = {
  countries: CountryMedals[]
  sortKey: SortKey
}

export default function MedalTable({ countries, sortKey }: Props) {
  const router = useRouter()
  const sorted = sortCountries(countries, sortKey)

  const handleSort = (key: SortKey) => {
    router.push(
      {
        pathname: '/',
        query: { sort: key },
      },
      undefined,
      { shallow: true }
    )
  }

  const headerStyle = (key: SortKey): CSSProperties => ({
    cursor: 'pointer',
    textDecoration: sortKey === key ? 'underline' : 'none',
  })

  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
      <tr>
        <th>Flag</th>
        <th>Code</th>
        <th style={headerStyle('gold')} onClick={() => handleSort('gold')}>
          Gold
        </th>
        <th style={headerStyle('silver')} onClick={() => handleSort('silver')}>
          Silver
        </th>
        <th style={headerStyle('bronze')} onClick={() => handleSort('bronze')}>
          Bronze
        </th>
        <th style={headerStyle('total')} onClick={() => handleSort('total')}>
          Total
        </th>
      </tr>
      </thead>
      <tbody>
      {sorted.map((c) => (
        <MedalRow key={c.code} country={c} />
      ))}
      </tbody>
    </table>
  )
}
