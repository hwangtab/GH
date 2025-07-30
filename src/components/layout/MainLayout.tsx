'use client'

import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface MainLayoutProps {
  children: React.ReactNode
  user?: {
    name: string
    email: string
  } | null
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, user }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header user={user} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export { MainLayout }