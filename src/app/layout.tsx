import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AuthProvider } from './providers/AuthProvider'
import { StoreProvider } from '@/infraestructure/store/provider/StoreProvider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
}

function RootLayout({ children, }: { children: React.ReactNode }) {

  return (
    <html lang="es">
      <body className={`${inter.className} bg-slate-950 text-white min-h-screen px-5`}>
        <AuthProvider>
          <StoreProvider>
            {children}
            <Toaster />
          </StoreProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

export default RootLayout;