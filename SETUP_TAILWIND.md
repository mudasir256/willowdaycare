# Tailwind CSS Setup Instructions

## ⚠️ Important: Tailwind is not installed yet!

To get Tailwind CSS working, you need to:

### Step 1: Install Dependencies
Run this command in your terminal:
```bash
npm install
```

This will install:
- tailwindcss
- postcss
- autoprefixer

### Step 2: Restart Development Server
After installing, restart your Next.js development server:
```bash
npm run dev
```

### Step 3: Verify It's Working
Once the server restarts, Tailwind classes should work. You can verify by checking if styles are applied.

## 🔧 Configuration Files

All configuration files are already set up:
- ✅ `tailwind.config.js` - Tailwind configuration with custom colors
- ✅ `postcss.config.js` - PostCSS configuration
- ✅ `app/globals.css` - Tailwind directives and custom styles

## 🎨 Using Custom Colors

Since Tailwind uses kebab-case for custom colors with hyphens, use them with square brackets:

```tsx
// ✅ Correct
<div className="bg-[#4a7c59] text-white">
<div className="text-[#2c3e50]">

// Or use the custom color names (after fixing config)
<div className="bg-primary-green text-text-light">
```

## 🐛 Troubleshooting

If Tailwind still doesn't work after installation:

1. **Clear Next.js cache:**
   ```bash
   rm -rf .next
   npm run dev
   ```

2. **Check if PostCSS is working:**
   Make sure `postcss.config.js` exists in the root directory

3. **Verify globals.css is imported:**
   Check that `app/layout.tsx` imports `./globals.css`

4. **Check browser console:**
   Look for any CSS-related errors

## 📝 Note

The custom color names in the config use hyphens (like `primary-green`). In Tailwind classes, you can use them as:
- `bg-primary-green` (if configured correctly)
- Or use arbitrary values: `bg-[#4a7c59]`

