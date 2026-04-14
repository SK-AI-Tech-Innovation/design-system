import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { UsageBar } from '@/components/ui/usage-bar'
import { Sparkles, History, Archive, Rocket, HardDrive, ArrowRight } from 'lucide-react'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here with supporting text.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">Card content area.</p>
      </CardContent>
    </Card>
  ),
}

export const LatteFeatureCards: Story = {
  name: 'Latte - Feature Cards',
  render: () => {
    const features = [
      { icon: Sparkles, title: 'Training', desc: '9단계 워크플로우로 LLM을 Fine-Tuning합니다.', color: 'from-[var(--gradient-from)] to-[var(--gradient-to)]', shadow: 'shadow-[var(--gradient-shadow-light)]' },
      { icon: History, title: 'Training History', desc: 'Fine-Tuning 이력을 조회하고 비교합니다.', color: 'from-blue-500 to-cyan-500', shadow: 'shadow-blue-500/20' },
      { icon: Archive, title: 'Model Registry', desc: 'MLflow 연동 모델 버전을 관리합니다.', color: 'from-amber-500 to-orange-500', shadow: 'shadow-amber-500/20' },
      { icon: Rocket, title: 'Model Serving', desc: 'vLLM 기반으로 모델을 서빙합니다.', color: 'from-green-500 to-emerald-500', shadow: 'shadow-green-500/20' },
    ]
    return (
      <div className="grid grid-cols-2 gap-4 max-w-xl p-6 bg-[#F5F5F7] rounded-2xl">
        {features.map((f) => {
          const Icon = f.icon
          return (
            <Card key={f.title} className="group cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 bg-gradient-to-r ${f.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg ${f.shadow}`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-gray-800">{f.title}</h3>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed mt-1.5">{f.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    )
  },
}

export const LatteMetrics: Story = {
  name: 'Latte - Metrics Dashboard',
  render: () => (
    <div className="grid grid-cols-4 gap-4 p-6 bg-[#F5F5F7] rounded-2xl">
      {[
        { label: 'Total Models', value: '24', change: '+3 this week' },
        { label: 'Active Training', value: '7', change: '2 completing' },
        { label: 'GPU Nodes', value: '12', change: '8 available' },
        { label: 'Serving Endpoints', value: '5', change: '5 healthy' },
      ].map((m) => (
        <Card key={m.label}>
          <CardContent className="pt-6">
            <p className="text-xs text-gray-500 font-medium">{m.label}</p>
            <p className="text-2xl font-extrabold text-gray-900 mt-1">{m.value}</p>
            <p className="text-[11px] text-emerald-600 mt-1">{m.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  ),
}

export const LatteResourceCard: Story = {
  name: 'Latte - Resource Card',
  render: () => (
    <Card className="w-[320px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>gpu-node-01</CardTitle>
          <Badge variant="success">Ready</Badge>
        </div>
        <CardDescription>NVIDIA H200 80GB x 4</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>GPU Utilization</span><span>72%</span>
          </div>
          <UsageBar used={72} total={100} />
        </div>
        <div>
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Memory</span><span>58 / 80 GB</span>
          </div>
          <UsageBar used={58} total={80} />
        </div>
        <div>
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Storage</span><span>340 / 500 GB</span>
          </div>
          <UsageBar used={340} total={500} />
        </div>
      </CardContent>
    </Card>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Training</CardTitle>
        <CardDescription>새 Training Job을 생성합니다.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Training Name</Label>
          <Input id="name" placeholder="my-training-job" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="ns">Namespace</Label>
          <Input id="ns" placeholder="team-alpha" />
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="outline">Cancel</Button>
        <Button variant="gradient">Create</Button>
      </CardFooter>
    </Card>
  ),
}
