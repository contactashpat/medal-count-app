import { useMedalData } from '@/hooks/useMedalData'
import MedalTable from '@/components/MedalTable'
import { useRouter } from 'next/router'
import { SortKey } from '@/types/sort'

const validSortKeys: SortKey[] = ['gold', 'silver', 'bronze', 'total']

export default function Home() {
  const { data, loading, error } = useMedalData()
  const router = useRouter()

  const sortQuery = router.query.sort as string | undefined
  const sortKey: SortKey = validSortKeys.includes(sortQuery as SortKey) ? (sortQuery as SortKey) : 'gold'

  if (loading) return <p>Loading medal data...</p>
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>

  return (
    <div style={{ padding: 16 }}>
      <h1>Medal Count App</h1>
      <MedalTable countries={data!} sortKey={sortKey} />
    </div>
  )
}
