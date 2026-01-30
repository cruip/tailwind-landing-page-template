# Goodblend Design System - Code Rules

## Phạm vi (Scope)

### Platform
- **Platform:** Web

### Screens
Các màn hình áp dụng design system này:
- Home
- App & Membership
- Partnership
- About us
- Menu
- Stores
- Careers

---

## Typography

### Font Family
- **Primary Font:** Be Vietnam Pro
- **Download Link:** [Be Vietnam Pro - Google Fonts](https://fonts.google.com/specimen/Be+Vietnam+Pro)

### Typography Styles

#### Heading Styles

| Style | Weight | Size | Line Height |
|-------|--------|------|-------------|
| H1 | Bold | 40px | Auto |
| H1 | Bold Italic | 40px | Auto |
| H2 | Bold | 32px | Auto |
| H2 | Bold Italic | 32px | Auto |
| H3 | Bold | 24px | Auto |
| H3 | Bold Italic | 24px | Auto |
| H3 | Regular | 24px | Auto |
| H4 | Bold | 20px | 99.9% |
| H4 | Bold Italic | 20px | Auto |
| H4 | Regular | 20px | Auto |
| Title | - | 48px | Auto |

#### Body Styles

| Style | Weight | Size | Line Height |
|-------|--------|------|-------------|
| Body lg | Regular | 16px | 150% |
| Body lg | Bold | 16px | 150% |
| Body sm | Regular | 14px | 140% |
| Body sm | Bold | 14px | Auto |

#### Caption Styles

| Style | Weight | Size | Line Height |
|-------|--------|------|-------------|
| Caption | Regular | 12px | 16px |
| Caption | Italic | 12px | Auto |
| Caption Regular Sm | Regular | 10px | 12px |

#### Display Styles

| Style | Weight | Size | Line Height |
|-------|--------|------|-------------|
| D1 | - | 200px | 82px |
| D2 | - | 128px | 82px |
| D3 | - | 96px | 110px |

---

## Color System

### Color Palettes

#### Graphite Grey
- **Grey 100** - Darkest grey
- **Grey 90**
- **Grey 80**
- **Grey 70**
- **Grey 60**
- **Grey 50**
- **Grey 40**
- **Grey 30**
- **Grey 20**
- **Grey 15**
- **Grey 10** - Lightest grey

#### Active Red
- **Red 100** - Darkest red
- **Red 90**
- **Red 80**
- **Red 70**
- **Red 60**
- **Red 50**
- **Red 40**
- **Red 30**
- **Red 20**
- **Red 10** - Lightest pink

#### Ivory White
- **White 100** - Pure white

### Color Styles

#### Gradients
- **Red Gradient** - Gradient using Active Red palette
- **Grey Gradient** - Gradient using Graphite Grey palette
- **Stroke Gradient** - Gradient for stroke/border

#### Strokes
- **Red Stroke** - Stroke using Active Red
- **White Stroke** - Stroke using Ivory White

---

## Spacing

### General Guidelines

#### Mobile Spacing
- **Primary values:** 8 / 16 / 24 / 32
- Use these values as the base for mobile spacing

#### Tablet Scaling Rules
- **Rule 1:** Do not create new number sets (Không tạo bộ số mới)
- **Rule 2:** Scale from mobile by multiples of 4 (Scale từ mobile theo bội số 4)
- **Small spacing (≤16):** Keep as is (Spacing nhỏ (≤16): giữ nguyên)
- **Large spacing (≥24):** +1 level (Spacing lớn (≥24): +1 level)

**Examples:**
- `16 → 16` (no change)
- `24 → 32` (+1 level)
- `32 → 48` (+1 level)

#### Desktop Spacing
- **Full range:** 12 / 16 / 24 / 32 / 48 / 64

### Desktop Spacing Levels

| Level | Value |
|-------|-------|
| XS | 4px |
| SM | 8px |
| MD | 12px |
| LG | 16px |
| XL | 24px |
| 2XL | 32px |
| 3XL | 48px |
| 4XL | 64px |

### Section Spacing

| Khoảng cách | Mobile | Desktop |
|-------------|--------|---------|
| Giữa các section | 48px | 96px |
| Section title → Content | 24px | 32px |
| Content → CTA | 32px | 64px |

### Card Padding

| Item | Mobile | Desktop |
|------|--------|---------|
| Padding trong card | 20px | 24px |
| Khoảng cách giữa các card | 16px | 24px |
| Border Radius | 16px | 24px |

### Text & Component Spacing

| Khoảng cách | Mobile | Desktop |
|-------------|--------|---------|
| Heading → Body | 24px | 32px |
| Subhead → Heading | 4px | 12px |
| Text → Button | 32-48px (tùy hierarchy) | 48-64px (tùy hierarchy) |

---

## Breakpoints & Grids

### Mobile (≤599px)
- **Grid:** 4 columns
- **Gutter:** 16px
- **Padding:** 16px

### Tablet
#### Portrait (600-904px)
- **Grid:** 8 columns
- **Gutter:** 24px
- **Padding:** 24px
- **Vertical:** Similar to mobile
- **Horizontal:** Near desktop layout

#### Landscape (905-1239px)
- **Grid:** 12 columns
- **Gutter:** 24px
- **Padding:** 24px
- **Vertical:** Similar to mobile
- **Horizontal:** Near desktop layout

### Desktop (≥1040px)
- **Grid:** 12 columns
- **Gutter:** 24px
- **Max-width:** 1440px
- **Layout:** Split view

---

## Implementation Guidelines

### Typography Usage
- Use Be Vietnam Pro as the primary font family
- Apply typography styles consistently across all screens
- Follow the defined size, weight, and line height values

### Color Usage
- Use primary colors and gradient palette as main colors
- Apply color tokens from the defined palettes
- Use color styles (gradients, strokes) for specific UI elements

### Spacing Usage
- Use mobile spacing values (8 / 16 / 24 / 32) as the base
- Apply tablet scaling rules: keep small spacing (≤16) unchanged, scale large spacing (≥24) by +1 level
- Use desktop full range (12 / 16 / 24 / 32 / 48 / 64) for desktop layouts
- Follow section spacing, card padding, and text spacing guidelines consistently
- Apply spacing levels (XS to 4XL) appropriately based on context

### Responsive Design
- Follow breakpoint definitions for responsive layouts
- Use grid system with specified columns, gutters, and padding
- Ensure proper layout adaptation across mobile, tablet, and desktop
- Apply spacing scaling rules when transitioning between breakpoints

### Code Structure
- Maintain consistency with design tokens
- Use Tailwind CSS classes that align with the design system
- Create reusable components following these rules

---

## Notes
- All styles should be taken directly from the style sheets (bảng styles)
- Ensure proper implementation of gradients and color transitions
- Maintain spacing consistency using the grid system
- Test across all defined breakpoints
