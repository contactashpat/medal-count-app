'use client'
import { useEffect, useState } from 'react'

export type CountryMedals = {
  code: string
  gold: number
  silver: number
  bronze: number
}

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch data')
  return res.json()
}

export function useMedalData() {
  const [data, setData] = useState<CountryMedals[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const json = await fetchJson<CountryMedals[]>('/api/medals')
        setData(json)
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('Unknown error')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}
