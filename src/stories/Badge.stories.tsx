import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '@/components/ui/badge'
import { StatusBadge } from '@/components/ui/status-badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'success', 'warning', 'error', 'muted'],
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: 'Badge' },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="muted">Muted</Badge>
    </div>
  ),
}

export const StatusBadges: Story = {
  name: 'StatusBadge',
  render: () => (
    <div className="flex flex-wrap gap-2">
      <StatusBadge status="Active" />
      <StatusBadge status="Connected" />
      <StatusBadge status="Ready" />
      <StatusBadge status="Inactive" />
      <StatusBadge status="Disconnected" />
      <StatusBadge status="NotReady" />
      <StatusBadge status="SchedulingDisabled" />
    </div>
  ),
}
