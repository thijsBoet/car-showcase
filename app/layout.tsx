import { Navbar, Footer } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Car Rental Hub',
  description: 'Discover the best car rental near you.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
