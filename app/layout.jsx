import Footer from './components/footer'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from './components/navbarHome'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" data-theme="cupcake">
        <body suppressHydrationWarning={true}>
          <div className=' flex flex-col'>
            {children}
            <Footer/>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
