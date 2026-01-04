/**
 * Responsive Design Utilities
 *
 * Helper functions and constants for mobile-first responsive design
 */

/**
 * Tailwind Breakpoints used throughout the application
 * All breakpoints follow a mobile-first approach
 */
export const breakpoints = {
  /** Base/Mobile: 0px */
  base: 0,
  /** Small (tablets): 640px */
  sm: 640,
  /** Medium (large tablets): 768px */
  md: 768,
  /** Large (desktops): 1024px */
  lg: 1024,
  /** Extra Large: 1280px */
  xl: 1280,
  /** 2XL (ultra-wide): 1536px */
  '2xl': 1536,
} as const

/**
 * Brand colors used throughout the application
 */
export const colors = {
  primary: '#5200ff',
  accent: '#f5e942',
} as const

/**
 * Font family configuration
 */
export const fontFamily = 'Inter, system-ui, -apple-system, sans-serif'

/**
 * Responsive typography scale
 * Provides consistent font sizes across breakpoints
 */
export const typographyScale = {
  h1: {
    mobile: 'text-2xl',
    sm: 'sm:text-3xl',
    md: 'md:text-4xl',
    lg: 'lg:text-5xl',
  },
  h2: {
    mobile: 'text-xl',
    sm: 'sm:text-2xl',
    md: 'md:text-3xl',
    lg: 'lg:text-4xl',
  },
  h3: {
    mobile: 'text-lg',
    sm: 'sm:text-xl',
    md: 'md:text-2xl',
    lg: 'lg:text-3xl',
  },
  h4: {
    mobile: 'text-base',
    sm: 'sm:text-lg',
    md: 'md:text-xl',
  },
  h5: {
    mobile: 'text-sm',
    sm: 'sm:text-base',
  },
  h6: {
    mobile: 'text-xs',
    sm: 'sm:text-sm',
  },
  body: {
    mobile: 'text-sm',
    sm: 'sm:text-base',
  },
  small: {
    mobile: 'text-xs',
  },
} as const

/**
 * Responsive spacing scale
 */
export const spacingScale = {
  tight: 'gap-2 sm:gap-3',
  normal: 'gap-3 sm:gap-4 md:gap-6',
  loose: 'gap-4 sm:gap-6 md:gap-8',
} as const

/**
 * Responsive padding utilities
 */
export const paddingScale = {
  container: 'px-4 sm:px-6 md:px-8',
  section: 'py-6 px-4 sm:py-8 sm:px-6 md:py-12 md:px-8',
  card: 'p-4 sm:p-5 md:p-6 lg:p-8',
} as const

/**
 * Media query helper for breakpoints
 */
export function mediaQuery(breakpoint: keyof typeof breakpoints): string {
  return `@media (min-width: ${breakpoints[breakpoint]}px)`
}

/**
 * Check if window width matches a breakpoint
 * Useful for client-side responsive behavior
 */
export function useResponsiveBreakpoint(
  breakpoint: keyof typeof breakpoints
): boolean {
  if (typeof window === 'undefined') return false

  const width = window.innerWidth
  return width >= breakpoints[breakpoint]
}

/**
 * Combine Tailwind classes with proper responsive prefixes
 * Useful for dynamic class building
 */
export function buildResponsiveClasses(
  base: string,
  responsive: Partial<Record<keyof typeof breakpoints, string>>
): string {
  const classes = [base]

  if (responsive.sm) classes.push(`sm:${responsive.sm}`)
  if (responsive.md) classes.push(`md:${responsive.md}`)
  if (responsive.lg) classes.push(`lg:${responsive.lg}`)
  if (responsive.xl) classes.push(`xl:${responsive.xl}`)
  if (responsive['2xl']) classes.push(`2xl:${responsive['2xl']}`)

  return classes.join(' ')
}

/**
 * Responsive grid column helper
 */
export function getGridColumns(
  mobileColumns: number,
  tabletColumns?: number,
  desktopColumns?: number
): string {
  const classes = [`grid-cols-${mobileColumns}`]

  if (tabletColumns) classes.push(`sm:grid-cols-${tabletColumns}`)
  if (desktopColumns) classes.push(`md:grid-cols-${desktopColumns}`)

  return classes.join(' ')
}

/**
 * Touch target size constant
 * WCAG recommends minimum 44x44px for touch targets
 */
export const TOUCH_TARGET_SIZE = 44 // pixels

/**
 * Common responsive patterns
 */
export const patterns = {
  /**
   * Mobile-first button group
   * Stacks vertically on mobile, horizontally on tablet+
   */
  buttonGroup:
    'flex flex-col gap-2 sm:flex-row sm:gap-3',

  /**
   * Responsive grid that stacks on mobile
   */
  responsiveGrid2Col:
    'grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6',

  responsiveGrid3Col:
    'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6',

  responsiveGrid4Col:
    'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6',

  /**
   * Responsive container with max-width
   */
  container:
    'w-full px-4 mx-auto sm:px-6 md:px-8 md:max-w-6xl lg:max-w-7xl',

  /**
   * Responsive section spacing
   */
  section:
    'py-6 px-4 sm:py-8 sm:px-6 md:py-12 md:px-8',

  /**
   * Responsive form spacing
   */
  form: 'space-y-4 sm:space-y-5 md:space-y-6',
} as const

/**
 * Media query conditions for CSS-in-JS or conditional rendering
 */
export const mediaConditions = {
  isTablet: `(min-width: ${breakpoints.sm}px)`,
  isDesktop: `(min-width: ${breakpoints.md}px)`,
  isLargeScreen: `(min-width: ${breakpoints.lg}px)`,
  isXtraLarge: `(min-width: ${breakpoints.xl}px)`,
  isUltraWide: `(min-width: ${breakpoints['2xl']}px)`,
} as const

/**
 * Visibility classes for responsive content
 */
export const visibility = {
  /** Show only on mobile */
  mobileOnly: 'block sm:hidden',
  /** Hide on mobile, show on tablet+ */
  tabletUp: 'hidden sm:block',
  /** Show only on desktop and above */
  desktopOnly: 'hidden md:block',
  /** Show on tablet and above */
  notMobile: 'hidden sm:block',
} as const

export default {
  breakpoints,
  colors,
  fontFamily,
  typographyScale,
  spacingScale,
  paddingScale,
  patterns,
  mediaConditions,
  visibility,
  TOUCH_TARGET_SIZE,
  mediaQuery,
  useResponsiveBreakpoint,
  buildResponsiveClasses,
  getGridColumns,
}
