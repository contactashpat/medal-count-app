import { CountryMedals } from '@/hooks/useMedalData'
import { SortKey } from '@/types/sort'

export function sortCountries(countries: CountryMedals[], sortKey: SortKey): CountryMedals[] {
  return [...countries].sort((a, b) => {
    if (sortKey === 'total') {
      const totalA = a.gold + a.silver + a.bronze
      const totalB = b.gold + b.silver + b.bronze
      return totalB - totalA
    }
    return b[sortKey] - a[sortKey]
  })
}
