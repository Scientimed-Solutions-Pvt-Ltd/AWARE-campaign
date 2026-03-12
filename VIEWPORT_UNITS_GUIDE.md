# Viewport Units Conversion Guide

## AWARE Campaign - React + Tailwind CSS to Viewport Units Refactoring

This document provides a comprehensive guide for the conversion from REM-based units to viewport-based responsive units (vw, vh, vmin, vmax) using `clamp()` function.

---

## Overview

The project has been converted to use viewport-based responsive units instead of fixed REM-based values. This ensures better responsivity across different screen sizes, from mobile to large desktop displays.

### Key Principles

1. **Viewport Units**: Use `vw` (viewport width) for horizontal measurements and `vh` (viewport height) for vertical measurements
2. **CSS `clamp()` Function**: Used to set minimum and maximum boundaries, ensuring readability and usability across all devices
3. **Responsive By Default**: No need for multiple media queries; single declarations scale automatically

---

## Conversion Mapping Guide

### Typography (Font Sizes)

#### Using `clamp()` for Responsive Font Sizes:
```css
/* Format: clamp(minimum, ideal, maximum) */

/* Custom Heading Classes in index.css */
.text-h1 {
  font-size: clamp(28px, 6vw, 54px);
}

.text-h2 {
  font-size: clamp(24px, 5vw, 42px);
}

.text-h3 {
  font-size: clamp(20px, 4vw, 32px);
}

/* Body Text Classes */
.text-body-lg {
  font-size: clamp(18px, 3vw, 28px);
}

.text-body-md {
  font-size: clamp(16px, 2.5vw, 20px);
}

.text-body-sm {
  font-size: clamp(14px, 2vw, 16px);
}

.text-body-xs {
  font-size: clamp(12px, 1.5vw, 14px);
}
```

#### Inline Font Size Examples:
```jsx
// Large heading
style={{ fontSize: 'clamp(20px, 4vw, 32px)' }}

// Medium text
style={{ fontSize: 'clamp(18px, 3vw, 24px)' }}

// Small text
style={{ fontSize: 'clamp(14px, 2vw, 18px)' }}
```

---

### Spacing & Padding

#### Using `clamp()` for Responsive Spacing:

```jsx
// Responsive padding for containers
padding: "clamp(12px, 3vw, 32px)"

// Responsive padding X-direction (left/right)
padding: "clamp(12px, 3vw, 40px)" // left and right only

// Responsive padding Y-direction (top/bottom)
padding: "clamp(12px, 2vh, 32px)"

// Responsive gaps between flex/grid items
gap: 'clamp(12px, 3vw, 32px)' // horizontal gap
gap: 'clamp(12px, 4vh, 32px)' // vertical gap

// Responsive margins
marginTop: 'clamp(12px, 2vh, 20px)'
marginBottom: 'clamp(12px, 2vh, 20px)'
```

#### Component Example - PageLayout:
```jsx
<div className="flex-1 px-[3vw] md:px-[7vw] pt-[2vh] md:pt-[3vh] flex flex-col justify-between">
  {/* Uses vw for horizontal padding and vh for vertical padding */}
</div>
```

---

### Sizing (Width & Height)

#### Width Examples:
```jsx
// Logo sizing
style={{
  width: 'clamp(120px, 20vw, 160px)',
  height: 'clamp(120px, 20vw, 160px)'
}}

// Container width with vw
width: 'clamp(200px, 80vw, 400px)'

// Full viewport width (mobile-friendly)
className: "w-full"
```

#### Height Examples:
```jsx
// Logo/Icon heights
style={{
  height: 'clamp(28px, 2.5vh, 40px)',
  width: 'auto'
}}

// Header logo
style={{
  height: 'clamp(60px, 10vh, 80px)',
  width: 'auto'
}}

// Section heights
style={{
  height: 'clamp(200px, 40vh, 400px)'
}}
```

---

## Component-by-Component Conversion Examples

### 1. Header Component Conversion

**Before (REM-based):**
```jsx
<header className="px-4 md:px-20 pt-4 pb-1">
  <img className="h-24 md:h-18 w-auto" src={logo} />
  <button className="w-8 h-8 gap-1.5">
    {/* hamburger menu */}
  </button>
</header>
```

**After (Viewport-based):**
```jsx
<header className="px-[2vw] md:px-[7vw] pt-[1.5vh] pb-[0.5vh]">
  <img style={{height: 'clamp(60px, 10vh, 80px)', width: 'auto'}} src={logo} />
  <button style={{width: 'clamp(28px, 4vw, 36px)', height: 'clamp(28px, 3vh, 36px)', gap: 'clamp(4px, 0.5vh, 6px)'}}>
    {/* hamburger menu */}
  </button>
</header>
```

**Key Changes:**
- `px-4 md:px-20` → `px-[2vw] md:px-[7vw]` (uses vw for horizontal padding)
- `pt-4 pb-1` → `pt-[1.5vh] pb-[0.5vh]` (uses vh for vertical padding)
- `h-24 md:h-18` → `clamp(60px, 10vh, 80px)` (responsive height with bounds)
- `w-8 h-8` → `clamp(28px, 4vw, 36px)` × `clamp(28px, 3vh, 36px)` (separate vw/vh)

---

### 2. Button Component Conversion

**Before:**
```jsx
<button className="gap-2 text-2xl md:text-3xl">
  {label}
  {imageUrl && <img className="h-8 md:h-10 w-auto" src={imageUrl} />}
</button>
```

**After:**
```jsx
<button className="gap-[1.5vw]" style={{ fontSize: 'clamp(18px, 3.5vw, 28px)' }}>
  {label}
  {imageUrl && <img style={{height: 'clamp(28px, 2.5vh, 40px)'}} src={imageUrl} />}
</button>
```

---

### 3. Typography Component Conversion

**Before:**
```jsx
<h1 className="text-4xl sm:text-4xl md:text-5xl">Title</h1>
<p className="text-3xl md:text-3xl">Large text</p>
```

**After:**
```jsx
<h1 className="text-h1">Title</h1>
<p className="text-body-lg">Large text</p>
```

Using predefined classes from `index.css`:
- `.text-h1` = `clamp(28px, 6vw, 54px)`
- `.text-h2` = `clamp(24px, 5vw, 42px)`
- `.text-h3` = `clamp(20px, 4vw, 32px)`
- `.text-body-lg` = `clamp(18px, 3vw, 28px)`
- `.text-body-md` = `clamp(16px, 2.5vw, 20px)`
- `.text-body-sm` = `clamp(14px, 2vw, 16px)`

---

### 4. Layout Container Conversion

**Before:**
```jsx
<div className="flex flex-col space-y-12 md:space-y-16">
  <div className="flex gap-6 md:gap-10">
    {/* content */}
  </div>
</div>
```

**After:**
```jsx
<div className="flex flex-col" style={{ gap: 'clamp(32px, 8vh, 48px)' }}>
  <div className="flex" style={{ gap: 'clamp(16px, 4vw, 40px)' }}>
    {/* content */}
  </div>
</div>
```

---

### 5. Image Responsive Sizing

**Before:**
```jsx
<img className="h-24 w-24" src={icon} />
<img className="h-32" src={product} />
```

**After:**
```jsx
<img style={{
  width: 'clamp(64px, 12vw, 96px)',
  height: 'clamp(64px, 12vw, 96px)'
}} src={icon} />

<img style={{
  height: 'clamp(80px, 16vh, 140px)',
  width: 'auto'
}} src={product} />
```

---

## Viewport Units Comparison

### `vw` (Viewport Width)
- 1vw = 1% of viewport width
- **Use for**: Horizontal spacing, container widths, font sizes on desktop
- **Mobile**: More aggressive scaling
- **Example**: `width: 30vw` = 30% of screen width

### `vh` (Viewport Height)
- 1vh = 1% of viewport height
- **Use for**: Vertical spacing, heights, font sizes
- **Mobile**: Can be problematic (mobile browsers handle vh differently)
- **Example**: `height: 50vh` = 50% of screen height

### `vmin` / `vmax`
- `vmin` = smaller of vw or vh (1% of smaller dimension)
- `vmax` = larger of vw or vh (1% of larger dimension)
- **Use for**: Square containers, consistent scaling
- **Example**: `width: 50vmin` = equal aspect ratio on all devices

---

## Clamp() Function Benefits

```css
clamp(minimum, ideal, maximum)
```

### Why Use `clamp()`?

1. **Readability**: Text never gets too small (especially on mobile)
2. **Usability**: Content never gets too large (especially on desktop)
3. **Smooth Scaling**: Automatic responsive behavior without media queries
4. **Accessibility**: Respects user's preferred text size

### Example Breakdown:

```css
font-size: clamp(14px, 2.5vw, 20px)
```

- **Minimum (14px)**: On very small screens (mobile), font won't go below 14px
- **Ideal (2.5vw)**: Scales with viewport width
- **Maximum (20px)**: On very large screens (desktop), font won't exceed 20px

### Device Examples:

| Device | Viewport Width | 2.5vw Value | Applied Size |
|--------|---|---|---|
| Mobile (375px) | 375px | 9.4px | **14px** (clamped to min) |
| Tablet (768px) | 768px | 19.2px | **19.2px** (ideal) |
| Desktop (1920px) | 1920px | 48px | **20px** (clamped to max) |

---

## Responsive Breakpoints (Optional)

While viewport units eliminate the need for many breakpoints, you can still use Tailwind's breakpoints for major layout changes:

```jsx
// Still use md: for layout changes when needed
<div className="flex flex-col md:flex-row" style={{gap: 'clamp(12px, 3vw, 24px)'}}>
  {/* Stacked on mobile, side-by-side ondesktop */}
</div>
```

---

## Common Pitfalls to Avoid

### ❌ Don't Use:
```jsx
// Too aggressive scaling
style={{ fontSize: '100vw' }}  // Unreadable on any device

// Only vw without min/max
style={{ padding: '5vw' }}  // Too small on mobile, too large on desktop

// Mixing units inconsistently
className="px-4 py-[2vh]"  // Inconsistent system
```

### ✅ Do Use:
```jsx
// With clamp() bounds
style={{ fontSize: 'clamp(14px, 2.5vw, 18px)' }}

// Consistent viewport units
style={{ padding: 'clamp(12px, 3vw, 32px)' }}

// Use appropriate units for direction
paddingLeft­: '3vw', paddingTop: '2vh'  // vw for horizontal, vh for vertical
```

---

## Testing Responsive Design

### Browser DevTools Testing:

1. **Open DevTools** (F12 / Ctrl+Shift+I)
2. **Toggle Device Toolbar** (Ctrl+Shift+M)
3. **Test various screen sizes**:
   - Mobile: 375px (iPhone SE)
   - Tablet: 768px (iPad)
   - Desktop: 1920px+ (wide monitors)

### Key Things to Check:

- [ ] Text is readable on all sizes
- [ ] Buttons/clickables are touchable on mobile (min 44px)
- [ ] Images scale proportionally
- [ ] No horizontal overflow
- [ ] Spacing feels balanced
- [ ] Heading hierarchy is maintained

---

## Accessibility Considerations

### Font Scaling:
```css
/* Users can adjust zoom: good! */
font-size: clamp(14px, 2.5vw, 18px)

/* Users cannot adjust: bad! */
font-size: 2.5vw
```

### Minimum Touch Target Size:
```jsx
/* For buttons, ensure minimum 44px × 44px */
style={{
  width: 'clamp(44px, 8vw, 64px)',
  height: 'clamp(44px, 6vh, 64px)'
}}
```

### Color Contrast:
- Maintain WCAG AA contrast ratios (4.5:1 for text)
- Not affected by viewport units, but test after changes

---

## Summary

### Files Updated:
1. ✅ `index.css` - Global styles and custom utility classes
2. ✅ `PageLayout.jsx` - Main layout container
3. ✅ `Header.jsx` - Navigation header with responsive logo/menu
4. ✅ `Button.jsx` - Interactive button component
5. ✅ `AMRContent.jsx` - Content typography and spacing
6. ✅ `InfoBlock.jsx` - Icon and text layout
7. ✅ `FooterReferences.jsx` - Footer with references
8. ✅ `AwareCampaignInfo.jsx` - Content page
9. ✅ `AwareCampaignVideo.jsx` - Video player page
10. ✅ `AwareCampaignPledge.jsx` - Interactive page with speech recognition
11. ✅ `CongratsPage.jsx` - Congratulations modal
12. ✅ `AwareCampaignPortfolio.jsx` - Product portfolio display

### Benefits Achieved:
- ✅ Fully responsive design
- ✅ No need for multiple media queries
- ✅ Better readability on all devices
- ✅ Smooth scaling across viewport sizes
- ✅ Maintained accessibility standards
- ✅ Cleaner, more maintainable code

---

## Quick Reference - Conversion Cheats

```jsx
// Logo sizing
style={{ height: 'clamp(60px, 10vh, 80px)', width: 'auto' }}

// Button padding
style={{ padding: 'clamp(8px, 1.5vh, 16px) clamp(12px, 2vw, 24px)' }}

// Heading text
className="text-h1" // = clamp(28px, 6vw, 54px)

// Icon size
style={{ width: 'clamp(64px, 12vw, 96px)', height: 'clamp(64px, 12vw, 96px)' }}

// Horizontal padding
className="px-[3vw]" // Tailwind arbitrary value for 3% of viewport width

// Vertical padding
className="pt-[2vh]" // Tailwind arbitrary value for 2% of viewport height

// Gap/spacing
style={{ gap: 'clamp(12px, 3vw, 32px)' }}

// Body text
className="text-body-lg" // = clamp(18px, 3vw, 28px)
```

---

## Additional Resources

- [MDN: Viewport Units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#viewport)
- [CSS Tricks: Fluid Typography](https://css-tricks.com/snippets/css/fluid-typography/)
- [Clamp() Function Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)
- [Tailwind CSS Arbitrary Values](https://tailwindcss.com/docs/adding-custom-styles#arbitrary-values)

---

**Generated**: March 12, 2026  
**Project**: AWARE Campaign - Antimicrobial Resistance Awareness
**Approach**: Viewport Units Conversion (REM → VW/VH)
