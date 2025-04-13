# Next.js Project Setup Documentation

## 프로젝트 기술 스택

- Next.js 14.1.0
- React 18.2.0
- TypeScript 5.3.3
- TailwindCSS 3.4.1
- ESLint & Prettier
- Jest & React Testing Library

## 프로젝트 구조

```
.
├── src/
│   ├── app/          # Next.js App Router
│   ├── components/   # 리액트 컴포넌트
│   └── styles/       # 스타일 파일
├── docs/            # 프로젝트 문서
├── public/          # 정적 파일
└── tests/           # 테스트 파일
```

## 개발 환경 설정

### 1. ESLint 설정

ESLint는 다음과 같은 규칙들을 포함합니다:

- Next.js 권장 설정
- TypeScript 규칙
- React Hooks 규칙
- 접근성(a11y) 규칙

주요 명령어:

```bash
npm run lint        # 린트 검사
npm run lint:fix    # 자동 수정
npm run format      # Prettier 포맷팅
```

### 2. Jest & Testing Library 설정

테스트 환경은 다음과 같이 구성되어 있습니다:

- Jest
- React Testing Library
- Jest DOM
- User Event
- MSW (API Mocking)

주요 명령어:

```bash
npm test           # 테스트 실행
npm run test:watch # 감시 모드로 테스트 실행
npm run test:coverage # 커버리지 리포트 생성
```

테스트 파일은 다음 위치에 작성할 수 있습니다:

- `src/**/__tests__/*.test.tsx`
- `src/**/*.test.tsx`
- `src/**/*.spec.tsx`

### 3. Next.js 설정

`next.config.ts`:

```typescript
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
```

### 4. TypeScript 설정

- 절대 경로 임포트 지원 (`@/*`)
- 엄격한 타입 검사 활성화
- ESNext 타겟

## 개발 시작하기

1. 의존성 설치:

```bash
npm install
```

2. 개발 서버 실행:

```bash
npm run dev
```

3. 빌드:

```bash
npm run build
```

4. 프로덕션 서버 실행:

```bash
npm run start
```

## 테스트 작성 가이드

### 컴포넌트 테스트 예시

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button Component', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## 컨벤션 가이드

### 1. 파일 네이밍

- 컴포넌트: PascalCase (e.g., `Button.tsx`)
- 유틸리티: camelCase (e.g., `formatDate.ts`)
- 테스트: `*.test.tsx` 또는 `*.spec.tsx`

### 2. 컴포넌트 구조

- 함수형 컴포넌트 사용
- TypeScript 인터페이스로 props 정의
- 컴포넌트 당 하나의 파일

### 3. 스타일링

- TailwindCSS 클래스 사용
- 컴포넌트별 스타일 모듈화

## 문제 해결

### 일반적인 이슈

1. 타입 에러

   - `tsconfig.json` 설정 확인
   - 필요한 타입 정의 설치

2. 테스트 실패

   - Jest 설정 확인
   - 모킹 설정 확인

3. 린트 에러
   - ESLint 규칙 확인
   - `.eslintrc` 설정 검토
