'use client'

import React from 'react'
import Link from 'next/link'
import { AuthProvider } from '@/context/AuthContext'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link href="/" className="flex justify-center">
            <span className="text-3xl font-bold text-primary-600">C-Link</span>
          </Link>
          <p className="mt-3 text-center text-sm text-gray-600">
            수원 C-Station 통합 지원 포털
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {children}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            © 2024 C-Link. All rights reserved. | 한국스마트협동조합
          </p>
        </div>
      </div>
    </AuthProvider>
  )
}