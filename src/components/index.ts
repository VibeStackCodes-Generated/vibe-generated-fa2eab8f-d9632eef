/**
 * UI Component Library - Central Export
 *
 * This module exports all reusable UI components for the application.
 * Each component is built with TypeScript, accessibility, and Tailwind CSS in mind.
 *
 * ## Core Components
 * - Button: Flexible button with multiple variants (primary, secondary, outline, ghost, danger) and sizes
 * - Card: Container component with variants (elevated, outlined, flat) and subcomponents
 * - Input: Form input with labels, errors, helper text, and multiple variants
 * - Modal: Dialog component with customizable size and backdrop behavior
 *
 * ## Additional Components
 * - Badge: Label/tag component with multiple variants and sizes
 * - Alert: Notification/message component with success, warning, error, and info variants
 * - Spinner: Loading indicator with customizable size and color
 *
 * ## Usage Examples
 *
 * Button:
 * ```tsx
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 *
 * Card:
 * ```tsx
 * <Card variant="elevated">
 *   <CardHeader><h2>Title</h2></CardHeader>
 *   <CardBody>Content here</CardBody>
 *   <CardFooter><Button>Action</Button></CardFooter>
 * </Card>
 * ```
 *
 * Input:
 * ```tsx
 * <Input
 *   label="Email"
 *   type="email"
 *   error={email ? undefined : 'Email is required'}
 *   placeholder="you@example.com"
 * />
 * ```
 *
 * Modal:
 * ```tsx
 * <Modal isOpen={open} onClose={() => setOpen(false)} title="Confirm">
 *   Are you sure?
 * </Modal>
 * ```
 *
 * Badge:
 * ```tsx
 * <Badge variant="success" dot>New</Badge>
 * ```
 *
 * Alert:
 * ```tsx
 * <Alert variant="error" title="Error" dismissible onClose={handleClose}>
 *   Something went wrong
 * </Alert>
 * ```
 *
 * Spinner:
 * ```tsx
 * <Spinner size="md" color="primary" />
 * ```
 *
 * ## Brand Colors
 * - Primary: #5200ff
 * - Accent: #f5e942
 * - Font Family: Inter
 *
 * All components follow accessibility standards (WCAG) and are fully responsive.
 */

// Core Components
export { Button } from './Button'
export type { ButtonProps, ButtonVariant, ButtonSize } from './Button'

export { Card, CardHeader, CardBody, CardFooter } from './Card'
export type { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps } from './Card'

export { Input } from './Input'
export type { InputProps } from './Input'

export { Modal } from './Modal'
export type { ModalProps } from './Modal'

// Additional Components
export { Badge } from './Badge'
export type { BadgeProps, BadgeVariant, BadgeSize } from './Badge'

export { Alert } from './Alert'
export type { AlertProps, AlertVariant } from './Alert'

export { Spinner } from './Spinner'
export type { SpinnerProps, SpinnerSize } from './Spinner'

// Layout/Utility Components
export { ErrorBoundary } from './error-boundary'
export { VibeStackBadge } from './vibestack-badge'
