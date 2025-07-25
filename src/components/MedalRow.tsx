import { CountryMedals } from '@/hooks/useMedalData'
import { getTotalMedals } from '@/utils/getTotalMedals'
import FlagIcon from './FlagIcon'

type Props = {
  country: CountryMedals
}

export default function MedalRow({ country }: Props) {
  return (
    <tr>
      <td style={{ padding: '0.5rem' }}>
        <FlagIcon code={country.code} />
      </td>
      <td style={{ padding: '0.5rem' }}>{country.code}</td>
      <td style={{ padding: '0.5rem' }}>{country.gold}</td>
      <td style={{ padding: '0.5rem' }}>{country.silver}</td>
      <td style={{ padding: '0.5rem' }}>{country.bronze}</td>
      <td style={{ padding: '0.5rem' }}>{getTotalMedals(country)}</td>
    </tr>
  )
}
