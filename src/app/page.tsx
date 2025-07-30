import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ChevronRight, Users, CreditCard, Wrench, MessageSquare, Shield, Clock, Award } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                C-Link
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">서비스</a>
              <a href="#about" className="text-gray-600 hover:text-primary-600 transition-colors">소개</a>
              <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors">문의</a>
            </nav>
            <div className="flex items-center space-x-3">
              <Link href="/login">
                <Button variant="ghost" size="sm">로그인</Button>
              </Link>
              <Link href="/signup">
                <Button size="sm" className="shadow-lg shadow-primary-500/25">
                  입주자 등록
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary-50 text-primary-700 border border-primary-200 mb-8">
              <Award className="w-4 h-4 mr-2" />
              수원 C-Station 입주자 전용 포털
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block">C-Station 입주자를 위한</span>
              <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mt-2">
                통합 디지털 컨시어지
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              C-Link는 수원 C-Station 입주자 전용 서비스입니다. 
              월세 관리, 하자 신고, 공지사항 확인, 커뮤니티 참여까지 입주자 생활의 모든 것을 지원합니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/signup">
                <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-primary-500/25 px-8 py-4 text-lg">
                  입주자 등록하기
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-4 text-lg">
                  서비스 둘러보기
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                1,000+ 입주자 이용
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                안전한 입주자 인증
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                24/7 관리사무소 지원
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              입주자 생활을 위한 통합 서비스
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              C-Station 입주자가 필요한 모든 서비스를 하나의 편리한 플랫폼에서 이용하세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Dashboard */}
            <div className="group relative bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl border border-primary-100 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                통합 대시보드
              </h3>
              <p className="text-gray-600 leading-relaxed">
                개인 맞춤형 대시보드에서 월세, 공지사항, 하자 접수 현황을 한눈에 확인하세요
              </p>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="w-5 h-5 text-primary-500" />
              </div>
            </div>

            {/* Payment */}
            <div className="group relative bg-gradient-to-br from-secondary-50 to-secondary-100 p-8 rounded-2xl border border-secondary-100 hover:shadow-xl hover:shadow-secondary-500/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                스마트 결제
              </h3>
              <p className="text-gray-600 leading-relaxed">
                월세와 관리비를 간편하게 온라인으로 납부하고 자동 영수증 발급까지
              </p>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="w-5 h-5 text-secondary-500" />
              </div>
            </div>

            {/* Maintenance */}
            <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-100 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                하자 관리
              </h3>
              <p className="text-gray-600 leading-relaxed">
                시설 문제를 사진과 함께 신고하고 처리 상태를 실시간으로 추적하세요
              </p>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="w-5 h-5 text-orange-500" />
              </div>
            </div>

            {/* Community */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-100 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                커뮤니티
              </h3>
              <p className="text-gray-600 leading-relaxed">
                입주자들과 소통하고 정보를 공유할 수 있는 활발한 커뮤니티 공간
              </p>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="w-5 h-5 text-purple-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-3xl sm:text-4xl font-bold mb-2">1,000+</div>
              <div className="text-primary-100">입주자 이용</div>
            </div>
            <div className="text-white">
              <div className="text-3xl sm:text-4xl font-bold mb-2">99.9%</div>
              <div className="text-primary-100">서비스 가동률</div>
            </div>
            <div className="text-white">
              <div className="text-3xl sm:text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-100">관리사무소 지원</div>
            </div>
            <div className="text-white">
              <div className="text-3xl sm:text-4xl font-bold mb-2">5★</div>
              <div className="text-primary-100">입주자 만족도</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            C-Station 입주자이신가요?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            입주 계약서를 통해 본인 인증을 완료하시면 
            C-Link의 모든 서비스를 이용하실 수 있습니다.
          </p>
          <Link href="/signup">
            <Button size="lg" className="shadow-xl shadow-primary-500/25 px-10 py-4 text-lg">
              입주자 인증하기
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="text-2xl font-bold">C-Link</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                수원 C-Station 통합 지원 포털로 주거와 창업을 위한 
                모든 서비스를 하나의 플랫폼에서 제공합니다.
              </p>
              <div className="text-sm text-gray-400">
                <p>© 2025 C-Link. All rights reserved.</p>
                <p>한국스마트협동조합, 큰바위협동조합 운영</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">연락처</h3>
              <div className="space-y-2 text-gray-300">
                <p>경기도 수원시 영통구</p>
                <p>광교중앙로 94</p>
                <p>전화: 031-123-4567</p>
                <p>이메일: info@c-link.kr</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">바로가기</h3>
              <div className="space-y-2">
                <Link href="/terms" className="block text-gray-300 hover:text-white transition-colors">
                  이용약관
                </Link>
                <Link href="/privacy" className="block text-gray-300 hover:text-white transition-colors">
                  개인정보처리방침
                </Link>
                <Link href="/help" className="block text-gray-300 hover:text-white transition-colors">
                  도움말
                </Link>
                <Link href="/faq" className="block text-gray-300 hover:text-white transition-colors">
                  자주 묻는 질문
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}