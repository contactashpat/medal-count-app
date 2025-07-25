import { useMedalData } from '@/hooks/useMedalData'
import MedalTable from '@/components/MedalTable'

export default function Home() {
  const { data, loading, error } = useMedalData()

  if (loading) return <p>Loading medal data...</p>
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>

  return (
    <div style={{ padding: 16 }}>
      <h1>Medal Count App</h1>
      <MedalTable countries={data!} />
    </div>
  )
}
