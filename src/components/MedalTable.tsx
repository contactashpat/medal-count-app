import { CountryMedals } from '@/hooks/useMedalData'
import { sortCountries } from '@/utils/sortCountries'
import { SortKey } from '@/types/sort'
import { useRouter } from 'next/router'
import FlagIcon from './FlagIcon'

type Props = {
  countries: CountryMedals[]
  sortKey: SortKey
}

export default function MedalTable({ countries, sortKey }: Props) {
  const router = useRouter()
  const sorted = sortCountries(countries, sortKey)

  const handleSort = (key: SortKey) => {
    router.push({ pathname: '/', query: { sort: key } }, undefined, { shallow: true })
  }

  const cellStyle: React.CSSProperties = {
    padding: '0.5rem',
    textAlign: 'left'
  }

  const headerStyle = (key: SortKey): React.CSSProperties => ({
    ...cellStyle,
    cursor: 'pointer',
    textDecoration: sortKey === key ? 'underline' : 'none',
    backgroundColor: '#f3f3f3'
  })

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: '480px' }}>
        <thead>
        <tr>
          <th style={{ ...cellStyle, backgroundColor: '#f3f3f3' }}>Flag</th>
          <th style={{ ...cellStyle, backgroundColor: '#f3f3f3' }}>Code</th>
          <th style={headerStyle('gold')} onClick={() => handleSort('gold')}>Gold</th>
          <th style={headerStyle('silver')} onClick={() => handleSort('silver')}>Silver</th>
          <th style={headerStyle('bronze')} onClick={() => handleSort('bronze')}>Bronze</th>
          <th style={headerStyle('total')} onClick={() => handleSort('total')}>Total</th>
        </tr>
        </thead>
        <tbody>
        {sorted.map((country) => {
          const total = country.gold + country.silver + country.bronze
          return (
            <tr key={country.code} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={cellStyle}><FlagIcon code={country.code} /></td>
              <td style={cellStyle}>{country.code}</td>
              <td style={cellStyle}>{country.gold}</td>
              <td style={cellStyle}>{country.silver}</td>
              <td style={cellStyle}>{country.bronze}</td>
              <td style={cellStyle}>{total}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}
