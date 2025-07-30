'use client'

import React from 'react'
import { AuthProvider } from '@/context/AuthContext'
import { MainLayout } from '@/components/layout'
import { useAuth } from '@/hooks/useAuth'

function MainLayoutContent({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <MainLayout user={user ? { name: user.name, email: user.email } : null}>
      {children}
    </MainLayout>
  )
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <MainLayoutContent>{children}</MainLayoutContent>
    </AuthProvider>
  )
}