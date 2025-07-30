import { CountryMedals } from '@/hooks/useMedalData'
import { SortKey } from '@/types/sort'
import { CountryCode } from '@/constants/countryCodes'

export function sortCountries(
  countries: CountryMedals[],
  sortKey: SortKey,
  countryOrder: CountryCode[]
): CountryMedals[] {
  const sorted = [...countries].sort((a, b) => {
    const valA = sortKey === 'total' ? a.gold + a.silver + a.bronze : a[sortKey]
    const valB = sortKey === 'total' ? b.gold + b.silver + b.bronze : b[sortKey]

    if (valB !== valA) return valB - valA

    // tie-breaking by fixed order in countryOrder
    return countryOrder.indexOf(a.code as CountryCode) - countryOrder.indexOf(b.code as CountryCode)
  })

  return sorted
}
