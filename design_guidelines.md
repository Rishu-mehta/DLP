# Design Guidelines: DLP Global Skillers Solutions

## Design Approach: Custom Premium Corporate

This project requires a **premium corporate aesthetic** combining modern glassmorphism, neumorphism, and advanced animations. The design draws inspiration from the company's brand identity (logo colors) and modern tech company aesthetics.

## Brand Colors (From Logo)

**Primary Palette:**
- **Teal/Turquoise**: 174 51% 43% (primary brand color)
- **Orange**: 27 75% 52% (accent/CTA color)
- **Dark Navy**: 215 29% 15% (text and backgrounds)
- **Cream/Beige**: 40 33% 94% (light backgrounds)

**Extended Palette:**
- Light mode background: White/Cream tones
- Dark mode background: Deep navy variations
- Glassmorphic overlays: White with 10-20% opacity + backdrop blur
- Neumorphic shadows: Soft dual-tone (light + dark) for depth

## Typography

**Font Families:**
- Primary: Inter or Poppins (modern, professional sans-serif)
- Headings: 600-700 weight
- Body: 400-500 weight

**Responsive Scale:**
- Hero Headlines: 4xl-6xl (mobile to desktop)
- Section Headings: 2xl-4xl
- Body Text: base-lg
- Captions: sm-base

## Layout System

**Spacing Primitives:** Use Tailwind units: 4, 8, 12, 16, 20, 24, 32 for consistent rhythm

**Container Strategy:**
- Max-width: 7xl (1280px)
- Section Padding: py-16 md:py-24 lg:py-32
- Card/Component spacing: p-6 md:p-8

## Component Library

### Navigation
- **Sticky Glassmorphic Navbar**: Semi-transparent white/dark background with backdrop-blur-lg, subtle border
- **Dropdown Menu**: Glassmorphic panel for Services submenu (Tech Training, Non-Tech Training, Job Offerings, IT Services)
- **Mobile Hamburger**: Framer Motion animated with full-screen overlay menu

### Buttons & CTAs
- **Primary**: Neumorphic style with dual shadows, orange background, smooth hover lift
- **Secondary**: Glassmorphic outline, teal border, subtle hover effects
- **On Image Buttons**: Backdrop-blur background for readability

### Cards
- **Service Cards**: Glassmorphic background, hover animations with Framer Motion scale/lift
- **Team/Leadership Cards**: Glassmorphic with gradient borders
- **Blog Cards**: Image thumbnails with glassmorphic text overlays
- **Why Choose Us**: Neumorphic cards with inset shadows and icons

### Forms
- **Input Fields**: Glassmorphic backgrounds with subtle borders
- **Submit Button**: Neumorphic orange button with validation states
- **Validation**: Inline error messages with smooth transitions

### Footer
- Multi-column layout with company branding, quick links, contact info, social media icons
- Glassmorphic divider, dark background with light text

## Animation Strategy

### Framer Motion
- **Page Transitions**: Smooth fade + slide (200-300ms)
- **Card Hover**: Scale (1.02-1.05) + shadow expansion
- **Navbar Links**: Underline slide-in effect on hover
- **Mobile Menu**: Stagger children animations

### GSAP
- **Scroll-Triggered Reveals**: Sections fade/slide up on scroll
- **Parallax Effects**: Subtle background movements
- **Timeline Animations**: For About Us journey section

### React Three Fiber
- **Hero 3D Element**: Rotating globe or abstract geometric shape (subtle, not overwhelming)
- **Interactive**: Responds to mouse movement (parallax effect)
- **Performance**: Optimized for mobile with reduced complexity

## Page-Specific Design

### Home
- **Hero**: Fullscreen 3D background (React Three Fiber) with centered text overlay "Empowering Skills, Creating Futures" + dual CTAs
- **Highlights Section**: 3-4 animated service preview cards in grid
- **Why Choose Us**: Neumorphic cards with icons and statistics
- **GSAP Reveals**: All sections animate on scroll

### About Us
- **Mission/Vision**: Large typography with glassmorphic cards
- **Timeline**: Animated horizontal/vertical timeline with GSAP
- **Team Showcase**: Glassmorphic cards with photos and roles

### Services
- **Grid Layout**: 2x2 or 3-column grid of service categories
- **Expandable Cards**: Framer Motion hover reveals more details
- **Icons**: Custom or library icons for each service type

### Products
- **Product Showcase**: Large imagery with animated descriptions
- **Feature Highlights**: Glassmorphic cards with product capabilities

### Insights (Blog)
- **Blog Grid**: Responsive masonry or standard grid
- **Card Structure**: Image, category tag, title, excerpt, read more
- **GSAP Entry**: Stagger animations on scroll

### Contact
- **Split Layout**: Form on left, contact info/map on right
- **Map Integration**: Embedded Google Map or 3D globe visualization
- **Form Validation**: Real-time with smooth error displays

## Glassmorphism Implementation
- Background: rgba(255,255,255,0.1-0.2) for light mode, rgba(0,0,0,0.2-0.3) for dark
- Backdrop-filter: blur(10-16px)
- Border: 1px solid rgba(255,255,255,0.2)
- Shadow: Soft, elevated

## Neumorphism Implementation
- Background: Same as container
- Box-shadow: Dual shadows (inset for depth)
  - Light: 4px 4px 12px rgba(0,0,0,0.1)
  - Dark: -4px -4px 12px rgba(255,255,255,0.05)
- Hover: Shadow intensity increases, slight lift

## Responsive Breakpoints
- Mobile: < 640px (single column, stacked)
- Tablet: 640-1024px (2-column grids)
- Desktop: 1024px+ (multi-column, full layouts)
- 3D elements scale down or simplify on mobile

## Accessibility
- Semantic HTML throughout
- ARIA labels for interactive elements
- Alt text for all images
- Keyboard navigation support
- Focus states visible and clear
- Color contrast meets WCAG AA standards

## Images
- **Company Logo**: Use provided logo in navbar and footer
- **Hero Section**: 3D React Three Fiber element (no static image)
- **Service Icons**: Use icon library (Heroicons or Font Awesome)
- **Team Photos**: Placeholder or actual team member photos in About Us
- **Blog Thumbnails**: Relevant imagery for each blog post card
- **Product Screenshots**: Visual representations of IT products/platforms

This design balances **premium aesthetics** with **professional functionality**, ensuring DLP Global Skillers Solutions appears as an innovative, trustworthy technology and training partner.