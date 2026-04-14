import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { placeholder: 'Enter text...' },
}

export const Disabled: Story = {
  args: { placeholder: 'Disabled', disabled: true },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-[300px]">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="name@example.com" />
    </div>
  ),
}

export const TextareaStory: Story = {
  name: 'Textarea',
  render: () => (
    <div className="flex flex-col gap-2 w-[300px]">
      <Label htmlFor="desc">Description</Label>
      <Textarea id="desc" placeholder="Enter description..." />
    </div>
  ),
}

export const FormGroup: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[350px]">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Training Name</Label>
        <Input id="name" placeholder="my-training-job" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="epochs">Epochs</Label>
        <Input id="epochs" type="number" placeholder="3" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="notes">Notes</Label>
        <Textarea id="notes" placeholder="Training notes..." />
      </div>
    </div>
  ),
}
