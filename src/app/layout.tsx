import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/sonner"
import GoogleTagManager from '@magicul/next-google-tag-manager';
import { Suspense } from "react";
import NavbarComponent from '@/components/Navbar';
import { SolanaProvider } from '@/service/solanaProvider';
import "@solana/wallet-adapter-react-ui/styles.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nextjs Page Generator',
  description: 'Easily design pages for your Nextjs app with functional components. Code generated using OpenAI\'s GPT4',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager />
      </head>
      <body className={inter.className}>
        <SolanaProvider>
          <main className='flex flex-col min-h-screen'>
            <Suspense>
              <div>
                  {children}
              </div>
              <Toaster />
            </Suspense>
          </main>  
        </SolanaProvider>
      </body>
    </html>
  )
}