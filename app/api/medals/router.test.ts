import { describe, expect, it } from 'vitest'
import { GET } from './route'
import { NextRequest } from 'next/server'

function createMockRequest(url: string): NextRequest {
  return {
    url,
  } as unknown as NextRequest
}

describe('GET /api/medals', () => {
  it('returns medals for the given year', async () => {
    const req = createMockRequest('http://localhost/api/medals?year=2022')
    const res = await GET(req)
    const data = await res.json()

    expect(res.status).toBe(200)
    expect(Array.isArray(data)).toBe(true)
    expect(data.length).toBeGreaterThan(0)

    expect(data[0]).toHaveProperty('code')
    expect(data[0]).toHaveProperty('gold')
    expect(data[0]).toHaveProperty('silver')
    expect(data[0]).toHaveProperty('bronze')
  })
})
