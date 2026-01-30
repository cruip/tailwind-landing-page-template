# Migration Summary: Context-based i18n → next-intl

## Những gì đã thay đổi

### ✅ Files Mới Được Tạo

1. **i18n.ts** - Cấu hình next-intl chính
2. **next.config.mjs** - Next.js config với next-intl plugin (thay thế next.config.js nếu có)
3. **middleware.ts** - Middleware để handle locale routing
4. **messages/vi.json** - Vietnamese translations
5. **messages/en.json** - English translations
6. **app/[locale]/layout.tsx** - Root locale layout
7. **app/[locale]/(default)/*** - Default routes với locale support
8. **app/[locale]/(auth)/*** - Auth routes với locale support
9. **components/ui/language-selector.tsx** - Language selector component
10. **I18N_SETUP.md** - Documentation chi tiết

### 🔄 Files Đã Cập Nhật

1. **components/ui/header.tsx**
   - Thay `useI18n()` → `useTranslations()`
   - Thay `t.nav.app` → `t("nav.app")`
   - Remove import `@/contexts/i18n-context`

2. **app/layout.tsx**
   - Giữ nguyên (không cần thay đổi)
   - `[locale]/layout.tsx` wrap NextIntlClientProvider

### ❌ Files Có Thể Xóa (nếu tồn tại)

- `contexts/i18n-context.tsx` (nếu có)
- `lib/i18n.ts` (nếu có custom implementation)
- Old `app/(default)/` và `app/(auth)/` directories (đã được di chuyển vào `app/[locale]/`)

## URL Structure Mới

### Trước (với custom context):
```
/ → Home
/signin → Sign In
```

### Sau (với next-intl routing):
```
/ → Redirect to /vi
/vi → Home (Vietnamese)
/en → Home (English)
/vi/signin → Sign In (Vietnamese)
/en/signin → Sign In (English)
```

## Cách Sử dụng

### 1. Trong Client Components:
```tsx
"use client";
import { useTranslations } from "next-intl";

export default function MyComponent() {
  const t = useTranslations();
  return <h1>{t("nav.app")}</h1>;
}
```

### 2. Trong Server Components:
```tsx
import { getTranslations } from "next-intl/server";

export default async function MyComponent() {
  const t = await getTranslations();
  return <h1>{t("nav.app")}</h1>;
}
```

### 3. Trong Pages (với locale params):
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

### 4. Language Selector:
```tsx
import LanguageSelector from "@/components/ui/language-selector";

<LanguageSelector />
```

## Lợi ích của next-intl

### ✨ Advantages:

1. **Next.js App Router Native Support** - Được thiết kế riêng cho App Router
2. **Type Safety** - TypeScript support tốt hơn cho translation keys
3. **SEO Friendly** - URLs có locale prefix tốt cho SEO
4. **Server & Client Support** - Hoạt động với cả server và client components
5. **Static Generation** - Support static site generation với multiple locales
6. **Better Performance** - Chỉ load translations cần thiết
7. **Standard Solution** - Recommended by Next.js team

### 📦 So với Custom Context:

| Feature | Custom Context | next-intl |
|---------|---------------|-----------|
| URL Routing | Manual | Automatic |
| SEO | Limited | Excellent |
| Type Safety | Basic | Advanced |
| Server Components | Limited | Full Support |
| Static Generation | Complex | Built-in |
| Maintenance | Manual updates | Community supported |

## Next Steps

1. **Test toàn bộ website**
   ```bash
   pnpm dev
   ```

2. **Navigate qua các routes**
   - `/vi` - Home Vietnamese
   - `/en` - Home English
   - Test language selector

3. **Thêm translations mới**
   - Edit `messages/vi.json` và `messages/en.json`
   - Sử dụng trong components với `t("key.path")`

4. **Deploy**
   - next-intl hoạt động với Vercel, Netlify, và static exports
   - Không cần configuration thêm

## Support

Xem chi tiết trong:
- **I18N_SETUP.md** - Setup và usage guide
- **next-intl docs** - https://next-intl.dev/docs/getting-started/app-router

## Checklist

- [x] Install next-intl package
- [x] Setup configuration files
- [x] Create [locale] directory structure
- [x] Migrate all routes to [locale]
- [x] Update middleware
- [x] Create language selector
- [x] Update Header component
- [x] Create documentation
- [ ] Test all routes and translations
- [ ] Remove old context files (if any)
- [ ] Update README if needed
