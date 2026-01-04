/**
 * UI COMPONENT LIBRARY - USAGE GUIDE
 *
 * This file documents all available UI components and their usage patterns.
 * For actual component implementations, see /src/components/
 *
 * ============================================================================
 * QUICK START
 * ============================================================================
 *
 * All components are exported from @/components and can be imported like:
 *
 *   import { Button, Card, Input, Modal, Badge, Alert, Spinner } from '@/components'
 *
 * ============================================================================
 * COMPONENTS OVERVIEW
 * ============================================================================
 *
 * 1. BUTTON - Flexible button with variants and sizes
 * 2. CARD - Container for grouping content with headers/footers
 * 3. INPUT - Form input with validation and helper text
 * 4. MODAL - Dialog component for user interactions
 * 5. BADGE - Label/tag component for status indicators
 * 6. ALERT - Notification component for messages
 * 7. SPINNER - Loading indicator
 *
 * ============================================================================
 * COMPONENT DETAILS
 * ============================================================================
 *
 * ──────────────────────────────────────────────────────────────────────────
 * 1. BUTTON COMPONENT
 * ──────────────────────────────────────────────────────────────────────────
 *
 * VARIANTS:
 *   - primary (default): #5200ff background, white text
 *   - secondary: #f5e942 background (accent color)
 *   - outline: Bordered style with primary color
 *   - ghost: Minimal style with hover background
 *   - danger: Red background for destructive actions
 *
 * SIZES:
 *   - sm: Small button (px-3 py-1.5 text-sm)
 *   - md: Medium button (px-4 py-2 text-base) - default
 *   - lg: Large button (px-6 py-3 text-lg)
 *
 * PROPS:
 *   - variant?: ButtonVariant - Style variant
 *   - size?: ButtonSize - Button size
 *   - isLoading?: boolean - Shows spinner, disables button
 *   - fullWidth?: boolean - 100% width
 *   - disabled?: boolean - Disabled state
 *   - All standard HTMLButtonElement attributes
 *
 * EXAMPLES:
 *
 *   // Basic button
 *   <Button onClick={handleClick}>Click me</Button>
 *
 *   // Primary button with size
 *   <Button variant="primary" size="lg">Large Primary</Button>
 *
 *   // Secondary button (accent color)
 *   <Button variant="secondary">Use Accent Color</Button>
 *
 *   // Outline button
 *   <Button variant="outline">Outlined Style</Button>
 *
 *   // Ghost button
 *   <Button variant="ghost">Subtle Style</Button>
 *
 *   // Danger button
 *   <Button variant="danger" onClick={handleDelete}>Delete Item</Button>
 *
 *   // Loading state
 *   <Button isLoading={isSubmitting}>
 *     {isSubmitting ? 'Saving...' : 'Save'}
 *   </Button>
 *
 *   // Full width
 *   <Button fullWidth>Full Width Button</Button>
 *
 * ──────────────────────────────────────────────────────────────────────────
 * 2. CARD COMPONENT
 * ──────────────────────────────────────────────────────────────────────────
 *
 * VARIANTS:
 *   - elevated (default): Shadow and border, prominent appearance
 *   - outlined: Clean border, minimal shadow
 *   - flat: Subtle background, no shadow
 *
 * PADDING:
 *   - sm: p-3 (small padding)
 *   - md: p-6 (medium padding) - default
 *   - lg: p-8 (large padding)
 *
 * SUBCOMPONENTS:
 *   - Card: Main container
 *   - CardHeader: Top section with border-bottom
 *   - CardBody: Main content area
 *   - CardFooter: Bottom section with border-top
 *
 * EXAMPLES:
 *
 *   // Basic card
 *   <Card>
 *     <h2>Card Title</h2>
 *     <p>Card content goes here</p>
 *   </Card>
 *
 *   // Card with structure
 *   <Card variant="elevated">
 *     <CardHeader>
 *       <h2>Title</h2>
 *     </CardHeader>
 *     <CardBody>
 *       <p>Main content</p>
 *     </CardBody>
 *     <CardFooter>
 *       <Button>Action</Button>
 *     </CardFooter>
 *   </Card>
 *
 *   // Outlined variant
 *   <Card variant="outlined" padding="lg">
 *     Content with large padding
 *   </Card>
 *
 *   // Flat variant
 *   <Card variant="flat">
 *     Minimal card style
 *   </Card>
 *
 * ──────────────────────────────────────────────────────────────────────────
 * 3. INPUT COMPONENT
 * ──────────────────────────────────────────────────────────────────────────
 *
 * VARIANTS:
 *   - outlined (default): Bordered style
 *   - filled: Filled background style
 *   - underline: Underline style, minimal appearance
 *
 * FEATURES:
 *   - Label support with focus styling
 *   - Error state with error message
 *   - Helper text for additional guidance
 *   - Icon support (left or right position)
 *   - Focus ring with brand color
 *   - Dark mode support
 *
 * PROPS:
 *   - label?: string - Input label
 *   - error?: string - Error message (shows in red)
 *   - helperText?: string - Helper text below input
 *   - icon?: ReactNode - Icon component
 *   - iconPosition?: 'left' | 'right' - Icon placement
 *   - variant?: 'outlined' | 'filled' | 'underline'
 *   - All standard HTMLInputElement attributes
 *
 * EXAMPLES:
 *
 *   // Basic input
 *   <Input placeholder="Enter text" />
 *
 *   // Input with label
 *   <Input label="Email Address" type="email" />
 *
 *   // Input with error
 *   <Input
 *     label="Username"
 *     error="Username is already taken"
 *   />
 *
 *   // Input with helper text
 *   <Input
 *     label="Password"
 *     type="password"
 *     helperText="Minimum 8 characters"
 *   />
 *
 *   // Filled variant
 *   <Input variant="filled" label="Name" />
 *
 *   // Underline variant
 *   <Input variant="underline" label="Phone" type="tel" />
 *
 *   // With icon
 *   <Input
 *     label="Search"
 *     icon={<SearchIcon />}
 *     iconPosition="left"
 *   />
 *
 * ──────────────────────────────────────────────────────────────────────────
 * 4. MODAL COMPONENT
 * ──────────────────────────────────────────────────────────────────────────
 *
 * SIZES:
 *   - sm: max-w-sm (small modal)
 *   - md: max-w-md (medium modal) - default
 *   - lg: max-w-lg (large modal)
 *   - xl: max-w-xl (extra large modal)
 *
 * FEATURES:
 *   - Backdrop click to close (customizable)
 *   - Escape key to close (customizable)
 *   - Prevent body scroll when open
 *   - Built-in close button
 *   - Custom header, body, and footer
 *   - Rendered in portal (at document.body)
 *
 * PROPS:
 *   - isOpen: boolean - Control modal visibility
 *   - onClose: () => void - Close handler
 *   - title?: string - Modal title
 *   - children: ReactNode - Modal content
 *   - footer?: ReactNode - Footer content (usually buttons)
 *   - size?: 'sm' | 'md' | 'lg' | 'xl' - Modal size
 *   - closeOnBackdropClick?: boolean - Close when clicking backdrop (default: true)
 *   - closeOnEscapeKey?: boolean - Close on Escape key (default: true)
 *
 * EXAMPLES:
 *
 *   // Basic modal
 *   const [open, setOpen] = useState(false)
 *   <Modal isOpen={open} onClose={() => setOpen(false)}>
 *     Content here
 *   </Modal>
 *
 *   // Modal with title and footer
 *   <Modal
 *     isOpen={open}
 *     onClose={() => setOpen(false)}
 *     title="Confirm Action"
 *     footer={
 *       <div className="flex gap-2">
 *         <Button variant="outline" onClick={() => setOpen(false)}>
 *           Cancel
 *         </Button>
 *         <Button onClick={handleConfirm}>Confirm</Button>
 *       </div>
 *     }
 *   >
 *     Are you sure?
 *   </Modal>
 *
 *   // Large modal
 *   <Modal isOpen={open} onClose={handleClose} size="lg">
 *     <Card>Large form content</Card>
 *   </Modal>
 *
 *   // No backdrop click close
 *   <Modal
 *     isOpen={open}
 *     onClose={handleClose}
 *     closeOnBackdropClick={false}
 *   >
 *     Important content
 *   </Modal>
 *
 * ──────────────────────────────────────────────────────────────────────────
 * 5. BADGE COMPONENT
 * ──────────────────────────────────────────────────────────────────────────
 *
 * VARIANTS:
 *   - primary (default): #5200ff tinted background
 *   - secondary: #f5e942 tinted background (accent)
 *   - success: Green background for success states
 *   - warning: Orange background for warnings
 *   - error: Red background for errors
 *   - info: Blue background for information
 *
 * SIZES:
 *   - sm: px-2 py-1 text-xs
 *   - md: px-3 py-1.5 text-sm (default)
 *   - lg: px-4 py-2 text-base
 *
 * PROPS:
 *   - variant?: BadgeVariant - Color variant
 *   - size?: BadgeSize - Badge size
 *   - dot?: boolean - Show colored dot indicator
 *   - All standard HTMLSpanElement attributes
 *
 * EXAMPLES:
 *
 *   // Basic badge
 *   <Badge>New Feature</Badge>
 *
 *   // Different variants
 *   <Badge variant="primary">Primary</Badge>
 *   <Badge variant="success">Success</Badge>
 *   <Badge variant="error">Error</Badge>
 *
 *   // With dot indicator
 *   <Badge variant="success" dot>Active</Badge>
 *   <Badge variant="warning" dot>Pending</Badge>
 *
 *   // Different sizes
 *   <Badge size="sm">Small</Badge>
 *   <Badge size="lg">Large</Badge>
 *
 *   // Status indicator
 *   <div className="flex items-center gap-2">
 *     <span>User Status</span>
 *     <Badge variant="success" dot>Online</Badge>
 *   </div>
 *
 * ──────────────────────────────────────────────────────────────────────────
 * 6. ALERT COMPONENT
 * ──────────────────────────────────────────────────────────────────────────
 *
 * VARIANTS:
 *   - success: Green background with checkmark icon
 *   - info (default): Blue background with info icon
 *   - warning: Orange background with warning icon
 *   - error: Red background with error icon
 *
 * FEATURES:
 *   - Optional title
 *   - Dismissible (with close button)
 *   - Icon automatically rendered based on variant
 *   - Accessible ARIA labels
 *   - Dark mode support
 *
 * PROPS:
 *   - variant?: AlertVariant - Alert type
 *   - title?: string - Alert title
 *   - onClose?: () => void - Close handler
 *   - dismissible?: boolean - Show close button
 *   - children: ReactNode - Alert message content
 *   - All standard HTMLDivElement attributes
 *
 * EXAMPLES:
 *
 *   // Success alert
 *   <Alert variant="success">Operation completed!</Alert>
 *
 *   // With title
 *   <Alert variant="error" title="Error Occurred">
 *     Something went wrong. Please try again.
 *   </Alert>
 *
 *   // Dismissible alert
 *   const [show, setShow] = useState(true)
 *   <Alert
 *     variant="warning"
 *     title="Important Notice"
 *     dismissible
 *     onClose={() => setShow(false)}
 *   >
 *     Please review this information.
 *   </Alert>
 *
 *   // Info alert
 *   <Alert variant="info">
 *     This is informational content for the user.
 *   </Alert>
 *
 * ──────────────────────────────────────────────────────────────────────────
 * 7. SPINNER COMPONENT
 * ──────────────────────────────────────────────────────────────────────────
 *
 * SIZES:
 *   - sm: h-4 w-4 (small)
 *   - md: h-8 w-8 (medium) - default
 *   - lg: h-12 w-12 (large)
 *
 * COLORS:
 *   - primary (default): #5200ff
 *   - secondary: #f5e942 (accent)
 *   - white: White (for dark backgrounds)
 *
 * PROPS:
 *   - size?: SpinnerSize - Spinner size
 *   - color?: 'primary' | 'secondary' | 'white' - Spinner color
 *   - All standard HTMLDivElement attributes
 *
 * EXAMPLES:
 *
 *   // Basic spinner
 *   <Spinner />
 *
 *   // Loading state in button
 *   <Button isLoading={isLoading}>
 *     {isLoading ? 'Loading...' : 'Submit'}
 *   </Button>
 *
 *   // Different sizes
 *   <Spinner size="sm" />
 *   <Spinner size="md" />
 *   <Spinner size="lg" />
 *
 *   // Different colors
 *   <Spinner color="primary" />
 *   <Spinner color="secondary" />
 *   <Spinner color="white" />
 *
 *   // Loading overlay
 *   {isLoading && (
 *     <div className="flex items-center justify-center">
 *       <Spinner size="lg" />
 *     </div>
 *   )}
 *
 * ============================================================================
 * STYLING & CUSTOMIZATION
 * ============================================================================
 *
 * All components use Tailwind CSS for styling and support the following:
 *
 * 1. BRAND COLORS:
 *    - Primary: #5200ff (used for main actions)
 *    - Accent: #f5e942 (used for secondary actions)
 *    - Apply using inline color values: bg-[#5200ff], text-[#5200ff]
 *
 * 2. DARK MODE:
 *    - All components support dark mode via Tailwind's dark: prefix
 *    - Classes automatically apply based on system/user preference
 *
 * 3. RESPONSIVE DESIGN:
 *    - All components are mobile-friendly by default
 *    - Use Tailwind responsive prefixes: sm:, md:, lg:, xl:
 *
 * 4. CUSTOM STYLING:
 *    - Most components accept className prop for additional styles
 *    - Combine with Tailwind utilities for customization
 *
 * ============================================================================
 * ACCESSIBILITY
 * ============================================================================
 *
 * All components follow WCAG 2.1 guidelines:
 *
 * - Proper ARIA labels and roles
 * - Keyboard navigation support
 * - Focus indicators with sufficient contrast
 * - Semantic HTML elements
 * - Color not sole means of communication
 * - Screen reader friendly
 *
 * ============================================================================
 * BEST PRACTICES
 * ============================================================================
 *
 * 1. Use semantic variant names:
 *    - primary for main actions
 *    - secondary for secondary actions
 *    - outline for tertiary actions
 *    - danger for destructive actions
 *
 * 2. Keep modal content focused:
 *    - Use for critical decisions or important forms
 *    - Avoid excessive scrolling
 *    - Provide clear action buttons
 *
 * 3. Input validation:
 *    - Show errors immediately on blur
 *    - Provide helpful error messages
 *    - Use helper text for guidance
 *
 * 4. Loading states:
 *    - Always show feedback during async operations
 *    - Disable interactions while loading
 *    - Provide success/error feedback after completion
 *
 * 5. Alerts and notifications:
 *    - Use appropriate variants for context
 *    - Keep messages concise and actionable
 *    - Auto-dismiss non-critical alerts
 *
 * ============================================================================
 * COMPONENT SHOWCASE
 * ============================================================================
 *
 * View all components in action at:
 *   /src/pages/ComponentShowcase.tsx
 *
 * Or run the development server and visit the home page to see
 * interactive examples of all components.
 *
 * ============================================================================
 * TYPE DEFINITIONS
 * ============================================================================
 *
 * All components are fully typed with TypeScript. Import types like:
 *
 *   import type { ButtonProps, ButtonVariant } from '@/components'
 *   import type { InputProps } from '@/components'
 *   import type { ModalProps } from '@/components'
 *   import type { CardProps } from '@/components'
 *   import type { BadgeProps, BadgeVariant } from '@/components'
 *   import type { AlertProps, AlertVariant } from '@/components'
 *   import type { SpinnerProps } from '@/components'
 *
 * ============================================================================
 */

// This file serves as documentation. All types are re-exported from the
// components themselves. This is a compilation of usage examples and guidelines.

export const COMPONENT_LIBRARY_VERSION = '1.0.0'

// Export metadata for type safety
export const BRAND_COLORS = {
  PRIMARY: '#5200ff',
  ACCENT: '#f5e942',
}

export const BUTTON_VARIANTS = ['primary', 'secondary', 'outline', 'ghost', 'danger'] as const
export const BUTTON_SIZES = ['sm', 'md', 'lg'] as const

export const CARD_VARIANTS = ['elevated', 'outlined', 'flat'] as const
export const CARD_PADDING = ['sm', 'md', 'lg'] as const

export const INPUT_VARIANTS = ['outlined', 'filled', 'underline'] as const

export const MODAL_SIZES = ['sm', 'md', 'lg', 'xl'] as const

export const BADGE_VARIANTS = [
  'primary',
  'secondary',
  'success',
  'warning',
  'error',
  'info',
] as const
export const BADGE_SIZES = ['sm', 'md', 'lg'] as const

export const ALERT_VARIANTS = ['success', 'warning', 'error', 'info'] as const

export const SPINNER_SIZES = ['sm', 'md', 'lg'] as const
export const SPINNER_COLORS = ['primary', 'secondary', 'white'] as const
