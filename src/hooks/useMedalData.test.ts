import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { CountryMedals, useMedalData } from './useMedalData'

const mockData: CountryMedals[] = [
  { code: 'USA', gold: 10, silver: 5, bronze: 8 },
  { code: 'CHN', gold: 8, silver: 7, bronze: 6 },
]

const server = setupServer(
  http.get('/api/medals', () => {
    return HttpResponse.json(mockData, { status: 200 })
    // return res(ctx.status(200), ctx.json(mockData))
  })
)

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

describe('useMedalData', () => {
  it('should set loading=true initially', () => {
    const { result } = renderHook(() => useMedalData())
    expect(result.current.loading).toBe(true)
    expect(result.current.data).toBeNull()
    expect(result.current.error).toBeNull()
  })

  it('fetches and returns medal data on success', async () => {
    const { result } = renderHook(() => useMedalData())
    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })
    expect(result.current.data).toEqual(mockData)
    expect(result.current.error).toBeNull()
  })

  it('handles fetch error and sets error message', async () => {
    server.use(
      http.get('/api/medals', (ctx) => {
        return HttpResponse.json(null, { status: 500 })
      })
    )
    const { result } = renderHook(() => useMedalData())
    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })
    expect(result.current.data).toBeNull()
    expect(result.current.error).toBe('Failed to fetch data')
  })
})
