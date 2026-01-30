# Theme Usage Guide

Hướng dẫn sử dụng Goodblend Design System theme trong Tailwind CSS.

## Font Family

Theme sử dụng **Be Vietnam Pro** làm font chính.

```tsx
// Font đã được setup trong app/layout.tsx
// Sử dụng class: font-be-vietnam-pro
<div className="font-be-vietnam-pro">Text content</div>
```

## Typography

### Headings

```tsx
<h1 className="text-h1">H1 Bold</h1>
<h1 className="text-h1-italic">H1 Bold Italic</h1>
<h2 className="text-h2">H2 Bold</h2>
<h2 className="text-h2-italic">H2 Bold Italic</h2>
<h3 className="text-h3">H3 Regular</h3>
<h3 className="text-h3-bold">H3 Bold</h3>
<h3 className="text-h3-italic">H3 Bold Italic</h3>
<h4 className="text-h4">H4 Regular</h4>
<h4 className="text-h4-bold">H4 Bold</h4>
<h4 className="text-h4-italic">H4 Bold Italic</h4>
<div className="text-title">Title</div>
```

### Body Text

```tsx
<p className="text-body-lg">Body Large Regular</p>
<p className="text-body-lg-bold">Body Large Bold</p>
<p className="text-body-sm">Body Small Regular</p>
<p className="text-body-sm-bold">Body Small Bold</p>
```

### Caption

```tsx
<span className="text-caption">Caption Regular</span>
<span className="text-caption-italic">Caption Italic</span>
<span className="text-caption-sm">Caption Small</span>
```

### Display

```tsx
<div className="text-display-1">Display 1</div>
<div className="text-display-2">Display 2</div>
<div className="text-display-3">Display 3</div>
```

## Colors

### Graphite Grey

```tsx
<div className="bg-grey-100">Darkest grey</div>
<div className="bg-grey-90">...</div>
<div className="bg-grey-80">...</div>
// ... đến grey-10 (lightest)
<div className="bg-grey-10">Lightest grey</div>

<div className="text-grey-100">Text với màu grey</div>
```

### Active Red

```tsx
<div className="bg-red-100">Darkest red</div>
<div className="bg-red-90">...</div>
// ... đến red-10 (lightest pink)
<div className="bg-red-10">Lightest pink</div>

<div className="text-red-50">Text với màu red</div>
```

### Ivory White

```tsx
<div className="bg-white-100">Pure white</div>
<div className="text-white-100">White text</div>
```

## Gradients

```tsx
<div className="bg-gradient-red">Red Gradient</div>
<div className="bg-gradient-grey">Grey Gradient</div>
<div className="bg-gradient-stroke">Stroke Gradient</div>
```

## Strokes

```tsx
<div className="border border-red-stroke">Red stroke border</div>
<div className="border border-white-stroke">White stroke border</div>
```

## Spacing

### Section Spacing

```tsx
<section className="spacing-section">
  {/* Margin bottom: 48px mobile, 96px desktop */}
</section>

<div className="spacing-section-title">
  {/* Margin bottom: 24px mobile, 32px desktop */}
</div>

<div className="spacing-content-cta">
  {/* Margin top: 32px mobile, 64px desktop */}
</div>
```

### Card Spacing

```tsx
<div className="card-padding">
  {/* Padding: 20px mobile, 24px desktop */}
</div>

<div className="card-gap flex">
  {/* Gap: 16px mobile, 24px desktop */}
</div>

<div className="card-radius">
  {/* Border radius: 16px mobile, 24px desktop */}
</div>
```

### Text & Component Spacing

```tsx
<div className="spacing-heading-body">
  {/* Margin bottom: 24px mobile, 32px desktop */}
</div>

<div className="spacing-subhead-heading">
  {/* Margin bottom: 4px mobile, 12px desktop */}
</div>
```

### Spacing Values (CSS Variables)

Sử dụng trực tiếp CSS variables:

```css
.custom-spacing {
  margin: var(--spacing-lg); /* 16px */
  padding: var(--spacing-xl); /* 24px */
  gap: var(--spacing-2xl); /* 32px */
}
```

Available spacing variables:
- `--spacing-xs`: 4px
- `--spacing-sm`: 8px
- `--spacing-md`: 12px
- `--spacing-lg`: 16px
- `--spacing-xl`: 24px
- `--spacing-2xl`: 32px
- `--spacing-3xl`: 48px
- `--spacing-4xl`: 64px

## Breakpoints

Breakpoints được định nghĩa trong CSS variables:

- Mobile: ≤599px
- Tablet Portrait: 600-904px
- Tablet Landscape: 905-1239px
- Desktop: ≥1040px
- Max-width: 1440px

Sử dụng Tailwind responsive classes:

```tsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

## Grid System

Grid được định nghĩa trong CSS variables:

- Mobile: 4 columns, gutter 16px, padding 16px
- Tablet Portrait: 8 columns, gutter 24px, padding 24px
- Tablet Landscape: 12 columns, gutter 24px, padding 24px
- Desktop: 12 columns, gutter 24px, padding 24px, max-width 1440px

## Notes

1. **Color Values**: Các giá trị màu hiện tại là placeholder. Cần cập nhật với giá trị hex chính xác từ design system.

2. **Responsive**: Tất cả spacing utilities tự động scale theo breakpoint (mobile → desktop).

3. **Consistency**: Luôn sử dụng các utility classes và CSS variables từ theme để đảm bảo consistency.

4. **Custom Values**: Có thể override bằng cách sử dụng CSS variables trực tiếp trong custom CSS.
