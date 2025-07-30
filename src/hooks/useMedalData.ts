'use client'
import { useEffect, useState } from 'react'

export type CountryMedals = {
  code: string
  gold: number
  silver: number
  bronze: number
}

export function useMedalData() {
  const [data, setData] = useState<CountryMedals[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/medals.json')
        if (!res.ok) throw new Error('Failed to fetch medals data')
        const json = await res.json()
        setData(json)
      } catch (err: any) {
        setError(err.message || 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}
