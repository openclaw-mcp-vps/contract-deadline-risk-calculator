import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Contract Deadline Risk Calculator',
  description: 'Calculate risk of missing contract deadlines. Track project milestones, analyze progress velocity, and get alerts before you breach a contract.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1e7328b3-d6ce-411a-a34a-0cbc588d0284"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
