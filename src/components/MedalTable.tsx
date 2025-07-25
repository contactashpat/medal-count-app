import { CountryMedals } from '@/hooks/useMedalData'
import MedalRow from './MedalRow'
import { sortCountries } from '@/utils/sortCountries'
import { SortKey } from '@/types/sort'

type Props = {
  countries: CountryMedals[]
  sortKey: SortKey
}

export default function MedalTable({ countries, sortKey }: Props) {
  const sorted = sortCountries(countries, sortKey)

  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
      <tr>
        <th>Flag</th>
        <th>Code</th>
        <th>Gold</th>
        <th>Silver</th>
        <th>Bronze</th>
        <th>Total</th>
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
