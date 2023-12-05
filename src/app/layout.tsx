import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import Header from './_components/header/Header'
import Footer from './_components/footer/Footer'
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'All Things Wild Volunteer Hub',
  description: 'NextJS / React application to manage volunteers for a wildlife non-profit organization.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <div className='grid-wrapper'>
          <Toaster />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
