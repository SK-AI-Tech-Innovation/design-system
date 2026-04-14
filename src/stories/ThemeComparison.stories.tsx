import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { StatusBadge } from '@/components/ui/status-badge'
import { UsageBar } from '@/components/ui/usage-bar'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Select } from '@/components/ui/select'
import {
  Sparkles, History, Archive, Rocket, ArrowRight, Search,
  CheckCircle, Play, XCircle, Cpu, Settings, Layers,
  Home, LogOut, Activity, Clock, Zap, Globe, Copy,
  Code, GitBranch, FileSearch, AlertTriangle,
} from 'lucide-react'

const meta = {
  title: 'Examples/Theme Comparison',
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj

/* ── Shared layout panel rendered inside each theme scope ─────────── */

function DemoPanel({ themeName, themeLabel }: { themeName: string; themeLabel: string }) {
  return (
    <div className="min-h-screen bg-[#F5F5F7] p-6 space-y-6">
      {/* Theme badge */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] rounded-lg" />
        <div>
          <h2 className="text-lg font-extrabold text-gray-900">{themeLabel}</h2>
          <p className="text-xs text-gray-500">{themeName} theme</p>
        </div>
      </div>

      {/* Hero */}
      <div className="text-center py-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-4">
          <Sparkles className="w-4 h-4 text-primary-600" />
          <span className="text-sm font-semibold text-primary-700">{themeLabel} Platform</span>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
          <span className="gradient-text">{themeName.toUpperCase()}</span>
        </h1>
        <Button variant="gradient" size="xl" className="gap-2 mt-4">
          시작하기 <ArrowRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Buttons */}
      <Card>
        <CardHeader><CardTitle>Buttons</CardTitle></CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button variant="default">Default</Button>
            <Button variant="gradient">Gradient</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </CardContent>
      </Card>

      {/* Feature Cards */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: Sparkles, title: 'Training', desc: 'LLM Fine-Tuning 워크플로우', color: 'from-[var(--gradient-from)] to-[var(--gradient-to)]', shadow: 'shadow-[var(--gradient-shadow-light)]' },
          { icon: Archive, title: 'Registry', desc: '모델 버전 관리', color: 'from-amber-500 to-orange-500', shadow: 'shadow-amber-500/20' },
          { icon: Rocket, title: 'Serving', desc: '모델 서빙 및 배포', color: 'from-green-500 to-emerald-500', shadow: 'shadow-green-500/20' },
          { icon: Cpu, title: 'Resources', desc: 'GPU 리소스 모니터링', color: 'from-blue-500 to-cyan-500', shadow: 'shadow-blue-500/20' },
        ].map((f) => {
          const Icon = f.icon
          return (
            <Card key={f.title} className="group cursor-pointer">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${f.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg ${f.shadow}`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-800">{f.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{f.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Sidebar + Nav */}
      <Card className="glass-sidebar !bg-white/60">
        <CardContent className="p-4 space-y-1">
          <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-2 px-2">Navigation</p>
          {[
            { icon: Home, label: 'Home', active: true },
            { icon: Sparkles, label: 'Training', active: false },
            { icon: History, label: 'History', active: false },
            { icon: Archive, label: 'Registry', active: false },
          ].map((item) => {
            const Icon = item.icon
            return (
              <button key={item.label} className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                item.active
                  ? 'bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white shadow-lg shadow-[var(--gradient-shadow)]'
                  : 'text-gray-600 hover:bg-white/50'
              }`}>
                <Icon className="w-4 h-4" />{item.label}
              </button>
            )
          })}
        </CardContent>
      </Card>

      {/* Badges */}
      <Card>
        <CardHeader><CardTitle>Badges & Status</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="muted">Muted</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            <StatusBadge status="Active" />
            <StatusBadge status="Ready" />
            <StatusBadge status="Inactive" />
            <StatusBadge status="Disconnected" />
          </div>
        </CardContent>
      </Card>

      {/* Form */}
      <Card>
        <CardHeader><CardTitle>Training Setup</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Learning Rate</Label>
              <Input defaultValue="2e-5" className="font-mono bg-white" />
            </div>
            <div className="space-y-2">
              <Label>Optimizer</Label>
              <Select defaultValue="adamw">
                <option value="adamw">AdamW</option>
                <option value="sgd">SGD</option>
              </Select>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Label>LoRA Enabled</Label>
            <Switch checked={true} onCheckedChange={() => {}} />
          </div>
          <div className="flex gap-2">
            {['q_proj', 'k_proj', 'v_proj', 'o_proj'].map((m) => (
              <span key={m} className="text-[11px] font-mono px-2 py-1 rounded-lg bg-primary-50 text-primary-700 font-medium">{m}</span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="justify-end gap-3 border-t border-gray-100 pt-4">
          <Button variant="outline">이전</Button>
          <Button variant="gradient" className="gap-2">다음 <ArrowRight className="w-4 h-4" /></Button>
        </CardFooter>
      </Card>

      {/* Resource Monitor */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>GPU Node</CardTitle>
            <StatusBadge status="Ready" />
          </div>
          <CardDescription>NVIDIA H200 80GB x 4</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { label: 'CPU', used: 62 },
            { label: 'Memory', used: 71 },
            { label: 'GPU', used: 85 },
            { label: 'Storage', used: 45 },
          ].map((r) => (
            <div key={r.label}>
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>{r.label}</span><span>{r.used}%</span>
              </div>
              <UsageBar used={r.used} total={100} />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Data Table */}
      <Card className="!bg-white">
        <CardHeader><CardTitle>Training History</CardTitle></CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Loss</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { id: 'LT-260414-0001', model: 'llama-3.1-8b', status: 'completed' as const, method: 'SFT', loss: '0.0234' },
                { id: 'LT-260413-0005', model: 'gemma-2-9b', status: 'running' as const, method: 'DPO', loss: '0.0456' },
                { id: 'LT-260412-0003', model: 'qwen-2.5-7b', status: 'failed' as const, method: 'SFT', loss: '—' },
              ].map((r) => {
                const sc = { completed: { l: '완료', c: 'bg-green-50 text-green-700', I: CheckCircle, ic: 'text-green-500' }, running: { l: '실행 중', c: 'bg-blue-50 text-blue-700', I: Play, ic: 'text-blue-500' }, failed: { l: '실패', c: 'bg-red-50 text-red-700', I: XCircle, ic: 'text-red-500' } }[r.status]
                const SI = sc.I
                return (
                  <TableRow key={r.id} className="hover:bg-primary-50/30">
                    <TableCell className="font-mono text-xs font-bold text-primary-600">{r.id}</TableCell>
                    <TableCell className="text-sm text-gray-800">{r.model}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full ${sc.c}`}>
                        <SI className={`w-3 h-3 ${sc.ic}`} />{sc.l}
                      </span>
                    </TableCell>
                    <TableCell><span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary-50 text-primary-700">{r.method}</span></TableCell>
                    <TableCell className="text-right font-mono text-xs text-gray-700">{r.loss}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Terminal */}
      <div className="terminal-window rounded-xl p-4">
        <div className="flex gap-1.5 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <pre className="font-mono text-xs text-gray-300 whitespace-pre-wrap">{`$ python train.py --model llama-3.1-8b --method sft
[Epoch 3/10] Loss: 0.0234 | LR: 2e-5 | GPU: 78%
✓ Checkpoint saved: step-1500
✓ Training complete — model saved to registry`}</pre>
      </div>

      {/* Alert */}
      <Alert variant="success">
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>배포 완료</AlertTitle>
        <AlertDescription>모델이 성공적으로 서빙 엔드포인트에 배포되었습니다.</AlertDescription>
      </Alert>
    </div>
  )
}

/* ── Side by side comparison ──────────────────────────────────────── */

export const SideBySide: Story = {
  name: 'Latte vs ACE — Side by Side',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div className="flex min-h-screen">
      {/* Latte (default - CSS already loaded) */}
      <div className="flex-1 border-r-4 border-gray-300">
        <DemoPanel themeName="latte" themeLabel="LATTE — Purple" />
      </div>
      {/* ACE - override CSS variables */}
      <div
        className="flex-1"
        style={{
          '--color-primary': '#00b7ff',
          '--color-primary-foreground': '#ffffff',
          '--color-ring': '#00b7ff',
          '--color-primary-50': '#eff6ff',
          '--color-primary-100': '#dbeafe',
          '--color-primary-200': '#bfdbfe',
          '--color-primary-300': '#93c5fd',
          '--color-primary-400': '#60a5fa',
          '--color-primary-500': '#00b7ff',
          '--color-primary-600': '#0066e6',
          '--color-primary-700': '#0050cc',
          '--color-primary-800': '#0033b3',
          '--color-primary-900': '#0000ff',
          '--gradient-from': '#0066e6',
          '--gradient-to': '#00b7ff',
          '--gradient-shadow': 'rgba(0, 102, 230, 0.3)',
          '--gradient-shadow-light': 'rgba(0, 102, 230, 0.15)',
          '--gradient-shadow-soft': 'rgba(0, 102, 230, 0.08)',
        } as React.CSSProperties}
      >
        <DemoPanel themeName="ace" themeLabel="ACE — Blue" />
      </div>
    </div>
  ),
}

export const LatteOnly: Story = {
  name: 'Latte Theme — Full Demo',
  parameters: { layout: 'fullscreen' },
  render: () => <DemoPanel themeName="latte" themeLabel="LATTE — Purple" />,
}

export const AceOnly: Story = {
  name: 'ACE Theme — Full Demo',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div
      style={{
        '--color-primary': '#00b7ff',
        '--color-primary-foreground': '#ffffff',
        '--color-ring': '#00b7ff',
        '--color-primary-50': '#eff6ff',
        '--color-primary-100': '#dbeafe',
        '--color-primary-200': '#bfdbfe',
        '--color-primary-300': '#93c5fd',
        '--color-primary-400': '#60a5fa',
        '--color-primary-500': '#00b7ff',
        '--color-primary-600': '#0066e6',
        '--color-primary-700': '#0050cc',
        '--color-primary-800': '#0033b3',
        '--color-primary-900': '#0000ff',
        '--gradient-from': '#0066e6',
        '--gradient-to': '#00b7ff',
        '--gradient-shadow': 'rgba(0, 102, 230, 0.3)',
        '--gradient-shadow-light': 'rgba(0, 102, 230, 0.15)',
        '--gradient-shadow-soft': 'rgba(0, 102, 230, 0.08)',
      } as React.CSSProperties}
    >
      <DemoPanel themeName="ace" themeLabel="ACE — Blue" />
    </div>
  ),
}
