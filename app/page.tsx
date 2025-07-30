// app/page.tsx
'use client'

import { useMedalData } from '@/hooks/useMedalData'
import MedalTableWrapper from '@/components/MedalTableWrapper'

export default function Home() {
  const { data, loading, error } = useMedalData()

  if (loading) return <p className="p-4">Loading...</p>
  if (error) return <p className="p-4 text-red-600">Error: {error}</p>

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Medal Count</h1>
      <MedalTableWrapper countries={data!} />
    </div>
  )
}
