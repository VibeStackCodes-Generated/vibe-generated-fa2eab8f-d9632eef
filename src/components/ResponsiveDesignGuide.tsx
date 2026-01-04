/**
 * Responsive Design Guide & Best Practices
 *
 * This document outlines the mobile-first responsive design patterns used throughout the application.
 * All components follow a mobile-first approach with progressive enhancement for larger screens.
 *
 * Brand Colors & Typography:
 * - Primary Color: #5200ff (purple)
 * - Accent Color: #f5e942 (yellow)
 * - Font Family: Inter
 * - Base Font Size: 16px
 *
 * Tailwind Breakpoints (Mobile-First):
 * - base (0px): Default mobile styles
 * - sm (640px): Small devices (tablets)
 * - md (768px): Medium devices (large tablets)
 * - lg (1024px): Large devices (desktops)
 * - xl (1280px): Extra large devices
 * - 2xl (1536px): Ultra-large screens
 */

/**
 * RESPONSIVE TYPOGRAPHY PATTERN
 *
 * Mobile: Smaller text sizes for readability and touch-friendly interface
 * Tablet (sm): Gradual increase
 * Desktop (md+): Full size with proper hierarchy
 *
 * Example:
 * - H1: text-2xl (mobile) → text-3xl (sm) → text-4xl (md) → text-5xl (lg)
 * - Paragraph: text-sm (mobile) → text-base (sm+)
 */
export const typographyExample = `
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
  Main Title
</h1>

<p className="text-sm sm:text-base md:text-lg">
  Paragraph text scales appropriately for all screens
</p>
`;

/**
 * RESPONSIVE SPACING PATTERN
 *
 * Padding and gaps scale with viewport size:
 * - Mobile: Compact spacing (px-4)
 * - Tablet (sm): Medium spacing (px-6)
 * - Desktop (md+): Generous spacing (px-8)
 *
 * Example: Container with responsive padding
 */
export const spacingExample = `
<div className="px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-12">
  Content with responsive padding
</div>
`;

/**
 * RESPONSIVE GRID PATTERN
 *
 * Grids stack on mobile, expand on larger screens:
 * - Mobile: 1 column (full width)
 * - Tablet (sm): 2 columns
 * - Desktop (md): 3+ columns
 *
 * Use the ResponsiveGrid component or Tailwind utilities
 */
export const gridExample = `
// Using ResponsiveGrid component (Recommended)
<ResponsiveGrid columns={3} gap="md">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</ResponsiveGrid>

// Using Tailwind utilities
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</div>
`;

/**
 * RESPONSIVE FLEX PATTERN
 *
 * Flex containers stack on mobile, arrange horizontally on larger screens:
 * - Mobile: Vertical (flex-col)
 * - Tablet+ (sm): Horizontal (sm:flex-row)
 * - With wrapping enabled by default
 *
 * Touch targets: Minimum 44x44px on mobile
 */
export const flexExample = `
// Button group - stacks on mobile, rows on tablet+
<div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
  <Button>Action 1</Button>
  <Button>Action 2</Button>
  <Button>Action 3</Button>
</div>

// Using flex-responsive utility
<div className="flex-responsive">
  {/* Stacks on mobile, wraps horizontally on sm+ */}
</div>
`;

/**
 * RESPONSIVE FORM PATTERN
 *
 * Forms use responsive spacing with mobile-first touch-friendly sizing:
 * - Input height: 44px+ on mobile (py-3) → reduced on desktop (sm:py-2)
 * - Label sizing: text-xs on mobile → text-sm on sm+
 * - Use form-spacing utility for consistent gaps
 */
export const formExample = `
<form className="form-spacing">
  <Input
    label="Full Name"
    placeholder="Enter your name"
  />
  <Input
    label="Email Address"
    type="email"
    placeholder="you@example.com"
  />
  <Button fullWidth>Submit</Button>
</form>

// form-spacing automatically provides:
// - space-y-4 on mobile
// - space-y-5 on sm
// - space-y-6 on md+
`;

/**
 * RESPONSIVE CONTAINER PATTERN
 *
 * Main content container with:
 * - Responsive padding based on screen size
 * - Max-width constraints for readability
 * - Centered alignment
 *
 * The ResponsiveContainer component handles this automatically
 */
export const containerExample = `
<ResponsiveContainer maxWidth="lg">
  {/* Automatically applies:
      - px-4 (mobile)
      - px-6 (sm)
      - px-8 max-w-6xl (md)
      - px-8 max-w-7xl (lg)
  */}
  <h1>Page Title</h1>
  <p>Content here</p>
</ResponsiveContainer>
`;

/**
 * TOUCH TARGET SIZES
 *
 * Mobile accessibility guidelines recommend minimum 44x44px touch targets.
 * This ensures usability on touch devices.
 *
 * Button sizing:
 * - sm: min-h-9 (mobile) → min-h-8 (sm)
 * - md: min-h-10 (mobile) → min-h-10 (sm)
 * - lg: min-h-11 (mobile) → min-h-11 (sm)
 *
 * Input sizing:
 * - py-3 (mobile, 44px+) → py-2 (sm)
 */
export const touchTargetExample = `
// Buttons automatically have large touch targets on mobile
<Button size="md">
  {/* 44px+ height on mobile, standard height on tablet+ */}
</Button>

// Inputs have larger padding on mobile for easy interaction
<Input label="Email" />
{/* py-3 on mobile (44px+) → py-2 on sm */}
`;

/**
 * RESPONSIVE TEXT ALIGNMENT
 *
 * Text alignment can change based on screen size
 * - Mobile: Left-aligned for readability
 * - Desktop: Can be centered or adjusted as needed
 */
export const textAlignmentExample = `
<h1 className="text-left md:text-center">
  Left-aligned on mobile, centered on desktop
</h1>

// Using text-responsive-center utility
<div className="text-responsive-center">
  Left on mobile, centered on md+
</div>
`;

/**
 * RESPONSIVE VISIBILITY PATTERNS
 *
 * Show/hide content based on screen size
 */
export const visibilityExample = `
// Show only on mobile
<div className="mobile-only">Mobile navigation</div>

// Hide on mobile, show on tablet+
<div className="tablet-up">Desktop navigation</div>

// Show only on desktop
<div className="desktop-only">Desktop-only features</div>
`;

/**
 * RESPONSIVE IMAGE PATTERN
 *
 * Images scale responsively with the container
 */
export const imageExample = `
<img
  src="image.jpg"
  alt="Description"
  className="w-full h-auto rounded-lg"
/>

// With aspect ratio
<div className="aspect-video-responsive">
  <iframe title="Video" src="..." className="w-full h-full" />
</div>
`;

/**
 * RESPONSIVE NAVIGATION PATTERN
 *
 * Navigation adapts for different screen sizes
 */
export const navigationExample = `
<nav className="sticky top-0 bg-white dark:bg-gray-900">
  <div className="container-responsive">
    <div className="flex items-center justify-between py-4">
      <div className="text-xl font-bold">Logo</div>

      {/* Mobile menu button - hidden on tablet+ */}
      <button className="mobile-only">Menu</button>

      {/* Desktop navigation - hidden on mobile */}
      <div className="tablet-up flex gap-4">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </div>
</nav>
`;

/**
 * RESPONSIVE SECTION PATTERN
 *
 * Use ResponsiveSection for consistent section styling with responsive spacing
 */
export const sectionExample = `
<ResponsiveSection title="Features" subtitle="What we offer">
  <ResponsiveGrid columns={3} gap="lg">
    <Card>Feature 1</Card>
    <Card>Feature 2</Card>
    <Card>Feature 3</Card>
  </ResponsiveGrid>
</ResponsiveSection>
`;

/**
 * RESPONSIVE MODAL PATTERN
 *
 * Modals scale with viewport and are full-width on mobile
 */
export const modalExample = `
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="Dialog Title"
  className="w-full sm:w-96 md:w-[28rem]"
>
  <p>Modal content that adapts to screen size</p>
</Modal>
`;

/**
 * CUSTOM RESPONSIVE UTILITY CLASSES
 *
 * Available Tailwind-based utilities:
 *
 * Layout:
 * - container-responsive: Responsive container with padding and max-width
 * - grid-responsive-2: 1 col mobile → 2 cols on sm, 3 cols on md
 * - grid-responsive-3: 1 col mobile → 2 cols on sm, 3 cols on md
 * - grid-responsive-4: 1 col mobile → 2 cols on sm, 4 cols on lg
 * - flex-responsive: Flex col on mobile → flex row on sm with wrap
 * - section-spacing: Responsive section padding
 * - gap-responsive: Responsive gap (3 → 4 → 6)
 * - form-spacing: Form vertical spacing
 *
 * Typography:
 * - text-responsive-title: Scales from text-xl → text-3xl
 * - h1-6: Responsive heading sizes
 *
 * Components:
 * - card-responsive: Responsive card padding
 * - header-responsive: Responsive header spacing
 *
 * Visibility:
 * - mobile-only: Display on mobile only
 * - tablet-up: Hide on mobile, show on sm+
 * - desktop-only: Show on md+ only
 * - text-responsive-center: Left-align on mobile, center on md+
 *
 * Accessibility:
 * - button-touch: Touch-friendly button sizing
 */

/**
 * DARK MODE SUPPORT
 *
 * All responsive styles include dark mode variants
 */
export const darkModeExample = `
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Content adapts to light/dark mode
</div>
`;

/**
 * ACCESSIBILITY CONSIDERATIONS
 *
 * 1. Touch Target Size: Minimum 44x44px on mobile
 * 2. Text Readability: Comfortable line lengths and font sizes
 * 3. Color Contrast: Sufficient contrast in light and dark modes
 * 4. Focus States: Clear keyboard navigation with visible focus rings
 * 5. Semantic HTML: Proper heading hierarchy and ARIA labels
 * 6. Viewport Meta Tag: Ensures proper scaling on mobile
 */

// This file serves as documentation and examples.
// Components can reference these patterns for consistency.
