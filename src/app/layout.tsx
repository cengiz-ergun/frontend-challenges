// import './globals.css'
import '../styles/globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frontend Challenges',
  description: 'Maded by Cengiz Ergun',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
