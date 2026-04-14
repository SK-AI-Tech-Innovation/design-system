import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'

const meta = {
  title: 'Components/Switch & Select',
  component: Switch,
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const SwitchDefault: Story = {
  name: 'Switch',
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <div className="flex items-center gap-2">
        <Switch checked={checked} onCheckedChange={setChecked} />
        <Label>Enable GPU Monitoring</Label>
      </div>
    )
  },
}

export const SwitchChecked: Story = {
  name: 'Switch (Checked)',
  render: () => {
    const [checked, setChecked] = useState(true)
    return (
      <div className="flex items-center gap-2">
        <Switch checked={checked} onCheckedChange={setChecked} />
        <Label>Gradient Checkpointing</Label>
      </div>
    )
  },
}

export const SwitchDisabled: Story = {
  name: 'Switch (Disabled)',
  render: () => (
    <div className="flex items-center gap-2">
      <Switch checked={false} disabled />
      <Label className="opacity-50">LoRA (Disabled)</Label>
    </div>
  ),
}

export const SelectDefault: Story = {
  name: 'Select',
  render: () => (
    <div className="flex flex-col gap-2 w-[250px]">
      <Label>GPU Type</Label>
      <Select defaultValue="h200">
        <option value="h200">NVIDIA H200</option>
        <option value="h100">NVIDIA H100</option>
        <option value="a100">NVIDIA A100</option>
      </Select>
    </div>
  ),
}

export const SwitchGroup: Story = {
  name: 'Settings Panel',
  render: () => {
    const [settings, setSettings] = useState({
      lora: true,
      gradient: false,
      monitoring: true,
    })
    return (
      <div className="flex flex-col gap-4 w-[300px]">
        {[
          { key: 'lora' as const, label: 'LoRA Fine-Tuning' },
          { key: 'gradient' as const, label: 'Gradient Checkpointing' },
          { key: 'monitoring' as const, label: 'Resource Monitoring' },
        ].map(({ key, label }) => (
          <div key={key} className="flex items-center justify-between">
            <Label>{label}</Label>
            <Switch
              checked={settings[key]}
              onCheckedChange={(v) => setSettings((s) => ({ ...s, [key]: v }))}
            />
          </div>
        ))}
      </div>
    )
  },
}
