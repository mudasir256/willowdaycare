# Tailwind CSS Migration

## ✅ Completed

1. **Tailwind Configuration**
   - Added Tailwind CSS, PostCSS, and Autoprefixer to package.json
   - Created `tailwind.config.js` with custom colors and animations
   - Created `postcss.config.js`
   - Updated `app/globals.css` with Tailwind directives

2. **Components Converted to Tailwind**
   - ✅ `components/Header.tsx` - Converted to Tailwind classes
   - ✅ `components/Footer.tsx` - Converted to Tailwind classes
   - ✅ `components/HeroSlider.tsx` - Converted to Tailwind classes
   - ✅ `components/ContactForm.tsx` - Converted to Tailwind classes
   - ✅ `app/page.tsx` (Home page) - Converted to Tailwind classes

## 📋 Next Steps

### 1. Install Dependencies
Run the following command to install Tailwind CSS:
```bash
npm install
```

### 2. Convert Remaining Pages
The following pages still need to be converted from CSS modules to Tailwind:
- `app/about/page.tsx`
- `app/services/page.tsx`
- `app/gallery/page.tsx`
- `app/contact/page.tsx`
- `app/jobs/page.tsx`
- `app/fundraising/page.tsx`

### 3. Delete CSS Module Files
After converting all pages, you can delete these CSS module files:
- `app/page.module.css`
- `app/about/page.module.css`
- `app/services/page.module.css`
- `app/gallery/page.module.css`
- `app/contact/page.module.css`
- `app/jobs/page.module.css`
- `app/fundraising/page.module.css`
- `components/Header.module.css`
- `components/Footer.module.css`
- `components/HeroSlider.module.css`
- `components/ContactForm.module.css`

## 🎨 Custom Tailwind Colors

The following custom colors are available:
- `primary-green` - #4a7c59
- `secondary-green` - #6b9b7a
- `light-green` - #a8d5ba
- `dark-green` - #2d4a35
- `accent-yellow` - #f4d03f
- `text-dark` - #2c3e50
- `text-light` - #ffffff
- `bg-light` - #f8f9fa

## ✨ Custom Animations

Available animations:
- `animate-fade-in-down`
- `animate-fade-in-up`
- `animate-fade-in-right`
- `animate-scale-in`
- `animate-slide-in-up`
- `animate-fade-in-left`

## 📝 Usage Example

```tsx
<div className="bg-primary-green text-text-light p-5 rounded-lg hover:scale-105 transition-all duration-300">
  Content here
</div>
```

