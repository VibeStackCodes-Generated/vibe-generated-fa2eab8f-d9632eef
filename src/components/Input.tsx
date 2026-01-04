import { InputHTMLAttributes, forwardRef, useState, ReactNode } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  variant?: 'outlined' | 'filled' | 'underline'
}

/**
 * Reusable Input component with label, error, and helper text support
 * Supports multiple variants and optional icons
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      icon,
      iconPosition = 'left',
      variant = 'outlined',
      disabled,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false)

    const inputId = id || `input-${Math.random().toString(36).slice(2, 9)}`

    const baseStyles =
      'w-full px-4 py-2 font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed'

    const variantStyles = {
      outlined: `border-2 rounded-lg ${
        error
          ? 'border-red-500 focus:border-red-600 focus:ring-red-500/20'
          : 'border-gray-300 focus:border-[#5200ff] focus:ring-[#5200ff]/20 dark:border-gray-700'
      } focus:ring-2`,
      filled: `rounded-lg bg-gray-100 dark:bg-gray-800 ${
        error
          ? 'border-b-2 border-red-500 focus:border-red-600'
          : 'border-b-2 border-gray-300 focus:border-[#5200ff] dark:border-gray-700'
      }`,
      underline: `border-b-2 bg-transparent ${
        error
          ? 'border-red-500 focus:border-red-600'
          : 'border-gray-300 focus:border-[#5200ff] dark:border-gray-700'
      }`,
    }

    const containerStyle = icon && variant === 'outlined' ? 'relative' : ''
    const iconStyle = icon
      ? iconPosition === 'left'
        ? 'pl-10'
        : 'pr-10'
      : ''

    return (
      <div className={containerStyle}>
        {label && (
          <label
            htmlFor={inputId}
            className={`mb-2 block text-sm font-medium transition-colors ${
              isFocused ? 'text-[#5200ff]' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            {label}
          </label>
        )}

        <div className="relative">
          {icon && (
            <div
              className={`absolute top-1/2 -translate-y-1/2 text-gray-500 ${
                iconPosition === 'left' ? 'left-3' : 'right-3'
              }`}
            >
              {icon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`${baseStyles} ${variantStyles[variant]} ${iconStyle} ${className}`}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : undefined}
            {...props}
          />
        </div>

        {error && (
          <p id={`${inputId}-error`} className="mt-1 text-sm text-red-600 dark:text-red-400">
            {error}
          </p>
        )}

        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{helperText}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
export type { InputProps }
