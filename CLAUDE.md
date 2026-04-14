# @sk-aitech/design-system

AI Tech Innovation 팀 공용 디자인 시스템. latte, ace, mocha 등 모든 프론트엔드 프로젝트에서 공유한다.

## 기술 스택

- React 18/19 + TypeScript
- Tailwind CSS v4
- CVA (class-variance-authority) + clsx + tailwind-merge
- lucide-react (아이콘)
- Font: Plus Jakarta Sans (UI), JetBrains Mono (코드)

## 디자인 규칙

### 컴포넌트

- UI 구현 시 반드시 `src/components/ui/`의 공용 컴포넌트를 사용할 것
- 새 UI 컴포넌트를 프로젝트에 임의로 만들지 말 것 — 기존 컴포넌트 조합으로 해결
- 부족한 컴포넌트는 이 디자인 시스템에 추가한 뒤 사용

### 사용 가능한 컴포넌트 목록

| 컴포넌트 | 용도 |
|----------|------|
| `Button` | 버튼 (7 variants: default, gradient, destructive, outline, secondary, ghost, link) |
| `Input` | 텍스트 입력 |
| `Textarea` | 멀티라인 텍스트 입력 |
| `Label` | 폼 라벨 |
| `Card` | 카드 컨테이너 (CardHeader, CardTitle, CardDescription, CardContent, CardFooter) |
| `Badge` | 범용 배지 (8 variants: default, secondary, destructive, outline, success, warning, error, muted) |
| `StatusBadge` | 상태 배지 (Active, Inactive, Connected, Disconnected, Ready, NotReady, SchedulingDisabled) |
| `Alert` | 알림 메시지 (4 variants: default, destructive, success, warning) |
| `Progress` | 프로그레스 바 |
| `UsageBar` | 리소스 사용률 바 (70%+ amber, 90%+ red 자동 변환) |
| `Dialog` | 모달 다이얼로그 (DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter) |
| `Select` | 드롭다운 선택 |
| `Table` | 데이터 테이블 (TableHeader, TableBody, TableRow, TableHead, TableCell) |
| `Tabs` | 탭 UI (TabsList, TabsTrigger, TabsContent) |
| `Switch` | 토글 스위치 |

### 스타일

- 색상: 테마 CSS 변수를 사용 (`bg-primary`, `text-primary` 등). 하드코딩(`#xxx`) 금지
- 그라데이션: `from-[var(--gradient-from)] to-[var(--gradient-to)]` 사용
- 간격: Tailwind spacing scale만 사용 (p-2, p-4, p-6, gap-4 등)
- 카드 기본: `bg-white rounded-2xl border border-gray-100 shadow-sm` (Card 컴포넌트 사용)
- 터미널/코드: `bg-[#1e293b]` + `font-mono`
- 아이콘: lucide-react만 사용. 다른 아이콘 라이브러리 import 금지

### 테마

프로젝트별 테마를 CSS import로 선택:
- `@sk-aitech/design-system/themes/latte.css` — Purple (#B07FF6)
- `@sk-aitech/design-system/themes/ace.css` — Blue (#00b7ff)

### 유틸리티

- `cn()` — clsx + tailwind-merge 래퍼. className 병합 시 항상 사용

## 주요 명령어

```bash
npm run dev            # 라이브러리 watch 빌드
npm run build          # 프로덕션 빌드
npm run storybook      # Storybook 실행 (http://localhost:6006)
npm run build-storybook # Storybook 정적 빌드
```

## 프로젝트 구조

```
src/
├── components/ui/     # 공용 컴포넌트
├── lib/utils.ts       # cn() 유틸리티
├── styles/
│   ├── base.css       # 공통 테마 (gray, semantic, font, animation)
│   └── themes/        # 프로젝트별 테마 (latte.css, ace.css)
├── stories/           # Storybook 스토리
└── index.ts           # barrel export
tokens/                # Design Tokens JSON (W3C DTCG format)
```
