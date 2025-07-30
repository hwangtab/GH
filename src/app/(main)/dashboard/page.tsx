'use client'

import React from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Card, CardHeader, CardTitle, CardContent, Button, AlertWithIcon } from '@/components/ui'
import { 
  CreditCard, 
  AlertCircle, 
  Bell, 
  Calendar, 
  TrendingUp,
  Home,
  Users,
  Settings
} from 'lucide-react'

export default function DashboardPage() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AlertWithIcon variant="warning" title="로그인 필요">
          대시보드를 이용하려면 로그인이 필요합니다.
        </AlertWithIcon>
      </div>
    )
  }

  const quickStats = [
    {
      title: '이번 달 납부 예정',
      value: '150,000원',
      icon: CreditCard,
      color: 'bg-blue-500',
      trend: null,
    },
    {
      title: '미처리 하자 접수',
      value: '2건',
      icon: AlertCircle,
      color: 'bg-orange-500',
      trend: '-1',
    },
    {
      title: '새 공지사항',
      value: '3개',
      icon: Bell,
      color: 'bg-green-500',
      trend: '+2',
    },
    {
      title: '커뮤니티 포인트',
      value: user.community_points?.toString() || '0',
      icon: TrendingUp,
      color: 'bg-purple-500',
      trend: '+5',
    },
  ]

  const recentActivities = [
    {
      id: 1,
      type: 'payment',
      title: '12월 월세 납부 완료',
      description: '150,000원 결제 완료',
      time: '2시간 전',
      icon: CreditCard,
      color: 'text-green-600',
    },
    {
      id: 2,
      type: 'defect',
      title: '화장실 누수 신고 접수',
      description: '담당자 배정 완료',
      time: '1일 전',
      icon: AlertCircle,
      color: 'text-orange-600',
    },
    {
      id: 3,
      type: 'announcement',
      title: '엘리베이터 점검 안내',
      description: '12월 30일 점검 예정',
      time: '2일 전',
      icon: Bell,
      color: 'text-blue-600',
    },
  ]

  const quickActions = [
    {
      title: '월세 납부',
      description: '이번 달 월세를 납부하세요',
      icon: CreditCard,
      href: '/rent-fee',
      color: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
    },
    {
      title: '하자 접수',
      description: '시설 문제를 신고하세요',
      icon: Settings,
      href: '/defect-reporting/new',
      color: 'bg-orange-50 hover:bg-orange-100 border-orange-200',
    },
    {
      title: '공지사항',
      description: '최신 소식을 확인하세요',
      icon: Bell,
      href: '/announcements',
      color: 'bg-green-50 hover:bg-green-100 border-green-200',
    },
    {
      title: '내 정보',
      description: '계정 정보를 관리하세요',
      icon: Users,
      href: '/account',
      color: 'bg-purple-50 hover:bg-purple-100 border-purple-200',
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: '월세 납부 마감',
      date: '12월 31일',
      type: 'payment',
    },
    {
      id: 2,
      title: '엘리베이터 점검',
      date: '12월 30일',
      type: 'maintenance',
    },
    {
      id: 3,
      title: '신년 모임',
      date: '1월 5일',
      type: 'community',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          안녕하세요, {user.name}님! 👋
        </h1>
        <p className="text-gray-600">
          오늘도 C-Station에서 편안한 하루 보내세요
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {quickStats.map((stat, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  {stat.trend && (
                    <p className="text-sm text-gray-500 mt-1">
                      {stat.trend.startsWith('+') ? '↗' : '↘'} {stat.trend}
                    </p>
                  )}
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Home className="h-5 w-5 mr-2" />
                빠른 작업
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <a
                    key={index}
                    href={action.href}
                    className={`p-4 rounded-lg border-2 transition-colors ${action.color}`}
                  >
                    <div className="flex items-start space-x-3">
                      <action.icon className="h-6 w-6 text-gray-700 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {action.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                최근 활동
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className={`p-2 rounded-full bg-gray-100`}>
                      <activity.icon className={`h-4 w-4 ${activity.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">
                        {activity.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {activity.description}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Button variant="ghost" className="w-full">
                  모든 활동 보기
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                예정된 일정
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 text-sm">
                        {event.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {event.date}
                      </p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      event.type === 'payment' ? 'bg-blue-500' :
                      event.type === 'maintenance' ? 'bg-orange-500' :
                      'bg-green-500'
                    }`} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Weather Widget (Placeholder) */}
          <Card>
            <CardHeader>
              <CardTitle>오늘의 날씨</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl mb-2">☀️</div>
                <p className="font-semibold">맑음</p>
                <p className="text-sm text-gray-600">15°C / 5°C</p>
                <p className="text-xs text-gray-500 mt-2">
                  수원시 영통구
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Community Points */}
          <Card>
            <CardHeader>
              <CardTitle>커뮤니티 포인트</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600 mb-2">
                  {user.community_points || 0}점
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  활동에 참여하고 포인트를 적립하세요
                </p>
                <Button variant="secondary" size="sm" className="w-full">
                  포인트 히스토리
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}