'use client'

import { useMedalData } from '@/hooks/useMedalData'
import MedalTable from '@/components/MedalTable'
import { useSearchParams } from 'next/navigation'
import { SortKey } from '@/types/sort'

const validSortKeys: SortKey[] = ['gold', 'silver', 'bronze', 'total']

export default function Home() {
  const { data, loading, error } = useMedalData()
  const searchParams = useSearchParams()
  const sortParam = searchParams.get('sort')
  const sortKey: SortKey = validSortKeys.includes(sortParam as SortKey)
    ? (sortParam as SortKey)
    : 'gold'

  if (loading) {
    return (
      <div className="p-4 text-center">
        <p className="animate-pulse text-gray-500">⏳ Loading medal data...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-4 text-center text-red-600">
        <p>❌ Failed to load medal data</p>
        <p className="text-sm">{error}</p>
        <button
          onClick={() => location.reload()}
          className="mt-2 px-4 py-1 border border-red-500 text-red-500 rounded hover:bg-red-50 dark:hover:bg-zinc-800"
        >
          Retry
        </button>
      </div>
    )
  }

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🏅 Medal Count App</h1>
      <MedalTable countries={data!} sortKey={sortKey} />
    </main>
  )
}
