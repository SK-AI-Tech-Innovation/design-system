import type { Meta, StoryObj } from '@storybook/react'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { StatusBadge } from '@/components/ui/status-badge'

const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Training ID</TableHead>
          <TableHead>Model</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Epoch</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">LT-260414-0001</TableCell>
          <TableCell>llama-3.1-8b</TableCell>
          <TableCell><StatusBadge status="Active" /></TableCell>
          <TableCell className="text-right">3/10</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">LT-260413-0005</TableCell>
          <TableCell>gemma-2-9b</TableCell>
          <TableCell><StatusBadge status="Ready" /></TableCell>
          <TableCell className="text-right">10/10</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">LT-260412-0003</TableCell>
          <TableCell>qwen-2.5-7b</TableCell>
          <TableCell><StatusBadge status="Inactive" /></TableCell>
          <TableCell className="text-right">—</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}
