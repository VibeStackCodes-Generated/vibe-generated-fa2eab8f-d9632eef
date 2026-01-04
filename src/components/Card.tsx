import { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: 'elevated' | 'outlined' | 'flat'
  padding?: 'sm' | 'md' | 'lg'
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

/**
 * Card component for grouping related content
 * Supports elevated (shadow), outlined, and flat variants
 */
function Card({
  children,
  variant = 'elevated',
  padding = 'md',
  className = '',
  ...props
}: CardProps) {
  const paddingStyles = {
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
  }

  const variantStyles = {
    elevated: 'bg-white shadow-md border border-gray-200 dark:bg-gray-900 dark:border-gray-800',
    outlined: 'bg-white border-2 border-gray-200 dark:bg-gray-900 dark:border-gray-800',
    flat: 'bg-gray-50 dark:bg-gray-800',
  }

  return (
    <div
      className={`rounded-lg transition-shadow duration-200 ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

/**
 * Card header for title and top content
 */
function CardHeader({ children, className = '', ...props }: CardHeaderProps) {
  return (
    <div className={`border-b border-gray-200 pb-4 dark:border-gray-800 ${className}`} {...props}>
      {children}
    </div>
  )
}

/**
 * Card body for main content
 */
function CardBody({ children, className = '', ...props }: CardBodyProps) {
  return (
    <div className={`py-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

/**
 * Card footer for actions or additional content
 */
function CardFooter({ children, className = '', ...props }: CardFooterProps) {
  return (
    <div className={`border-t border-gray-200 pt-4 dark:border-gray-800 ${className}`} {...props}>
      {children}
    </div>
  )
}

export { Card, CardHeader, CardBody, CardFooter }
export type { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps }
