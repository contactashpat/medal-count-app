// src/app/layout.tsx
import '@/styles/globals.css'
import type {Metadata} from 'next'
import DarkModeToggle from "@/components/DarkModeToggle";

export const metadata: Metadata = {
  title: 'Medal Count App',
  description: 'Olympic medal standings viewer',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className="bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors">
    <div className="absolute top-4 right-4 z-50">
      <DarkModeToggle />
    </div>
    {children}
    </body>
    </html>
  )
}
