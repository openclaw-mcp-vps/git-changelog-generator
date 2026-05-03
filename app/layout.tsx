import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Git Changelog Generator — Auto-generate changelogs from commit patterns',
  description: 'Connect to GitHub or GitLab, analyze commit history using conventional commit standards, and export beautiful changelogs in seconds.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9a7585a6-cf21-4178-9d5a-77b0a7fc8410"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
