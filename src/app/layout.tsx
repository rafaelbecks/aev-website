import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/app/header";
const inter = Inter({ subsets: ['latin'], weight: "100" })

export const metadata = {
  title: 'Amanda Elida Varhaugvik',
  description: 'Swedish/Norwegian artist based in Stockholm',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="layout">
        <Header />
        {children}
      </div>
      </body>
    </html>
  )
}
