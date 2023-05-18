import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Header from "@/app/header";
const Garamond = Cormorant_Garamond({ subsets: ['latin'],   style: ['normal', 'italic'], weight: "300" })

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
      <body className={Garamond.className}>
      <div className="layout">
        <Header />
        {children}
      </div>
      </body>
    </html>
  )
}
