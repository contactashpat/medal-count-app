// src/app/layout.tsx

import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medal Count App',
  description: 'View medal standings by sort type',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className="bg-white text-black dark:bg-zinc-900 dark:text-white">
    {children}
    </body>
    </html>
  )
}
