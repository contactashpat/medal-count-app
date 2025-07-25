import { CountryMedals } from '@/hooks/useMedalData'
import { getTotalMedals } from '@/utils/getTotalMedals'
import FlagIcon from './FlagIcon'

type Props = {
  country: CountryMedals
}

export default function MedalRow({ country }: Props) {
  return (
    <tr>
      <td><FlagIcon code={country.code} /></td>
      <td>{country.code}</td>
      <td>{country.gold}</td>
      <td>{country.silver}</td>
      <td>{country.bronze}</td>
      <td>{getTotalMedals(country)}</td>
    </tr>
  )
}
