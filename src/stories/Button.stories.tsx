import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Plus, Trash2, Settings, Sparkles, Download } from 'lucide-react'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'gradient', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'xl', 'icon'],
    },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: 'Button', variant: 'default' },
}

export const Gradient: Story = {
  args: { children: 'Gradient Button', variant: 'gradient' },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-6 bg-[#F5F5F7] rounded-2xl">
      <Button variant="default">Default</Button>
      <Button variant="gradient">Gradient</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3 p-6 bg-[#F5F5F7] rounded-2xl">
      <Button variant="gradient" size="sm">Small</Button>
      <Button variant="gradient" size="default">Default</Button>
      <Button variant="gradient" size="lg">Large</Button>
      <Button variant="gradient" size="xl">Extra Large</Button>
      <Button variant="gradient" size="icon"><Settings className="h-4 w-4" /></Button>
    </div>
  ),
}

export const LatteHero: Story = {
  name: 'Latte - Hero CTA',
  render: () => (
    <div className="p-8 bg-[#F5F5F7] rounded-2xl text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
        <Sparkles className="w-4 h-4 text-primary-600" />
        <span className="text-sm font-semibold text-primary-700">LLM Fine-Tuning Platform</span>
      </div>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        <span className="gradient-text">LATTE</span>
      </h1>
      <p className="text-base text-gray-500 mb-8">9단계 워크플로우로 LLM을 Fine-Tuning합니다.</p>
      <Button variant="gradient" size="xl" className="gap-2">
        Training 시작하기 <ArrowRight className="w-5 h-5" />
      </Button>
    </div>
  ),
}

export const LatteNavActive: Story = {
  name: 'Latte - Nav Button',
  render: () => (
    <div className="w-56 p-4 space-y-1 glass-sidebar">
      <button className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white shadow-lg shadow-[var(--gradient-shadow)]">
        <Sparkles className="w-4 h-4" />
        <span>Training</span>
      </button>
      <button className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:bg-white/50 hover:text-gray-900">
        <Settings className="w-4 h-4" />
        <span>Settings</span>
      </button>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-6 bg-[#F5F5F7] rounded-2xl">
      <Button variant="gradient" className="gap-2">
        <Plus className="w-4 h-4" /> Create New
      </Button>
      <Button variant="outline" className="gap-2">
        <Download className="w-4 h-4" /> Export
      </Button>
      <Button variant="destructive" className="gap-2">
        <Trash2 className="w-4 h-4" /> Delete
      </Button>
    </div>
  ),
}
