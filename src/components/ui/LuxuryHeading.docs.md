# LuxuryHeading Component Documentation

## Overview / परिचय
LuxuryHeading ek premium heading component hai jo Sanganak website ke liye specially design kiya gaya hai. Ye component modern, luxurious aur professional look provide karta hai.

## Features / विशेषताएं
- Animated gradient text effect
- Decorative gold accents
- Responsive design
- Customizable alignment
- Optional subtitle support

## Props / प्रॉप्स
```typescript
interface LuxuryHeadingProps {
  title: string;      // Main heading text / मुख्य शीर्षक
  subtitle?: string;  // Optional subheading / वैकल्पिक उपशीर्षक
  align?: 'left' | 'center' | 'right';  // Text alignment / टेक्स्ट अलाइनमेंट
  className?: string; // Additional CSS classes / अतिरिक्त CSS क्लासेस
}
```

## Styling / स्टाइलिंग
- **Gold Gradient**: `bg-gradient-to-r from-[#c6a255] via-[#e9d5a1] to-[#c6a255]`
- **Text Shadow**: `drop-shadow-[0_0_10px_rgba(218,165,32,0.3)]`
- **Decorative Elements**: Gold lines and dot for premium look

## Usage Example / उपयोग उदाहरण
```tsx
<LuxuryHeading
  title="Elite Services"
  subtitle="Transforming visions into digital excellence"
  align="center"
/>
```

## Animation Details / एनिमेशन विवरण
- Fade-in and slide-up animation on view
- Gradient text animation
- Smooth transitions for enhanced UX

## Best Practices / सर्वोत्तम प्रथाएं
1. Use for important section headings
2. Keep titles concise and impactful
3. Use subtitle for additional context
4. Maintain consistent spacing (mb-16)

## Dependencies / डिपेंडेंसीज
- Framer Motion for animations
- Tailwind CSS for styling