import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from '@/components/ui/progress'
import { UsageBar } from '@/components/ui/usage-bar'

const meta = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { value: 60, className: 'w-[300px]' },
}

export const Empty: Story = {
  args: { value: 0, className: 'w-[300px]' },
}

export const Full: Story = {
  args: { value: 100, className: 'w-[300px]' },
}

export const UsageBarNormal: Story = {
  name: 'UsageBar - Normal',
  render: () => (
    <div className="w-[200px]">
      <UsageBar used={45} total={100} />
    </div>
  ),
}

export const UsageBarWarning: Story = {
  name: 'UsageBar - Warning (70%+)',
  render: () => (
    <div className="w-[200px]">
      <UsageBar used={75} total={100} />
    </div>
  ),
}

export const UsageBarCritical: Story = {
  name: 'UsageBar - Critical (90%+)',
  render: () => (
    <div className="w-[200px]">
      <UsageBar used={95} total={100} />
    </div>
  ),
}

export const UsageBarGroup: Story = {
  name: 'UsageBar - Resource Monitor',
  render: () => (
    <div className="w-[250px] space-y-3">
      {[
        { label: 'CPU', used: 45, total: 100 },
        { label: 'Memory', used: 72, total: 100 },
        { label: 'GPU', used: 93, total: 100 },
        { label: 'Storage', used: 30, total: 100 },
      ].map((r) => (
        <div key={r.label}>
          <span className="text-xs text-gray-500 mb-1 block">{r.label}</span>
          <UsageBar used={r.used} total={r.total} />
        </div>
      ))}
    </div>
  ),
}
