import { useState } from 'react'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Modal,
  Badge,
  Alert,
  Spinner,
} from '@/components'

/**
 * Component showcase page demonstrating all UI components
 * Displays examples of Button, Card, Input, Modal, Badge, Alert, and Spinner components
 */
export function ComponentShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      alert('Form submitted: ' + JSON.stringify(formData))
      setFormData({ name: '', email: '', message: '' })
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 dark:from-gray-950 dark:to-gray-900">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            UI Component Library
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Explore our collection of reusable, accessible, and beautiful UI components
          </p>
        </div>

        <div className="grid gap-8">
          {/* Button Examples */}
          <Card variant="elevated">
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Button Component</h2>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Multiple variants, sizes, and states
              </p>
            </CardHeader>
            <CardBody>
              <div className="space-y-6">
                {/* Primary Buttons */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Primary Variant
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Button size="sm">Small Button</Button>
                    <Button size="md">Medium Button</Button>
                    <Button size="lg">Large Button</Button>
                    <Button size="md" isLoading>
                      Loading Button
                    </Button>
                    <Button size="md" disabled>
                      Disabled Button
                    </Button>
                  </div>
                </div>

                {/* Secondary Buttons */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Secondary Variant (Accent)
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="secondary" size="sm">
                      Small Button
                    </Button>
                    <Button variant="secondary" size="md">
                      Medium Button
                    </Button>
                    <Button variant="secondary" size="lg">
                      Large Button
                    </Button>
                  </div>
                </div>

                {/* Outline Buttons */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Outline Variant
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm">
                      Small Button
                    </Button>
                    <Button variant="outline" size="md">
                      Medium Button
                    </Button>
                    <Button variant="outline" size="lg">
                      Large Button
                    </Button>
                  </div>
                </div>

                {/* Ghost Buttons */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Ghost Variant
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="ghost" size="sm">
                      Small Button
                    </Button>
                    <Button variant="ghost" size="md">
                      Medium Button
                    </Button>
                    <Button variant="ghost" size="lg">
                      Large Button
                    </Button>
                  </div>
                </div>

                {/* Danger Buttons */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Danger Variant
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="danger" size="sm">
                      Delete
                    </Button>
                    <Button variant="danger" size="md">
                      Remove
                    </Button>
                    <Button variant="danger" size="lg" fullWidth>
                      Full Width Danger Button
                    </Button>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Card Examples */}
          <Card variant="elevated">
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Card Component</h2>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Container for grouping related content
              </p>
            </CardHeader>
            <CardBody>
              <div className="grid gap-6 md:grid-cols-3">
                {/* Elevated Card */}
                <Card variant="elevated" padding="md">
                  <CardHeader>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Elevated Card
                    </h3>
                  </CardHeader>
                  <CardBody>
                    <p className="text-gray-600 dark:text-gray-400">
                      This card has an elevated appearance with shadow and border.
                    </p>
                  </CardBody>
                  <CardFooter>
                    <Button variant="primary" size="sm" fullWidth>
                      Action
                    </Button>
                  </CardFooter>
                </Card>

                {/* Outlined Card */}
                <Card variant="outlined" padding="md">
                  <CardHeader>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Outlined Card
                    </h3>
                  </CardHeader>
                  <CardBody>
                    <p className="text-gray-600 dark:text-gray-400">
                      This card has a clean outlined appearance with a border.
                    </p>
                  </CardBody>
                  <CardFooter>
                    <Button variant="secondary" size="sm" fullWidth>
                      Action
                    </Button>
                  </CardFooter>
                </Card>

                {/* Flat Card */}
                <Card variant="flat" padding="md">
                  <CardHeader>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Flat Card
                    </h3>
                  </CardHeader>
                  <CardBody>
                    <p className="text-gray-600 dark:text-gray-400">
                      This card has a minimal flat appearance with subtle background.
                    </p>
                  </CardBody>
                  <CardFooter>
                    <Button variant="outline" size="sm" fullWidth>
                      Action
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CardBody>
          </Card>

          {/* Input Examples */}
          <Card variant="elevated">
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Input Component</h2>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Form inputs with validation and helper text
              </p>
            </CardHeader>
            <CardBody>
              <div className="grid gap-6 md:grid-cols-2">
                {/* Outlined Input */}
                <div>
                  <h3 className="mb-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Outlined Variant
                  </h3>
                  <Input
                    label="Full Name"
                    placeholder="Enter your full name"
                    helperText="Enter your first and last name"
                  />
                </div>

                {/* Filled Input */}
                <div>
                  <h3 className="mb-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Filled Variant
                  </h3>
                  <Input
                    variant="filled"
                    label="Email Address"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Underline Input */}
                <div>
                  <h3 className="mb-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Underline Variant
                  </h3>
                  <Input
                    variant="underline"
                    label="Phone Number"
                    type="tel"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Error State */}
                <div>
                  <h3 className="mb-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Error State
                  </h3>
                  <Input
                    label="Username"
                    placeholder="username"
                    error="Username is already taken"
                  />
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Badge Examples */}
          <Card variant="elevated">
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Badge Component</h2>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Labels and tags with multiple variants
              </p>
            </CardHeader>
            <CardBody>
              <div className="space-y-6">
                {/* Badge Variants */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Badge Variants
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="primary">Primary</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="error">Error</Badge>
                    <Badge variant="info">Info</Badge>
                  </div>
                </div>

                {/* Badge Sizes */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Badge Sizes
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge size="sm">Small</Badge>
                    <Badge size="md">Medium</Badge>
                    <Badge size="lg">Large</Badge>
                  </div>
                </div>

                {/* Badge with Dot */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Badge with Dot Indicator
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="success" dot>
                      Active
                    </Badge>
                    <Badge variant="warning" dot>
                      Pending
                    </Badge>
                    <Badge variant="error" dot>
                      Inactive
                    </Badge>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Alert Examples */}
          <Card variant="elevated">
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Alert Component</h2>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Notifications and messages with multiple states
              </p>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <Alert variant="success" title="Success!">
                  Your action has been completed successfully.
                </Alert>
                <Alert variant="info" title="Information">
                  This is an informational message for the user.
                </Alert>
                <Alert variant="warning" title="Warning" dismissible>
                  Please review this warning before proceeding.
                </Alert>
                <Alert variant="error" title="Error" dismissible>
                  An error occurred while processing your request.
                </Alert>
              </div>
            </CardBody>
          </Card>

          {/* Spinner Examples */}
          <Card variant="elevated">
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Spinner Component</h2>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Loading indicators with various sizes and colors
              </p>
            </CardHeader>
            <CardBody>
              <div className="space-y-6">
                {/* Spinner Sizes */}
                <div>
                  <h3 className="mb-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Spinner Sizes
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <Spinner size="sm" />
                      <p className="text-xs text-gray-600 dark:text-gray-400">Small</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Spinner size="md" />
                      <p className="text-xs text-gray-600 dark:text-gray-400">Medium</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Spinner size="lg" />
                      <p className="text-xs text-gray-600 dark:text-gray-400">Large</p>
                    </div>
                  </div>
                </div>

                {/* Spinner Colors */}
                <div>
                  <h3 className="mb-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Spinner Colors
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <Spinner color="primary" />
                      <p className="text-xs text-gray-600 dark:text-gray-400">Primary</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Spinner color="secondary" />
                      <p className="text-xs text-gray-600 dark:text-gray-400">Secondary</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-lg bg-gray-900 p-4">
                      <Spinner color="white" />
                      <p className="text-xs text-gray-400">White</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Modal Example */}
          <Card variant="elevated">
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Modal Component</h2>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Dialog for displaying content and forms
              </p>
            </CardHeader>
            <CardBody>
              <div className="flex gap-3">
                <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
                <Button variant="secondary" onClick={() => setIsModalOpen(true)}>
                  Open Form Modal
                </Button>
              </div>
            </CardBody>
          </Card>

          {/* Integration Example */}
          <Card variant="elevated">
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Form Integration Example
              </h2>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Combining multiple components for a contact form
              </p>
            </CardHeader>
            <CardBody>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                />
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    placeholder="Your message"
                    rows={4}
                    className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 transition-all duration-200 focus:border-[#5200ff] focus:outline-none focus:ring-2 focus:ring-[#5200ff]/20 dark:border-gray-700 dark:bg-gray-800"
                  />
                </div>
                <Button type="submit" isLoading={isLoading} fullWidth>
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Welcome to Component Library"
        footer={
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => setIsModalOpen(false)}
              fullWidth
            >
              Close
            </Button>
            <Button onClick={() => setIsModalOpen(false)} fullWidth>
              Got it!
            </Button>
          </div>
        }
      >
        <p className="text-gray-600 dark:text-gray-400">
          This is a demonstration of our reusable UI component library. All components are built
          with:
        </p>
        <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#5200ff]" />
            TypeScript for type safety
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#f5e942]" />
            Tailwind CSS for styling
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#5200ff]" />
            Accessibility in mind
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#f5e942]" />
            Responsive design
          </li>
        </ul>
      </Modal>
    </div>
  )
}
