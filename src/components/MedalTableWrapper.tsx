// src/components/MedalTableWrapper.tsx
'use client'

import { useSearchParams } from 'next/navigation'
import MedalTable from './MedalTable'
import { SortKey } from '@/types/sort'
import { CountryMedals } from '@/hooks/useMedalData'

type Props = {
  countries: CountryMedals[]
}

const validSortKeys: SortKey[] = ['gold', 'silver', 'bronze', 'total']

export default function MedalTableWrapper({ countries }: Props) {
  const searchParams = useSearchParams()
  const sortParam = searchParams.get('sort')
  const sortKey: SortKey = validSortKeys.includes(sortParam as SortKey)
    ? (sortParam as SortKey)
    : 'gold'

  return <MedalTable countries={countries} sortKey={sortKey} />
}
