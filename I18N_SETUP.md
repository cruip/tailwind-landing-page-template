# Internationalization (i18n) Setup with next-intl

Project này sử dụng `next-intl` với Next.js App Router để hỗ trợ đa ngôn ngữ (Tiếng Việt và English).

## Cấu trúc Files

### Core Configuration Files

1. **`i18n.ts`** - Cấu hình chính cho next-intl
   - Định nghĩa các locale được hỗ trợ (`vi`, `en`)
   - Load translations từ JSON files
   - Validate locale params

2. **`next.config.mjs`** - Next.js config với next-intl plugin
   - Import và apply `createNextIntlPlugin`

3. **`middleware.ts`** - Middleware cho locale routing
   - Tự động detect và redirect đến locale phù hợp
   - Match pattern: `/(vi|en)/:path*`

4. **`messages/`** - Translation files
   - `messages/vi.json` - Tiếng Việt translations
   - `messages/en.json` - English translations

### App Directory Structure

```
app/
├── [locale]/              # Dynamic locale segment
│   ├── layout.tsx         # Locale layout (provides NextIntlClientProvider)
│   ├── (default)/         # Default route group
│   │   ├── layout.tsx     # Default layout with Header/Footer
│   │   └── page.tsx       # Home page
│   └── (auth)/            # Auth route group
│       ├── layout.tsx     # Auth layout
│       ├── signin/
│       ├── signup/
│       └── reset-password/
└── layout.tsx             # Root layout
```

## URL Structure

Tất cả routes đều có locale prefix:

- Vietnamese: `/vi/` (default)
- English: `/en/`

Examples:
- Home (VI): `http://localhost:3000/vi`
- Home (EN): `http://localhost:3000/en`
- Sign In (VI): `http://localhost:3000/vi/signin`
- Sign In (EN): `http://localhost:3000/en/signin`

## Usage trong Components

### Client Components

Sử dụng `useTranslations()` hook:

```tsx
"use client";

import { useTranslations } from "next-intl";

export default function MyComponent() {
  const t = useTranslations();
  
  return (
    <div>
      <h1>{t("nav.app")}</h1>
      <p>{t("header.getApp")}</p>
    </div>
  );
}
```

### Server Components

Sử dụng `getTranslations()`:

```tsx
import { getTranslations } from "next-intl/server";

export default async function MyServerComponent() {
  const t = await getTranslations();
  
  return (
    <div>
      <h1>{t("nav.app")}</h1>
    </div>
  );
}
```

### Pages (với params)

Pages cần extract locale từ params và call `setRequestLocale`:

```tsx
import { setRequestLocale } from "next-intl/server";

export default async function MyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  return <div>Content</div>;
}
```

## Thêm Translations Mới

1. Mở file tương ứng trong `messages/`
2. Thêm key mới theo cấu trúc nested object

Example trong `messages/vi.json`:
```json
{
  "nav": {
    "app": "App & Membership",
    "partnership": "Đối tác"
  },
  "newSection": {
    "title": "Tiêu đề mới"
  }
}
```

3. Sử dụng trong component:
```tsx
{t("newSection.title")}
```

## Language Selector

Component `LanguageSelector` cho phép user chuyển đổi ngôn ngữ:

- Hiển thị flag và tên ngôn ngữ hiện tại
- Dropdown menu để chọn ngôn ngữ khác
- Tự động navigate đến URL mới với locale tương ứng
- Preserve current path khi chuyển đổi

### Implementation

```tsx
import LanguageSelector from "@/components/ui/language-selector";

<LanguageSelector />
```

Component này sử dụng:
- `useLocale()` - Get current locale
- `useRouter()` & `usePathname()` - Navigate to new locale
- `router.refresh()` - Force refresh after language change

## Middleware Configuration

Middleware tự động:
- Detect user's preferred language
- Redirect `/` đến `/vi` (default locale)
- Ensure all routes have locale prefix
- Handle locale validation

## Best Practices

1. **Always use translation keys** - Không hardcode text trong components
2. **Nested structure** - Organize translations theo feature/section
3. **Consistent naming** - Sử dụng camelCase cho keys
4. **Add both languages** - Khi thêm key mới, thêm vào cả `vi.json` và `en.json`
5. **Type safety** - TypeScript sẽ check translation keys tồn tại

## Troubleshooting

### "Couldn't find next-intl config file" Error

- Đảm bảo `i18n.ts` exists ở root directory
- Kiểm tra `next.config.mjs` có import `createNextIntlPlugin` đúng
- Restart dev server sau khi thay đổi config

### Translations không hiển thị

- Check key exists trong cả 2 files (`vi.json` và `en.json`)
- Verify nested object structure đúng
- Ensure component đang sử dụng `useTranslations()` hoặc `getTranslations()`

### URL không có locale prefix

- Check middleware matcher pattern
- Verify `localePrefix: "always"` trong middleware config
