import './globals.css'
import Navbar from '@/components/Navbar'
import AIChatWidget from '@/components/AIChatWidget'

export const metadata = {
  title: 'SYNAPSE.DEV | Evolve Your Code',
  description: 'Premium EdTech & Developer Resources',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-space text-white min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <AIChatWidget />
      </body>
    </html>
  )
}
