import { CountryMedals } from '@/hooks/useMedalData'
import { getTotalMedals } from '@/utils/getTotalMedals'
import FlagIcon from './FlagIcon'

type Props = {
  country: CountryMedals
}

export default function MedalRow({ country }: Props) {
  return (
    <tr>
      <td className="p-2">
        <FlagIcon code={country.code} />
      </td>
      <td className="p-2">{country.code}</td>
      <td className="p-2">{country.gold}</td>
      <td className="p-2">{country.silver}</td>
      <td className="p-2">{country.bronze}</td>
      <td className="p-2">{getTotalMedals(country)}</td>
    </tr>
  )
}
