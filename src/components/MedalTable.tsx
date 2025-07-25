import { CountryMedals } from '@/hooks/useMedalData'
import MedalRow from './MedalRow'

type Props = {
  countries: CountryMedals[]
}

export default function MedalTable({ countries }: Props) {
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
      {countries.map((c) => (
        <MedalRow key={c.code} country={c} />
      ))}
      </tbody>
    </table>
  )
}
