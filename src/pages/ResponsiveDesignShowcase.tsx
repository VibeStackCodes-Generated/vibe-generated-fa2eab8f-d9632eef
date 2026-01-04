/**
 * Responsive Design Showcase Page
 *
 * This page demonstrates mobile-first responsive design patterns
 * and how to use the responsive utilities effectively.
 */

import {
  ResponsiveContainer,
  ResponsiveGrid,
  ResponsiveFlex,
  ResponsiveSection,
  ResponsiveHeading,
  ResponsiveStack,
  Button,
  Card,
  CardHeader,
  CardBody,
} from '@/components'
import { patterns } from '@/utils/responsive'

export function ResponsiveDesignShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
      <ResponsiveContainer maxWidth="2xl">
        {/* Header */}
        <div className="section-spacing">
          <ResponsiveHeading level={1} className="text-primary">
            Responsive Design Showcase
          </ResponsiveHeading>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base md:text-lg">
            Explore mobile-first responsive design patterns and best practices
          </p>
        </div>

        {/* Layout Examples */}
        <ResponsiveSection title="1. Responsive Grid Layouts" subtitle="Stacks on mobile, expands on desktop">
          <ResponsiveStack spacing="lg">
            {/* Grid 3 Column Example */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300 sm:text-base">
                3-Column Grid (Stacks on Mobile)
              </h3>
              <ResponsiveGrid columns={3} gap="md">
                {[1, 2, 3].map((num) => (
                  <Card key={num} variant="outlined">
                    <CardBody>
                      <p className="text-center text-sm font-medium text-gray-600 dark:text-gray-400">
                        Column {num}
                      </p>
                      <p className="mt-2 text-center text-xs text-gray-500">
                        Resize to see responsive behavior
                      </p>
                    </CardBody>
                  </Card>
                ))}
              </ResponsiveGrid>
            </div>

            {/* Grid 4 Column Example */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300 sm:text-base">
                4-Column Grid (2 on Tablet, 4 on Desktop)
              </h3>
              <ResponsiveGrid columns={4} gap="md">
                {[1, 2, 3, 4].map((num) => (
                  <Card key={num} variant="flat">
                    <CardBody>
                      <p className="text-center text-sm font-medium text-gray-600 dark:text-gray-400">
                        Item {num}
                      </p>
                    </CardBody>
                  </Card>
                ))}
              </ResponsiveGrid>
            </div>
          </ResponsiveStack>
        </ResponsiveSection>

        {/* Typography Scaling */}
        <ResponsiveSection title="2. Responsive Typography" subtitle="Text sizes scale with screen size">
          <ResponsiveStack spacing="lg">
            <Card variant="elevated">
              <CardBody>
                <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
                  Heading 1 (Scales responsively)
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
                  Mobile: 24px → Tablet: 30px → Desktop: 36px → Large: 48px
                </p>
              </CardBody>
            </Card>

            <Card variant="elevated">
              <CardBody>
                <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl md:text-3xl">
                  Heading 2 (Responsive size)
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Mobile: 20px → Tablet: 24px → Desktop: 30px
                </p>
              </CardBody>
            </Card>

            <Card variant="elevated">
              <CardBody>
                <p className="text-xs text-gray-900 dark:text-white sm:text-sm md:text-base">
                  Paragraph text also scales (xs: 12px → sm: 14px → md: 16px). This ensures readability on all
                  devices while optimizing screen space usage on mobile.
                </p>
              </CardBody>
            </Card>
          </ResponsiveStack>
        </ResponsiveSection>

        {/* Spacing & Padding */}
        <ResponsiveSection title="3. Responsive Spacing" subtitle="Padding and gaps adjust per screen size">
          <ResponsiveStack spacing="lg">
            {/* Container Padding Example */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300 sm:text-base">
                Section Spacing
              </h3>
              <div className="section-spacing bg-blue-100 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-800 rounded-lg">
                <p className="text-center text-xs text-blue-800 dark:text-blue-300 sm:text-sm">
                  This section has responsive padding:
                </p>
                <p className="text-center text-xs text-blue-700 dark:text-blue-400 sm:text-sm">
                  Mobile: 6rem vertical, 4rem horizontal
                </p>
                <p className="text-center text-xs text-blue-700 dark:text-blue-400 sm:text-sm">
                  Tablet: 8rem vertical, 6rem horizontal
                </p>
                <p className="text-center text-xs text-blue-700 dark:text-blue-400 sm:text-sm">
                  Desktop: 12rem vertical, 8rem horizontal
                </p>
              </div>
            </div>

            {/* Gap Example */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300 sm:text-base">
                Responsive Gaps
              </h3>
              <div className="gap-responsive flex flex-wrap">
                {['Item 1', 'Item 2', 'Item 3'].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg bg-green-100 dark:bg-green-900/20 px-3 py-2 text-xs font-medium text-green-800 dark:text-green-300 sm:px-4 sm:py-2"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-2 text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
                Gap: 12px (mobile) → 16px (tablet) → 24px (desktop)
              </p>
            </div>
          </ResponsiveStack>
        </ResponsiveSection>

        {/* Button Groups */}
        <ResponsiveSection title="4. Responsive Button Groups" subtitle="Stack vertically on mobile, horizontally on desktop">
          <Card variant="elevated">
            <CardBody>
              <div className="flex-responsive">
                <Button size="sm">Button 1</Button>
                <Button size="sm" variant="secondary">
                  Button 2
                </Button>
                <Button size="sm" variant="outline">
                  Button 3
                </Button>
              </div>
              <p className="mt-4 text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
                Buttons stack vertically on mobile, arrange horizontally on tablet+
              </p>
            </CardBody>
          </Card>
        </ResponsiveSection>

        {/* Touch Targets */}
        <ResponsiveSection title="5. Mobile-Friendly Touch Targets" subtitle="Minimum 44×44px on mobile for accessibility">
          <Card variant="elevated">
            <CardBody>
              <div className="space-y-4">
                <Button fullWidth>Full Width Button (Large Touch Target)</Button>
                <p className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
                  Buttons on mobile have increased padding to meet WCAG accessibility standards for touch targets.
                </p>
              </div>
            </CardBody>
          </Card>
        </ResponsiveSection>

        {/* Visibility Utilities */}
        <ResponsiveSection title="6. Responsive Visibility" subtitle="Show/hide content based on screen size">
          <Card variant="elevated">
            <CardBody>
              <ResponsiveStack spacing="md">
                {/* Mobile Only */}
                <div className="mobile-only bg-blue-100 dark:bg-blue-900/20 p-3 rounded-lg">
                  <p className="text-xs font-medium text-blue-800 dark:text-blue-300">
                    👁️ This content shows only on mobile (hidden on tablet+)
                  </p>
                </div>

                {/* Tablet Up */}
                <div className="tablet-up bg-purple-100 dark:bg-purple-900/20 p-3 rounded-lg">
                  <p className="text-xs font-medium text-purple-800 dark:text-purple-300">
                    👁️ This content hides on mobile, shows on tablet and up
                  </p>
                </div>

                {/* Desktop Only */}
                <div className="desktop-only bg-green-100 dark:bg-green-900/20 p-3 rounded-lg">
                  <p className="text-xs font-medium text-green-800 dark:text-green-300">
                    👁️ This content shows only on desktop (hidden below md)
                  </p>
                </div>
              </ResponsiveStack>
            </CardBody>
          </Card>
        </ResponsiveSection>

        {/* Forms */}
        <ResponsiveSection title="7. Responsive Forms" subtitle="Form inputs with mobile-friendly sizing">
          <Card variant="elevated">
            <CardBody>
              <form className="form-spacing">
                <div>
                  <label className="mb-2 block text-xs font-medium text-gray-700 dark:text-gray-300 sm:text-sm">
                    Input with responsive padding
                  </label>
                  <input
                    type="text"
                    placeholder="Try resizing your browser"
                    className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-sm transition-all duration-200 focus:border-[#5200ff] focus:outline-none focus:ring-2 focus:ring-[#5200ff]/20 dark:border-gray-700 dark:bg-gray-800 sm:py-2"
                  />
                </div>
                <Button fullWidth>Submit (Full Width)</Button>
              </form>
            </CardBody>
          </Card>
        </ResponsiveSection>

        {/* Breakpoint Information */}
        <ResponsiveSection title="8. Tailwind Breakpoints" subtitle="Reference guide for responsive design">
          <div className="grid-responsive-2 sm:gap-4">
            {[
              { label: 'Base/Mobile', size: '0px', prefix: 'none' },
              { label: 'Small (sm)', size: '640px', prefix: 'sm:' },
              { label: 'Medium (md)', size: '768px', prefix: 'md:' },
              { label: 'Large (lg)', size: '1024px', prefix: 'lg:' },
              { label: 'XL', size: '1280px', prefix: 'xl:' },
              { label: '2XL', size: '1536px', prefix: '2xl:' },
            ].map((bp) => (
              <Card key={bp.label} variant="outlined">
                <CardBody>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{bp.label}</h4>
                  <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{bp.size}</p>
                  <p className="mt-1 font-mono text-xs text-[#5200ff]">{bp.prefix}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </ResponsiveSection>

        {/* Best Practices */}
        <ResponsiveSection title="9. Mobile-First Best Practices" subtitle="Guidelines for responsive design">
          <div className="space-y-4">
            <Card variant="elevated">
              <CardBody className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">1. Start with Mobile</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
                  Design and code for mobile first, then add responsive classes for larger screens.
                </p>
              </CardBody>
            </Card>

            <Card variant="elevated">
              <CardBody className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">2. Touch-Friendly Targets</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
                  Ensure minimum 44×44px touch targets on mobile for accessibility.
                </p>
              </CardBody>
            </Card>

            <Card variant="elevated">
              <CardBody className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">3. Readable Typography</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
                  Use responsive font sizes for comfortable reading on all devices.
                </p>
              </CardBody>
            </Card>

            <Card variant="elevated">
              <CardBody className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">4. Progressive Enhancement</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
                  Use responsive utilities to add features and optimize layout for larger screens.
                </p>
              </CardBody>
            </Card>
          </div>
        </ResponsiveSection>

        {/* Spacing for footer */}
        <div className="py-12" />
      </ResponsiveContainer>
    </div>
  )
}
