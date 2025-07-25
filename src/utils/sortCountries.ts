import { CountryMedals } from '@/hooks/useMedalData'
import { getTotalMedals } from './getTotalMedals'
import { SortKey } from '@/types/sort'

export function sortCountries(data: CountryMedals[], sortKey: SortKey): CountryMedals[] {
  const countries = [...data] // non-mutating

  countries.sort((a, b) => {
    const primary = compareByKey(a, b, sortKey)

    if (primary !== 0) return primary

    // Tiebreakers
    switch (sortKey) {
      case 'total':
        return b.gold - a.gold
      case 'gold':
        return b.silver - a.silver
      case 'silver':
      case 'bronze':
        return b.gold - a.gold
      default:
        return 0
    }
  })

  return countries.slice(0, 10)
}

function compareByKey(a: CountryMedals, b: CountryMedals, key: SortKey): number {
  if (key === 'total') {
    return getTotalMedals(b) - getTotalMedals(a)
  }
  return b[key] - a[key]
}
