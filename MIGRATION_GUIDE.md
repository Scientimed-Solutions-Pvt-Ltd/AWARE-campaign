# Implementation Instructions: Switching to Viewport Units

## Overview
The conversion from REM-based to viewport units has been completed. Updated components have been created with `_new` suffix. This document explains how to switch from the old files to the new ones.

## Updated Files Created

### Core Infrastructure
- ✅ `src/index.css` - **UPDATED** with viewport utility classes

### Layout Components
- ✅ `src/pages/PageLayout.jsx` - **UPDATED** with viewport padding and heights
- ✅ `src/components/Header.jsx` - **UPDATED** with responsive logo and menu sizing
- ✅ `src/components/Button.jsx` - **UPDATED** with viewport-based font sizes and gaps
- ✅ `src/components/FooterReferences.jsx` - **UPDATED** with responsive text sizing

### Content Components
- ✅ `src/components/AMRContent.jsx` - **UPDATED** with text-h1/h2/h3 classes
- ✅ `src/components/InfoBlock.jsx` - **UPDATED** with clamp() for icon and text sizing

### Page Components (Created with `_new` suffix - choose one version)
- 📄 `src/pages/AMRPage_new.jsx` - (Home uses AMRContent, so minimal changes)
- 📄 `src/pages/AccessWatchReservePage_new.jsx` - FULL viewport conversion
- 📄 `src/pages/VideoPage_new.jsx` - FULL viewport conversion
- 📄 `src/pages/CallToActionPage_new.jsx` - FULL viewport conversion
- 📄 `src/pages/CongratsPage_new.jsx` - FULL viewport conversion
- 📄 `src/pages/AwareCampaignPortfolio.jsx` - FULL viewport conversion

---

## Migration Steps

### Step 1: Replace Already Updated Files (Done)
The following files have been directly replaced in the project:
- ✅ `src/index.css`
- ✅ `src/pages/PageLayout.jsx`
- ✅ `src/components/Header.jsx`
- ✅ `src/components/Button.jsx`
- ✅ `src/components/AMRContent.jsx`
- ✅ `src/components/InfoBlock.jsx`
- ✅ `src/components/FooterReferences.jsx`

**These are ready to use - no action needed.**

### Step 2: Switch Page Components (Manual Choice Required)

For each page, you have two options:

#### Option A: Use Original File (Keep REM-based)
- Keep using: `AccessWatchReservePage.jsx`, `AwareCampaignVideo.jsx`, etc.
- Keep using REM-based classes
- No action needed

#### Option B: Switch to Viewport Units (Recommended)
Follow these steps for each page:

```bash
# 1. Backup the original (optional but recommended)
cp src/pages/AccessWatchReservePage.jsx src/pages/AccessWatchReservePage.backup.jsx

# 2. Replace with new version
cp src/pages/AccessWatchReservePage_new.jsx src/pages/AccessWatchReservePage.jsx

# Delete the _new filer
rm src/pages/AccessWatchReservePage_new.jsx
```

**Repeat for each page:**
- `AccessWatchReservePage`
- `VidePage`
- `CallToActionPage`
- `CongratsPage`
- `AwareCampaignPortfolio`

---

### Step 3: Update imports in components (If Needed)

If you notice any missing imports for `_new` components, ensure all imports reference the original names:

```jsx
// Good - no need to change
import AccessWatchReservePage from './pages/AccessWatchReservePage';
import AwareCampaignVideo from './pages/AwareCampaignVideo';
import AwareCampaignPledge from './pages/AwareCampaignPledge';
```

---

## Verification Checklist

After switching to the new files, verify the following:

### Visual Testing
- [ ] App loads without errors in browser console
- [ ] All pages render correctly
- [ ] Text sizes look appropriate on different screen sizes
- [ ] Spacing appears balanced
- [ ] Images scale properly
- [ ] Buttons are clickable and properly sized

### Responsive Testing (Use browser DevTools)

**Mobile (375px)**
- [ ] Text is readable
- [ ] No horizontal scrolling
- [ ] Buttons are touchable (min 44px)
- [ ] Images are appropriately sized

**Tablet (768px)**
- [ ] Layout looks good
- [ ] Spacing is balanced
- [ ] Text hierarchy is clear

**Desktop (1920px)**
- [ ] Content doesn't stretch excessively
- [ ] Text remains readable
- [ ] Overall proportions look correct

### Functional Testing
- [ ] Next button navigation works
- [ ] Mobile menu opens/closes
- [ ] Speech recognition still functions (AwareCampaignPledge)
- [ ] All links work
- [ ] Forms (if any) submit correctly

---

## File Structure After Migration

```
src/
├── App.jsx
├── App.css
├── index.css (✅ UPDATED)
├── main.jsx
├── components/
│   ├── AMRContent.jsx (✅ UPDATED)
│   ├── Button.jsx (✅ UPDATED)
│   ├── FooterReferences.jsx (✅ UPDATED)
│   ├── Header.jsx (✅ UPDATED)
│   ├── InfoBlock.jsx (✅ UPDATED)
├── pages/
│   ├── AccessWatchReservePage.jsx (replace with _new version)
│   ├── Home.jsx (✅ Already updated via AMRContent)
│   ├── AwareCampaignPledge.jsx (replace with _new version)
│   ├── CongratsPage.jsx (replace with _new version)
│   ├── PageLayout.jsx (✅ UPDATED)
│   ├── AwareCampaignPortfolio.jsx (replace with _new version)
│   └── AwareCampaignVideo.jsx (replace with _new version)
└── assets/
    ├── fonts/
    └── images/
```

---

## Troubleshooting

### Issue: Text appears too small on mobile
**Solution**: The `clamp()` function should prevent this. Check:
1. Did you use the `_new` file versions?
2. Is `index.css` properly imported?
3. Check browser zoom settings (should be at 100%)

### Issue: Layout breaks at certain sizes
**Solution**: This shouldn't happen with viewport units, but if it does:
1. Open browser DevTools (F12)
2. Check Console for CSS errors
3. Verify no conflicting `max-width` properties
4. Try clearing browser cache (Ctrl+Shift+Delete)

### Issue: Performance seems slower
**Solution**: Viewport units don't affect performance. If you notice issues:
1. Check for JavaScript errors in Console
2. Verify all images are optimized
3. Profile with DevTools Performance tab

### Issue: Some components don't scale correctly
**Solution**:
1. Verify you're using the `_new` version of that component
2. Check that inline styles use `clamp()` with proper bounds
3. Review Examples in `VIEWPORT_UNITS_GUIDE.md`

---

## Rollback Instructions

If you need to revert to the original REM-based files:

```bash
# Restore from backups (if you created them)
cp src/pages/AccessWatchReservePage.backup.jsx src/pages/AccessWatchReservePage.jsx

# Or restore from Git
git checkout src/pages/AccessWatchReservePage.jsx

# For index.css and components - restore from original
git checkout src/index.css src/components/*.jsx src/pages/PageLayout.jsx
```

---

## Manual Migration (if needed)

If you prefer to manually migrate a specific file, use this checklist:

### Typography Changes
- [ ] Replace `text-4xl md:text-5xl` with `class="text-h1"`
- [ ] Replace `text-3xl` with `class="text-body-lg"`
- [ ] Replace `text-2xl` with `class="text-body-md"`
- [ ] Replace `text-lg` with `class="text-body-md"` or inline `clamp()`
- [ ] Replace `text-sm` with `class="text-body-sm"`
- [ ] Replace `text-xs` with `class="text-body-xs"`

### Spacing Changes
- [ ] Replace `px-4` with `px-[2vw]`
- [ ] Replace `px-6` with `px-[3vw]`
- [ ] Replace `px-20` with `px-[7vw]`
- [ ] Replace `pt-4` with `pt-[1.5vh]`
- [ ] Replace `space-y-4` with `style={{ gap: 'clamp(12px, 2vh, 20px)' }}`

### Size Changes
- [ ] Replace `h-24` with `style={{ height: 'clamp(60px, 10vh, 80px)' }}`
- [ ] Replace `w-40 h-40` with `style={{ width: 'clamp(120px, 20vw, 160px)', height: 'clamp(120px, 20vw, 160px)' }}`

---

## References

For more information, see:
- `VIEWPORT_UNITS_GUIDE.md` - Comprehensive conversion guide with examples
- `index.css` - Custom utility classes definitions
- Updated component files - Examples of viewport unit implementation

---

## Summary

**✅ Completed**:
- Core layout system converted to viewport units
- Typography system converted with custom classes
- Individual components updated with responsive sizing
- Comprehensive documentation created

**Next Steps**:
1. Choose to switch to `_new` file versions OR keep using originals
2. Test thoroughly on multiple devices
3. Monitor performance (should be identical or better)
4. Refer to guides if adjustments are needed

**Timeline**: Can be migrated immediately - no breaking changes expected.

---

**Created**: March 12, 2026
**Status**: Ready for Implementation
**Effort**: ~5-10 minutes to switch all files (mostly copy/paste operations)
