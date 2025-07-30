import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">C-Link</span>
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              수원 C-Station 통합 지원 포털<br />
              주거와 창업을 위한 원스톱 서비스
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-500">
                운영: 한국스마트협동조합<br />
                주소: 경기도 수원시 영통구 광교중앙로 94<br />
                전화: 031-123-4567
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              서비스
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/dashboard" className="text-sm text-gray-600 hover:text-gray-900">
                  대시보드
                </Link>
              </li>
              <li>
                <Link href="/rent-fee" className="text-sm text-gray-600 hover:text-gray-900">
                  월세/관리비
                </Link>
              </li>
              <li>
                <Link href="/defect-reporting" className="text-sm text-gray-600 hover:text-gray-900">
                  하자 접수
                </Link>
              </li>
              <li>
                <Link href="/announcements" className="text-sm text-gray-600 hover:text-gray-900">
                  공지사항
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              지원
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/help" className="text-sm text-gray-600 hover:text-gray-900">
                  도움말
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                  문의하기
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © 2024 C-Link. All rights reserved. | 한국스마트협동조합
          </p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }