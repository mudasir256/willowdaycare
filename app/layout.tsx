import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import PageHeader from '@/components/PageHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Willow Daycare - Family Run Nursery in Carmarthen',
  description: 'We are a family run business that puts children at the heart of our care. Located at Glangwili Day Nursery, Carmarthen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <PageHeader />
        <main className="pt-[100px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
