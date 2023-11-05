import type { Metadata } from 'next'
import '@radix-ui/themes/styles.css';
import { Inter } from 'next/font/google'
import './globals.css'
import { Theme } from '@radix-ui/themes';

import NavBar from './NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Theme>
        <NavBar />
        <main className='p-s'>
        {children}
        </main>
        </Theme>
        </body>
    </html>
  )
}
