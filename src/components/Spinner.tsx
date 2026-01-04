import { HTMLAttributes } from 'react'

type SpinnerSize = 'sm' | 'md' | 'lg'

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize
  color?: 'primary' | 'secondary' | 'white'
}

/**
 * Spinner component for loading states
 * Supports multiple sizes and colors
 */
function Spinner({ size = 'md', color = 'primary', className = '', ...props }: SpinnerProps) {
  const sizeStyles = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-3',
    lg: 'h-12 w-12 border-4',
  }

  const colorStyles = {
    primary: 'border-[#5200ff] border-t-[#5200ff]/30',
    secondary: 'border-[#f5e942] border-t-[#f5e942]/30',
    white: 'border-white border-t-white/30',
  }

  return (
    <div
      className={`inline-block ${sizeStyles[size]} rounded-full border-solid animate-spin ${colorStyles[color]} ${className}`}
      role="status"
      aria-label="Loading"
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export { Spinner }
export type { SpinnerProps, SpinnerSize }
