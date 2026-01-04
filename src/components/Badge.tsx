import { HTMLAttributes, ReactNode } from 'react'

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
type BadgeSize = 'sm' | 'md' | 'lg'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  variant?: BadgeVariant
  size?: BadgeSize
  dot?: boolean
}

/**
 * Badge component for displaying labels, tags, or status indicators
 * Supports multiple variants for different use cases
 */
function Badge({
  children,
  variant = 'primary',
  size = 'md',
  dot = false,
  className = '',
  ...props
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center gap-1.5 font-semibold rounded-full'

  const sizeStyles = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  }

  const variantStyles = {
    primary: 'bg-[#5200ff]/10 text-[#5200ff] dark:bg-[#5200ff]/20',
    secondary: 'bg-[#f5e942]/10 text-yellow-900 dark:text-yellow-100 dark:bg-[#f5e942]/20',
    success: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200',
    warning: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200',
    error: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200',
    info: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200',
  }

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {dot && (
        <span
          className={`h-2 w-2 rounded-full ${
            variant === 'primary'
              ? 'bg-[#5200ff]'
              : variant === 'secondary'
                ? 'bg-yellow-500'
                : variant === 'success'
                  ? 'bg-green-500'
                  : variant === 'warning'
                    ? 'bg-orange-500'
                    : variant === 'error'
                      ? 'bg-red-500'
                      : 'bg-blue-500'
          }`}
        />
      )}
      {children}
    </span>
  )
}

export { Badge }
export type { BadgeProps, BadgeVariant, BadgeSize }
