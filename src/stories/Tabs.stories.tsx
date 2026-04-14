import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('overview')
    return (
      <Tabs value={value} onValueChange={setValue} className="w-[400px]">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="metrics">Metrics</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-gray-600">Training overview and configuration summary.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="metrics">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-gray-600">Loss, accuracy, and performance metrics.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="logs">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-gray-600">Training logs and system output.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    )
  },
}
