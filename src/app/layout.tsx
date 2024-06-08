import type { Metadata } from 'next'

import '@/styles/main.css'
import { ThemeProvider } from '@/components'
import { Header } from '@/components'
import site from '@/lib/config/site'

export const metadata: Metadata = {
  ...site,
  manifest: '/favicon/site.webmanifest',
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon.ico',
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [...site.favicons]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className='bg-background'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
