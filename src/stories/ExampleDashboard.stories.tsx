import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { StatusBadge } from '@/components/ui/status-badge'
import { Progress } from '@/components/ui/progress'
import { UsageBar } from '@/components/ui/usage-bar'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Select } from '@/components/ui/select'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import {
  Sparkles, History, Archive, Rocket, HardDrive, ArrowRight, Search,
  CheckCircle, Play, Clock, XCircle, Cpu, Server, Layers, Tag,
  Settings, ChevronDown, Home, LogOut, ExternalLink, AlertTriangle,
  Activity, Zap, Globe, Copy, Plus, Database, BarChart3, Save,
} from 'lucide-react'

const meta = {
  title: 'Examples/Full Pages',
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj

/* ═══════════════════════════════════════════
   1. Home Page
   ═══════════════════════════════════════════ */

export const HomePage: Story = {
  render: () => (
    <div className="min-h-screen bg-[#F5F5F7] flex">
      {/* Sidebar */}
      <aside className="w-64 m-6 mr-0 glass-sidebar flex flex-col flex-shrink-0">
        <div className="p-6 border-b border-white/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] rounded-xl flex items-center justify-center shadow-lg shadow-[var(--gradient-shadow-light)]">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-extrabold text-gray-900 leading-tight">LATTE</h1>
              <p className="text-[10px] text-gray-500 font-medium">LLM Fine-Tuning Platform</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {[
            { icon: Home, label: 'Home', active: true },
            { icon: Sparkles, label: 'Training', active: false },
            { icon: History, label: 'History', active: false },
            { icon: Archive, label: 'Model Registry', active: false },
            { icon: Rocket, label: 'Model Serving', active: false },
            { icon: HardDrive, label: 'Data Browser', active: false },
          ].map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.label}
                className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  item.active
                    ? 'bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white shadow-lg shadow-[var(--gradient-shadow)]'
                    : 'text-gray-600 hover:bg-white/50 hover:text-gray-900'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>
        <div className="p-4 border-t border-white/30">
          <div className="flex items-center gap-3 px-2 py-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white">A</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Admin</p>
              <p className="text-xs text-gray-500 truncate">latteadmin</p>
            </div>
            <LogOut className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 max-w-5xl">
        {/* Hero */}
        <div className="text-center py-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">LLM Automated Tune/Train/Evaluate Platform</span>
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            <span className="gradient-text">LATTE</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            대규모 언어 모델의 Fine-Tuning부터 Serving까지<br />한 곳에서 관리하는 통합 플랫폼입니다.
          </p>
          <Button variant="gradient" size="xl" className="gap-2">
            Training 시작하기 <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Feature Cards */}
        <h2 className="text-lg font-bold text-gray-800 mb-4">플랫폼 기능</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Sparkles, title: 'Training', desc: '9단계 워크플로우로 LLM을 Fine-Tuning합니다.', color: 'from-[var(--gradient-from)] to-[var(--gradient-to)]', shadow: 'shadow-[var(--gradient-shadow-light)]' },
            { icon: History, title: 'Training History', desc: 'Fine-Tuning 이력을 조회하고 비교합니다.', color: 'from-blue-500 to-cyan-500', shadow: 'shadow-blue-500/20' },
            { icon: Archive, title: 'Model Registry', desc: 'MLflow 연동 모델 버전을 관리합니다.', color: 'from-amber-500 to-orange-500', shadow: 'shadow-amber-500/20' },
            { icon: Rocket, title: 'Model Serving', desc: 'vLLM 기반으로 모델을 서빙합니다.', color: 'from-green-500 to-emerald-500', shadow: 'shadow-green-500/20' },
          ].map((f) => {
            const Icon = f.icon
            return (
              <Card key={f.title} className="group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 bg-gradient-to-r ${f.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg ${f.shadow}`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
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

        {/* Workflow Steps */}
        <div className="mt-10 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 className="text-lg font-bold text-gray-800 text-center mb-8">Training Workflow</h2>
          <div className="flex items-start justify-between">
            {['Training\n설정', 'Dataset\n선택', '모델\n선택', '전처리', 'Training\nRecipe', '리소스\n할당', 'Training &\nValidation', 'Training\n요약', '모델\n저장'].map((step, i) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-9 h-9 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-[var(--gradient-shadow-light)]">
                    {i + 1}
                  </div>
                  <span className="text-[10px] text-gray-600 font-medium text-center w-14 whitespace-pre-line leading-tight">{step}</span>
                </div>
                {i < 8 && <div className="flex-1 h-0.5 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] mx-0.5 mt-[18px]" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </main>
    </div>
  ),
}

/* ═══════════════════════════════════════════
   2. Training History
   ═══════════════════════════════════════════ */

export const TrainingHistory: Story = {
  render: () => {
    const records = [
      { id: 'LT-260414-0001', name: 'llama3.1-sft-ko', model: 'llama-3.1-8b', method: 'SFT', status: 'completed' as const, duration: '2h 34m', metrics: { loss: 0.0234, accuracy: 92.1 }, tags: ['korean', 'qa'] },
      { id: 'LT-260413-0005', name: 'gemma2-dpo-chat', model: 'gemma-2-9b', method: 'DPO', status: 'running' as const, duration: '1h 12m', metrics: { loss: 0.0456, accuracy: 88.3 }, tags: ['chat'] },
      { id: 'LT-260412-0003', name: 'qwen-sft-code', model: 'qwen-2.5-7b', method: 'SFT', status: 'failed' as const, duration: '45m', metrics: null, tags: ['code'] },
      { id: 'LT-260411-0002', name: 'llama3-sft-summary', model: 'llama-3.1-8b', method: 'SFT', status: 'completed' as const, duration: '3h 10m', metrics: { loss: 0.0189, accuracy: 94.5 }, tags: ['summary'] },
      { id: 'LT-260410-0007', name: 'gemma2-cpt-domain', model: 'gemma-2-9b', method: 'CPT', status: 'completed' as const, duration: '8h 22m', metrics: { loss: 0.0312, accuracy: 89.7 }, tags: ['domain', 'finance'] },
    ]
    const statusConfig = {
      completed: { label: '완료', cls: 'bg-green-50 text-green-700', icon: CheckCircle, iconCls: 'text-green-500' },
      running: { label: '실행 중', cls: 'bg-blue-50 text-blue-700', icon: Play, iconCls: 'text-blue-500' },
      failed: { label: '실패', cls: 'bg-red-50 text-red-700', icon: XCircle, iconCls: 'text-red-500' },
    }
    return (
      <div className="p-8 bg-[#F5F5F7] min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900">Training History</h1>
              <p className="text-sm text-gray-500 mt-1">Fine-Tuning 이력을 조회하고 비교합니다.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                <Input placeholder="검색..." className="pl-9 w-64 bg-white/80" />
              </div>
              <Button variant="outline" className="gap-2">
                <ArrowRight className="w-4 h-4 rotate-90" /> 비교하기
              </Button>
            </div>
          </div>

          {/* Table */}
          <Card className="!bg-white">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-10"><input type="checkbox" className="rounded" /></TableHead>
                  <TableHead>Training ID</TableHead>
                  <TableHead>이름</TableHead>
                  <TableHead>Base Model</TableHead>
                  <TableHead>방식</TableHead>
                  <TableHead>상태</TableHead>
                  <TableHead>소요 시간</TableHead>
                  <TableHead className="text-right">Loss</TableHead>
                  <TableHead className="text-right">Accuracy</TableHead>
                  <TableHead>태그</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {records.map((r) => {
                  const sc = statusConfig[r.status]
                  const StatusIcon = sc.icon
                  return (
                    <TableRow key={r.id} className="cursor-pointer hover:bg-primary-50/30">
                      <TableCell><input type="checkbox" className="rounded" /></TableCell>
                      <TableCell className="font-mono text-xs font-bold text-primary-600">{r.id}</TableCell>
                      <TableCell className="text-sm font-medium text-gray-800">{r.name}</TableCell>
                      <TableCell className="text-xs text-gray-600">{r.model}</TableCell>
                      <TableCell>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary-50 text-primary-700">{r.method}</span>
                      </TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full ${sc.cls}`}>
                          <StatusIcon className={`w-3 h-3 ${sc.iconCls}`} />{sc.label}
                        </span>
                      </TableCell>
                      <TableCell className="text-xs text-gray-500 font-mono">{r.duration}</TableCell>
                      <TableCell className="text-right text-xs font-mono text-gray-700">{r.metrics?.loss.toFixed(4) ?? '—'}</TableCell>
                      <TableCell className="text-right text-xs font-mono text-gray-700">{r.metrics ? `${r.metrics.accuracy}%` : '—'}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">{r.tags.map((t) => <Badge key={t} variant="muted">{t}</Badge>)}</div>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    )
  },
}

/* ═══════════════════════════════════════════
   3. GPU Resource Dashboard
   ═══════════════════════════════════════════ */

export const GPUDashboard: Story = {
  name: 'GPU Resource Dashboard',
  render: () => {
    const nodes = [
      { name: 'gpu-node-01', gpu: 'H200 80GB', count: 4, status: 'Ready' as const, cpu: 62, mem: 71, gpuUtil: 85, storage: 45 },
      { name: 'gpu-node-02', gpu: 'H200 80GB', count: 4, status: 'Ready' as const, cpu: 34, mem: 48, gpuUtil: 92, storage: 30 },
      { name: 'gpu-node-03', gpu: 'H100 80GB', count: 8, status: 'Ready' as const, cpu: 55, mem: 63, gpuUtil: 43, storage: 67 },
      { name: 'gpu-node-04', gpu: 'H100 80GB', count: 8, status: 'SchedulingDisabled' as const, cpu: 0, mem: 12, gpuUtil: 0, storage: 15 },
    ]
    return (
      <div className="p-8 bg-[#F5F5F7] min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-1">GPU Resources</h1>
          <p className="text-sm text-gray-500 mb-6">Kubernetes 클러스터 GPU 노드 현황</p>

          {/* Summary */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Total Nodes', value: '4', sub: '3 available' },
              { label: 'Total GPUs', value: '24', sub: '16 H200 + 8 H100' },
              { label: 'Avg GPU Util', value: '55%', sub: '3 nodes active' },
              { label: 'Active Jobs', value: '7', sub: '3 training + 4 serving' },
            ].map((m) => (
              <Card key={m.label}>
                <CardContent className="pt-6">
                  <p className="text-xs text-gray-500 font-medium">{m.label}</p>
                  <p className="text-2xl font-extrabold text-gray-900 mt-1">{m.value}</p>
                  <p className="text-[11px] text-gray-400 mt-1">{m.sub}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Node Cards */}
          <div className="grid grid-cols-2 gap-4">
            {nodes.map((n) => (
              <Card key={n.name}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                        <Cpu className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <CardTitle>{n.name}</CardTitle>
                        <CardDescription>NVIDIA {n.gpu} x {n.count}</CardDescription>
                      </div>
                    </div>
                    <StatusBadge status={n.status} />
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { label: 'CPU', value: n.cpu },
                    { label: 'Memory', value: n.mem },
                    { label: 'GPU Utilization', value: n.gpuUtil },
                    { label: 'Storage', value: n.storage },
                  ].map((r) => (
                    <div key={r.label}>
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>{r.label}</span><span>{r.value}%</span>
                      </div>
                      <UsageBar used={r.value} total={100} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  },
}

/* ═══════════════════════════════════════════
   4. Model Serving (Deploy Flow)
   ═══════════════════════════════════════════ */

export const ModelServing: Story = {
  name: 'Model Serving',
  render: () => (
    <div className="p-8 bg-[#F5F5F7] min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-1">Model Serving</h1>
        <p className="text-sm text-gray-500 mb-6">vLLM 기반 모델 서빙 및 모니터링</p>

        {/* Active Endpoints */}
        <Alert variant="success" className="mb-6">
          <CheckCircle className="h-4 w-4" />
          <AlertTitle>2개의 Serving Endpoint가 실행 중입니다.</AlertTitle>
          <AlertDescription>모든 서비스가 정상 동작하고 있습니다.</AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 gap-4 mb-8">
          {/* Serving Instance */}
          <Card className="!bg-white">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] rounded-xl flex items-center justify-center shadow-lg shadow-[var(--gradient-shadow-light)]">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">llama-3.1-8b-sft-ko</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500">LS-260414-0001</span>
                      <Badge variant="success">Production</Badge>
                      <StatusBadge status="Active" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Logs</Button>
                  <Button variant="destructive" size="sm">Stop</Button>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { icon: Activity, label: 'Requests/s', value: '142.3' },
                  { icon: Clock, label: 'Avg Latency', value: '45ms' },
                  { icon: Cpu, label: 'GPU Util', value: '78%' },
                  { icon: Zap, label: 'Tokens/s', value: '2,847' },
                ].map((m) => {
                  const Icon = m.icon
                  return (
                    <div key={m.label} className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4 text-gray-400" />
                        <span className="text-[11px] text-gray-500">{m.label}</span>
                      </div>
                      <p className="text-lg font-extrabold text-gray-900">{m.value}</p>
                    </div>
                  )
                })}
              </div>

              {/* Endpoint URLs */}
              <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Endpoint</h4>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-gray-400" />
                  <code className="text-xs font-mono text-gray-700 flex-1">https://llama-3-1-8b.serving.latte.internal/v1/chat/completions</code>
                  <button className="p-1 hover:bg-gray-200 rounded"><Copy className="w-3.5 h-3.5 text-gray-400" /></button>
                  <button className="p-1 hover:bg-gray-200 rounded"><ExternalLink className="w-3.5 h-3.5 text-gray-400" /></button>
                </div>
              </div>

              {/* cURL Example */}
              <div className="terminal-window rounded-xl p-4 mt-4">
                <div className="flex gap-1.5 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <pre className="font-mono text-xs text-gray-300 whitespace-pre-wrap">{`curl -X POST https://llama-3-1-8b.serving.latte.internal/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "llama-3.1-8b-sft-ko",
    "messages": [{"role": "user", "content": "안녕하세요"}],
    "max_tokens": 512
  }'`}</pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  ),
}

/* ═══════════════════════════════════════════
   5. Training Setup (Form)
   ═══════════════════════════════════════════ */

export const TrainingSetup: Story = {
  name: 'Training Setup Form',
  render: () => {
    const [lora, setLora] = useState(true)
    const [gradCkpt, setGradCkpt] = useState(true)
    return (
      <div className="p-8 bg-[#F5F5F7] min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Step Indicator */}
          <div className="flex items-start justify-between mb-10">
            {['Training\n설정', 'Dataset\n선택', '모델\n선택', '전처리', 'Training\nRecipe'].map((step, i) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shadow-lg ${
                    i < 4
                      ? 'bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white shadow-[var(--gradient-shadow-light)]'
                      : i === 4
                        ? 'bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white shadow-[var(--gradient-shadow-light)] ring-4 ring-primary-100'
                        : 'bg-gray-200 text-gray-400'
                  }`}>
                    {i < 4 ? <CheckCircle className="w-4 h-4" /> : i + 1}
                  </div>
                  <span className="text-[10px] text-gray-600 font-medium text-center w-14 whitespace-pre-line leading-tight">{step}</span>
                </div>
                {i < 4 && <div className={`flex-1 h-0.5 mx-0.5 mt-[18px] ${i < 4 ? 'bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]' : 'bg-gray-200'}`} />}
              </React.Fragment>
            ))}
          </div>

          <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Training Recipe</h1>
          <p className="text-sm text-gray-500 mb-6">하이퍼파라미터 및 LoRA 설정을 구성합니다.</p>

          <div className="grid grid-cols-2 gap-6">
            {/* Hyperparameters */}
            <Card className="!bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-4 h-4 text-primary-500" /> Hyperparameters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Learning Rate</Label>
                    <Input defaultValue="2e-5" className="font-mono bg-white" />
                  </div>
                  <div className="space-y-2">
                    <Label>Batch Size</Label>
                    <Input type="number" defaultValue="8" className="font-mono bg-white" />
                  </div>
                  <div className="space-y-2">
                    <Label>Epochs</Label>
                    <Input type="number" defaultValue="3" className="font-mono bg-white" />
                  </div>
                  <div className="space-y-2">
                    <Label>Max Seq Length</Label>
                    <Input type="number" defaultValue="2048" className="font-mono bg-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Optimizer</Label>
                  <Select defaultValue="adamw">
                    <option value="adamw">AdamW</option>
                    <option value="sgd">SGD</option>
                    <option value="adam">Adam</option>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>LR Scheduler</Label>
                  <Select defaultValue="cosine">
                    <option value="cosine">Cosine</option>
                    <option value="linear">Linear</option>
                    <option value="constant">Constant</option>
                  </Select>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <Label>Gradient Checkpointing</Label>
                  <Switch checked={gradCkpt} onCheckedChange={setGradCkpt} />
                </div>
              </CardContent>
            </Card>

            {/* LoRA Config */}
            <Card className="!bg-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-primary-500" /> LoRA Configuration
                  </CardTitle>
                  <Switch checked={lora} onCheckedChange={setLora} />
                </div>
              </CardHeader>
              <CardContent className={`space-y-4 ${!lora ? 'opacity-40 pointer-events-none' : ''}`}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Rank (r)</Label>
                    <Input type="number" defaultValue="16" className="font-mono bg-white" />
                  </div>
                  <div className="space-y-2">
                    <Label>Alpha</Label>
                    <Input type="number" defaultValue="32" className="font-mono bg-white" />
                  </div>
                  <div className="space-y-2">
                    <Label>Dropout</Label>
                    <Input defaultValue="0.05" className="font-mono bg-white" />
                  </div>
                  <div className="space-y-2">
                    <Label>Precision</Label>
                    <Select defaultValue="bf16">
                      <option value="bf16">BFloat16</option>
                      <option value="fp16">Float16</option>
                      <option value="fp32">Float32</option>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Target Modules</Label>
                  <div className="flex gap-2 flex-wrap">
                    {['q_proj', 'k_proj', 'v_proj', 'o_proj', 'gate_proj', 'up_proj', 'down_proj'].map((m) => (
                      <span key={m} className="text-[11px] font-mono px-2 py-1 rounded-lg bg-primary-50 text-primary-700 font-medium">{m}</span>
                    ))}
                  </div>
                </div>

                {!lora && (
                  <Alert variant="warning">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>LoRA가 비활성화되면 전체 파라미터를 학습합니다. GPU 메모리 사용량이 크게 증가합니다.</AlertDescription>
                  </Alert>
                )}
              </CardContent>
              <CardFooter className="justify-end gap-3 border-t border-gray-100 pt-6">
                <Button variant="outline">이전</Button>
                <Button variant="gradient" className="gap-2">다음 <ArrowRight className="w-4 h-4" /></Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    )
  },
}
