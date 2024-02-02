import Footer from './components/footer'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from './components/navbarHome'


export const metadata = {
  title: {
    default: 'Robin Internships',
    template: '%s | Robin Internships',
  },
  description: 'Find Interships dont require WorkEx. Our platform is tailored for students that are starting off with interning. At Robin internships, find internships that dont always ask you for prior work experience or certifications! ',
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
