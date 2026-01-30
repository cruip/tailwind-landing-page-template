# Goodblend Landing Page

Landing page website cho **Goodblend** - một nền tảng về functional nutrition và smoothies, được xây dựng với **Next.js** và **Tailwind CSS v4**.

## Giới thiệu

Goodblend là một thương hiệu về functional nutrition, cung cấp các sản phẩm smoothies và đồ uống tốt cho sức khỏe. Website này được thiết kế để giới thiệu về thương hiệu, sản phẩm, và các dịch vụ của Goodblend.

**Tagline:** "blend with purpose"

## Tính năng

- ✅ Responsive design cho Mobile, Tablet và Desktop
- ✅ Design System hoàn chỉnh với Typography, Colors, và Spacing
- ✅ Component-based architecture với React và Next.js
- ✅ Tailwind CSS v4 với custom theme
- ✅ Font Be Vietnam Pro
- ✅ Dark theme header với navigation
- ✅ Footer với newsletter subscription
- ✅ Optimized performance với Next.js App Router

## Design System

Website sử dụng một Design System hoàn chỉnh được định nghĩa trong `DESIGN_RULES.md`:

### Typography
- **Font:** Be Vietnam Pro
- **Headings:** H1-H4 với các variants (Bold, Bold Italic, Regular)
- **Body:** Large và Small với Regular và Bold
- **Caption:** Regular, Italic, và Small
- **Display:** D1, D2, D3 cho các text lớn

### Colors
- **Graphite Grey:** Palette từ Grey 100 (darkest) đến Grey 10 (lightest)
- **Active Red:** Palette từ Red 100 (darkest) đến Red 10 (lightest pink)
- **Ivory White:** Pure white

### Spacing
- **Mobile:** 8 / 16 / 24 / 32px
- **Desktop:** 12 / 16 / 24 / 32 / 48 / 64px
- Section spacing, card padding, và text spacing được định nghĩa rõ ràng

### Breakpoints
- **Mobile:** ≤599px (4 columns)
- **Tablet Portrait:** 600-904px (8 columns)
- **Tablet Landscape:** 905-1239px (12 columns)
- **Desktop:** ≥1040px (12 columns, max-width 1440px)

Xem chi tiết trong [DESIGN_RULES.md](./DESIGN_RULES.md) và [THEME_USAGE.md](./THEME_USAGE.md).

## Cấu trúc Project

```
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth pages (signin, signup, reset-password)
│   ├── (default)/         # Default layout pages
│   ├── api/               # API routes
│   └── css/               # Global styles và theme
│       └── additional-styles/
│           ├── theme.css  # Theme styles
│           └── utility-patterns.css  # Utility classes
├── components/            # React components
│   ├── ui/               # UI components (header, footer, logo)
│   └── ...               # Feature components
├── public/               # Static assets
│   └── images/           # Images và logos
├── DESIGN_RULES.md       # Design system documentation
└── THEME_USAGE.md        # Theme usage guide
```

## Getting Started

### Prerequisites

- Node.js 18+ hoặc cao hơn
- pnpm (recommended) hoặc npm/yarn

### Installation

1. Clone repository:
```bash
git clone <repository-url>
cd tailwind-landing-page-template
```

2. Install dependencies:
```bash
pnpm install
# hoặc
npm install
```

3. Run development server:
```bash
pnpm dev
# hoặc
npm run dev
```

4. Mở [http://localhost:3000](http://localhost:3000) trong browser

### Build for Production

```bash
pnpm build
pnpm start
```

## Development

### Sử dụng Theme

Website sử dụng custom theme dựa trên Design System. Xem [THEME_USAGE.md](./THEME_USAGE.md) để biết cách sử dụng:

- Typography utilities: `.text-h1`, `.text-h2`, `.text-body-lg`, etc.
- Color utilities: `.bg-grey-*`, `.text-red-*`, etc.
- Spacing utilities: `.spacing-section`, `.card-padding`, etc.

### Components

Các components chính:

- **Header** (`components/ui/header.tsx`): Navigation header với logo, menu, và CTA button
- **Footer** (`components/ui/footer.tsx`): Footer với newsletter subscription và links
- **Logo** (`components/ui/logo.tsx`): Goodblend logo component

### Styling

- Global styles: `app/css/style.css`
- Theme configuration: Được định nghĩa trong `@theme` block
- Utility classes: `app/css/additional-styles/utility-patterns.css`

## Screens

Website bao gồm các màn hình sau:

- **Home:** Trang chủ với hero section và các features
- **App & Membership:** Thông tin về app và membership
- **Partnership:** Thông tin về đối tác
- **About Us:** Giới thiệu về Goodblend
- **Menu:** Menu sản phẩm (Smoothies Whey, Healthy, Bowl, Detox, Nước ép, Bites)
- **Stores:** Chi nhánh cửa hàng
- **Careers:** Tuyển dụng

## Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Font:** Be Vietnam Pro (Google Fonts)
- **Package Manager:** pnpm

## Deploy

### Vercel (Recommended)

Cách dễ nhất để deploy là sử dụng [Vercel Platform](https://vercel.com):

1. Push code lên GitHub/GitLab
2. Import project vào Vercel
3. Vercel sẽ tự động detect Next.js và deploy

### Other Platforms

Có thể deploy lên bất kỳ platform nào hỗ trợ Next.js:
- Netlify
- AWS Amplify
- Railway
- etc.

## Documentation

- [DESIGN_RULES.md](./DESIGN_RULES.md) - Design System documentation
- [THEME_USAGE.md](./THEME_USAGE.md) - Theme usage guide

## License

Copyright © 2025 Goodblend. All rights reserved.

## Contact

Để biết thêm thông tin về Goodblend, vui lòng truy cập website hoặc liên hệ qua email.
