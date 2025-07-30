# C-Link 통합 지원 포털

수원 C-Station 입주자를 위한 통합 지원 포털입니다. 주거와 창업을 위한 원스톱 서비스를 제공합니다.

## 프로젝트 개요

C-Link는 수원 C-Station 입주자들의 삶의 질과 비즈니스 성공 가능성을 극대화하는 디지털 컨시어지 플랫폼입니다.

### 주요 기능 (MVP)

- **통합 대시보드**: 개인 맞춤형 정보 표시
- **인증 시스템**: 안전한 로그인/회원가입
- **월세/관리비 관리**: 온라인 납부 및 내역 조회
- **하자 접수**: 시설 문제 신고 및 처리 상태 추적
- **공지사항**: 중요한 소식 및 안내사항
- **커뮤니티**: 입주자 간 소통 공간

## 기술 스택

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Authentication, Storage)
- **Deployment**: Vercel
- **UI Components**: Custom design system
- **State Management**: React Context + TanStack Query

## 개발 환경 설정

### 1. 프로젝트 클론 및 의존성 설치

```bash
git clone <repository-url>
cd c-link-portal
npm install
```

### 2. 환경 변수 설정

`.env.local` 파일을 생성하고 다음 변수들을 설정하세요:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 4. 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 빌드된 앱 실행
npm start
```

## 프로젝트 구조

```
src/
├── app/                    # Next.js App Router 페이지
│   ├── (auth)/            # 인증 관련 페이지
│   ├── (main)/            # 메인 애플리케이션 페이지
│   └── page.tsx           # 홈페이지
├── components/            # 재사용 가능한 컴포넌트
│   ├── ui/               # 기본 UI 컴포넌트
│   ├── layout/           # 레이아웃 컴포넌트
│   └── [feature]/        # 기능별 컴포넌트
├── context/              # React Context
├── hooks/                # 커스텀 훅
├── lib/                  # 유틸리티 및 설정
├── types/                # TypeScript 타입 정의
└── styles/               # 전역 스타일
```

## 데이터베이스 스키마

### 주요 테이블

- **users**: 사용자 정보 및 커뮤니티 포인트
- **payments**: 월세/관리비 납부 내역
- **tickets**: 하자 접수 티켓
- **announcements**: 공지사항
- **ticket_attachments**: 티켓 첨부파일
- **ticket_comments**: 티켓 코멘트

자세한 스키마는 `src/types/database.ts`에서 확인할 수 있습니다.

## 개발 가이드라인

### 1. 디자인 시스템

- Primary Color: #3B82F6 (파란색)
- Secondary Color: #10B981 (녹색)
- Error Color: #EF4444 (빨간색)
- 반응형 브레이크포인트: 768px (태블릿), 1024px (데스크탑)

### 2. 컴포넌트 구조

- Atomic Design 원칙 적용
- 재사용 가능하고 조합 가능한 컴포넌트 설계
- TypeScript로 타입 안전성 보장

### 3. 보안

- Supabase RLS(Row Level Security) 정책 적용
- 사용자별 데이터 접근 제한
- SSL/TLS 암호화 통신

## 향후 계획

### Phase 2: 고급 기능
- 커뮤니티 게시판 및 댓글 시스템
- 실시간 알림 시스템
- 고급 대시보드 위젯

### Phase 3: 창업 지원 기능
- 멘토링 시스템
- 프로그램 신청 및 관리
- 이벤트 및 네트워킹

### Phase 4: 모바일 앱
- React Native 기반 모바일 앱
- 푸시 알림
- 오프라인 지원

## 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 라이선스

이 프로젝트는 한국스마트협동조합의 소유입니다.

## 연락처

- 운영: 한국스마트협동조합
- 주소: 경기도 수원시 영통구 광교중앙로 94
- 전화: 031-123-4567

---

© 2024 C-Link. All rights reserved. | 한국스마트협동조합