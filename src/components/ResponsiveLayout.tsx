import { ReactNode, HTMLAttributes } from 'react'

/**
 * Responsive Layout Components
 * Mobile-first design with proper breakpoint scaling
 */

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

/**
 * ResponsiveContainer - Mobile-first container with responsive padding and max-width
 */
function ResponsiveContainer({
  children,
  maxWidth = 'lg',
  className = '',
  ...props
}: ContainerProps) {
  const maxWidthStyles = {
    sm: 'sm:max-w-sm',
    md: 'md:max-w-md',
    lg: 'md:max-w-lg lg:max-w-3xl',
    xl: 'lg:max-w-4xl xl:max-w-5xl',
    '2xl': 'xl:max-w-6xl 2xl:max-w-7xl',
  }

  return (
    <div
      className={`container-responsive ${maxWidthStyles[maxWidth]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

interface ResponsiveGridProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  columns?: 2 | 3 | 4
  gap?: 'sm' | 'md' | 'lg'
}

/**
 * ResponsiveGrid - Mobile-first grid that stacks on mobile
 * Default: 1 column on mobile, scales to 2/3/4 columns on larger screens
 */
function ResponsiveGrid({
  children,
  columns = 3,
  gap = 'md',
  className = '',
  ...props
}: ResponsiveGridProps) {
  const columnClass = {
    2: 'grid-responsive-2',
    3: 'grid-responsive-3',
    4: 'grid-responsive-4',
  }[columns]

  const gapClass = {
    sm: 'gap-3 sm:gap-4 md:gap-4',
    md: 'gap-4 sm:gap-5 md:gap-6',
    lg: 'gap-5 sm:gap-6 md:gap-8',
  }[gap]

  return (
    <div className={`${columnClass} ${gapClass} ${className}`} {...props}>
      {children}
    </div>
  )
}

interface ResponsiveFlexProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  gap?: 'sm' | 'md' | 'lg'
  direction?: 'row' | 'col'
  justify?: 'start' | 'center' | 'between' | 'end'
  align?: 'start' | 'center' | 'end' | 'stretch'
  wrap?: boolean
}

/**
 * ResponsiveFlex - Mobile-first flex container
 * On mobile: stacks vertically
 * On tablet and up: arranges horizontally with wrapping
 */
function ResponsiveFlex({
  children,
  gap = 'md',
  direction = 'row',
  justify = 'start',
  align = 'center',
  wrap = true,
  className = '',
  ...props
}: ResponsiveFlexProps) {
  const gapClass = {
    sm: 'gap-2 sm:gap-3',
    md: 'gap-3 sm:gap-4 md:gap-6',
    lg: 'gap-4 sm:gap-6 md:gap-8',
  }[gap]

  const directionClass = direction === 'col' ? 'flex-col sm:flex-row' : 'flex-col sm:flex-row'

  const justifyClass = {
    start: 'justify-start',
    center: 'justify-center',
    between: 'justify-between',
    end: 'justify-end',
  }[justify]

  const alignClass = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  }[align]

  const wrapClass = wrap ? 'flex-wrap' : 'flex-nowrap'

  return (
    <div
      className={`flex ${directionClass} ${gapClass} ${justifyClass} ${alignClass} ${wrapClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

interface ResponsiveSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  title?: string
  subtitle?: string
}

/**
 * ResponsiveSection - Mobile-first section with responsive spacing
 */
function ResponsiveSection({
  children,
  title,
  subtitle,
  className = '',
  ...props
}: ResponsiveSectionProps) {
  return (
    <section className={`section-spacing ${className}`} {...props}>
      {title && (
        <div className="header-responsive">
          <h2 className="text-responsive-title">{title}</h2>
          {subtitle && <p className="mt-2 text-gray-600 dark:text-gray-400">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  )
}

interface ResponsiveHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children: ReactNode
}

/**
 * ResponsiveHeading - Mobile-first heading that scales with viewport
 */
function ResponsiveHeading({
  level = 2,
  children,
  className = '',
  ...props
}: ResponsiveHeadingProps) {
  const Tag = `h${level}` as const
  const responsiveClass = 'text-responsive-title'

  return (
    <Tag className={`${responsiveClass} ${className}`} {...props}>
      {children}
    </Tag>
  )
}

interface ResponsiveStackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  spacing?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

/**
 * ResponsiveStack - Vertical stack with responsive spacing
 */
function ResponsiveStack({
  children,
  spacing = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ResponsiveStackProps) {
  const spacingClass = {
    sm: 'space-y-2 sm:space-y-3 md:space-y-4',
    md: 'space-y-3 sm:space-y-4 md:space-y-6',
    lg: 'space-y-4 sm:space-y-6 md:space-y-8',
  }[spacing]

  const widthClass = fullWidth ? 'w-full' : ''

  return (
    <div className={`flex flex-col ${spacingClass} ${widthClass} ${className}`} {...props}>
      {children}
    </div>
  )
}

export {
  ResponsiveContainer,
  ResponsiveGrid,
  ResponsiveFlex,
  ResponsiveSection,
  ResponsiveHeading,
  ResponsiveStack,
}
export type {
  ContainerProps,
  ResponsiveGridProps,
  ResponsiveFlexProps,
  ResponsiveSectionProps,
  ResponsiveHeadingProps,
  ResponsiveStackProps,
}
