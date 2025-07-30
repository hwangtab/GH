'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button, Input, AlertWithIcon } from '@/components/ui'
import { useAuth } from '@/hooks/useAuth'
import { Eye, EyeOff } from 'lucide-react'

const signupSchema = z.object({
  name: z
    .string()
    .min(1, '이름을 입력해주세요.')
    .min(2, '이름은 최소 2자 이상이어야 합니다.'),
  email: z
    .string()
    .min(1, '이메일을 입력해주세요.')
    .email('올바른 이메일 형식을 입력해주세요.'),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[0-9-+()\\s]*$/.test(val), {
      message: '올바른 전화번호 형식을 입력해주세요.',
    }),
  password: z
    .string()
    .min(1, '비밀번호를 입력해주세요.')
    .min(6, '비밀번호는 최소 6자 이상이어야 합니다.')
    .regex(/^(?=.*[a-zA-Z])(?=.*[0-9])/, '비밀번호는 영문과 숫자를 포함해야 합니다.'),
  confirmPassword: z
    .string()
    .min(1, '비밀번호 확인을 입력해주세요.'),
  terms: z
    .boolean()
    .refine((val) => val === true, {
      message: '이용약관에 동의해주세요.',
    }),
}).refine((data) => data.password === data.confirmPassword, {
  message: '비밀번호가 일치하지 않습니다.',
  path: ['confirmPassword'],
})

type SignupForm = z.infer<typeof signupSchema>

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const { signUp, loading } = useAuth()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
  })

  const onSubmit = async (data: SignupForm) => {
    try {
      setError(null)
      const { error } = await signUp(data.email, data.password, {
        name: data.name,
        phone: data.phone,
      })
      
      if (error) {
        setError(error)
      } else {
        setSuccess(true)
        setTimeout(() => {
          router.push('/login')
        }, 2000)
      }
    } catch {
      setError('회원가입 중 오류가 발생했습니다.')
    }
  }

  if (success) {
    return (
      <div className="space-y-6">
        <AlertWithIcon variant="success" title="회원가입 완료">
          회원가입이 완료되었습니다. 이메일을 확인하여 계정을 활성화해주세요.
          잠시 후 로그인 페이지로 이동합니다.
        </AlertWithIcon>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
          회원가입
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          이미 계정이 있으신가요?{' '}
          <Link
            href="/login"
            className="font-medium text-primary-600 hover:text-primary-500"
          >
            로그인
          </Link>
        </p>
      </div>

      {error && (
        <AlertWithIcon variant="error" title="회원가입 실패">
          {error}
        </AlertWithIcon>
      )}

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            이름 *
          </label>
          <div className="mt-1">
            <Input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="이름을 입력하세요"
              error={!!errors.name}
              {...register('name')}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            이메일 *
          </label>
          <div className="mt-1">
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="이메일을 입력하세요"
              error={!!errors.email}
              {...register('email')}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            전화번호
          </label>
          <div className="mt-1">
            <Input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="전화번호를 입력하세요 (선택사항)"
              error={!!errors.phone}
              {...register('phone')}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            비밀번호 *
          </label>
          <div className="mt-1 relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
              placeholder="비밀번호를 입력하세요"
              error={!!errors.password}
              {...register('password')}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-gray-400" />
              ) : (
                <Eye className="h-4 w-4 text-gray-400" />
              )}
            </button>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            비밀번호 확인 *
          </label>
          <div className="mt-1 relative">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              autoComplete="new-password"
              placeholder="비밀번호를 다시 입력하세요"
              error={!!errors.confirmPassword}
              {...register('confirmPassword')}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-4 w-4 text-gray-400" />
              ) : (
                <Eye className="h-4 w-4 text-gray-400" />
              )}
            </button>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
            )}
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              {...register('terms')}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="text-gray-700">
              <Link href="/terms" className="text-primary-600 hover:text-primary-500">
                이용약관
              </Link>
              {' '}및{' '}
              <Link href="/privacy" className="text-primary-600 hover:text-primary-500">
                개인정보처리방침
              </Link>
              에 동의합니다. *
            </label>
            {errors.terms && (
              <p className="mt-1 text-sm text-red-600">{errors.terms.message}</p>
            )}
          </div>
        </div>

        <div>
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting || loading}
          >
            {isSubmitting || loading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                회원가입 중...
              </>
            ) : (
              '회원가입'
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}