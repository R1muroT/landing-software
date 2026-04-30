import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'CodeNova - Software de Gestión de Inventarios, Ventas y Usuarios para PYMEs',
  description: 'Simplifica la administración de tu inventario, ventas y usuarios con nuestra solución de escritorio potente y fácil de usar. Diseñado para pequeñas y medianas empresas.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/codeNova.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/codeNova.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/codeNova.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/codeNova.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
