import { CountryMedals } from '@/hooks/useMedalData'

export function getTotalMedals(country: CountryMedals): number {
  return country.gold + country.silver + country.bronze
}
