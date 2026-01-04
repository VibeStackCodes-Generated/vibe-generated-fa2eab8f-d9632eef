import { ButtonHTMLAttributes, forwardRef } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  fullWidth?: boolean
}

/**
 * Reusable Button component with multiple variants and sizes
 * Supports primary (#5200ff), secondary, outline, ghost, and danger states
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      fullWidth = false,
      disabled,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95'

    // Mobile-first sizing with responsive adjustments
    const sizeStyles = {
      sm: 'px-3 py-2 text-sm min-h-9 sm:min-h-8 sm:px-3 sm:py-1.5',
      md: 'px-4 py-2.5 text-sm min-h-10 sm:min-h-10 sm:px-4 sm:py-2 sm:text-base',
      lg: 'px-5 py-3 text-base min-h-11 sm:min-h-11 sm:px-6 sm:py-3 sm:text-lg',
    }

    const variantStyles = {
      primary: 'bg-[#5200ff] text-white hover:bg-[#4000cc] focus:ring-[#5200ff]',
      secondary: 'bg-[#f5e942] text-gray-900 hover:bg-[#e5d932] focus:ring-[#f5e942]',
      outline:
        'border-2 border-[#5200ff] text-[#5200ff] hover:bg-[#5200ff] hover:text-white focus:ring-[#5200ff]',
      ghost:
        'text-[#5200ff] hover:bg-[#5200ff]/10 focus:ring-[#5200ff]',
      danger:
        'bg-red-600 text-white hover:bg-red-700 focus:ring-red-600',
    }

    const widthStyle = fullWidth ? 'w-full' : ''

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="mr-2 h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          children
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
export type { ButtonProps, ButtonVariant, ButtonSize }
