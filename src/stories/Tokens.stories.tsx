import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

const meta = {
  title: 'Design Tokens/Colors & Typography',
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj

export const ThemeColors: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-[#F5F5F7] rounded-2xl">
      {/* Primary Scale */}
      <div>
        <h3 className="text-sm font-bold text-gray-800 mb-3">Primary Scale</h3>
        <div className="flex gap-2">
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((n) => (
            <div key={n} className="flex flex-col items-center gap-1">
              <div className={`w-12 h-12 rounded-xl bg-primary-${n} shadow-sm`} />
              <span className="text-[10px] font-mono text-gray-500">{n}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient */}
      <div>
        <h3 className="text-sm font-bold text-gray-800 mb-3">Gradient</h3>
        <div className="flex gap-3 items-center">
          <div className="w-48 h-12 rounded-xl bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] shadow-lg shadow-[var(--gradient-shadow)]" />
          <span className="text-xs font-mono text-gray-500">from-[var(--gradient-from)] to-[var(--gradient-to)]</span>
        </div>
      </div>

      {/* Semantic */}
      <div>
        <h3 className="text-sm font-bold text-gray-800 mb-3">Semantic Colors</h3>
        <div className="grid grid-cols-5 gap-3">
          {[
            { name: 'primary', cls: 'bg-primary' },
            { name: 'destructive', cls: 'bg-destructive' },
            { name: 'success', cls: 'bg-emerald-500' },
            { name: 'warning', cls: 'bg-amber-500' },
            { name: 'muted', cls: 'bg-muted' },
          ].map((c) => (
            <div key={c.name} className="flex flex-col items-center gap-1">
              <div className={`w-12 h-12 rounded-xl ${c.cls} shadow-sm`} />
              <span className="text-[10px] font-mono text-gray-500">{c.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Gray Scale */}
      <div>
        <h3 className="text-sm font-bold text-gray-800 mb-3">Gray Scale</h3>
        <div className="flex gap-2">
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((n) => (
            <div key={n} className="flex flex-col items-center gap-1">
              <div className={`w-12 h-12 rounded-xl bg-gray-${n} shadow-sm`} />
              <span className="text-[10px] font-mono text-gray-500">{n}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
}

export const Typography: Story = {
  render: () => (
    <div className="space-y-6 p-6 bg-[#F5F5F7] rounded-2xl max-w-lg">
      <div>
        <p className="text-[10px] text-gray-400 font-medium mb-2 uppercase tracking-wider">Plus Jakarta Sans</p>
        <p className="text-4xl font-extrabold text-gray-900">Display Title</p>
        <p className="text-2xl font-extrabold text-gray-900 mt-2">Page Heading</p>
        <p className="text-lg font-bold text-gray-800 mt-2">Section Title</p>
        <p className="text-sm font-bold text-gray-800 mt-2">Card Title</p>
        <p className="text-sm text-gray-600 mt-2">Body text — 대규모 언어 모델의 Fine-Tuning부터 Serving까지 한 곳에서 관리합니다.</p>
        <p className="text-xs text-gray-500 mt-2">Small text / description</p>
        <p className="text-[11px] text-gray-400 mt-2">Caption / metadata</p>
      </div>
      <div className="border-t border-gray-200 pt-4">
        <p className="text-[10px] text-gray-400 font-medium mb-2 uppercase tracking-wider">JetBrains Mono</p>
        <div className="terminal-window rounded-xl p-4">
          <p className="font-mono text-sm text-emerald-400">$ python train.py --model llama-3.1-8b</p>
          <p className="font-mono text-xs text-gray-400 mt-1">Epoch 3/10 | Loss: 0.0234 | LR: 2e-5</p>
          <p className="font-mono text-xs text-blue-400 mt-1">✓ Checkpoint saved: step-1500</p>
        </div>
      </div>
      <div className="border-t border-gray-200 pt-4">
        <p className="text-[10px] text-gray-400 font-medium mb-2 uppercase tracking-wider">Gradient Text</p>
        <p className="text-3xl font-extrabold gradient-text">LATTE</p>
      </div>
    </div>
  ),
}

export const GlassPatterns: Story = {
  name: 'Glass & Surface Patterns',
  render: () => (
    <div className="space-y-6 p-8 bg-[#F5F5F7] rounded-2xl relative">
      {/* Ambient glow simulation */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[var(--gradient-from)]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div>
        <p className="text-[10px] text-gray-400 font-medium mb-3 uppercase tracking-wider">Glass Card (default)</p>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm p-6 w-64">
          <p className="text-sm font-bold text-gray-800">Glass Card</p>
          <p className="text-xs text-gray-500 mt-1">bg-white/80 backdrop-blur-sm</p>
        </div>
      </div>

      <div>
        <p className="text-[10px] text-gray-400 font-medium mb-3 uppercase tracking-wider">Glass Sidebar</p>
        <div className="glass-sidebar p-6 w-64">
          <p className="text-sm font-bold text-gray-800">Sidebar Panel</p>
          <p className="text-xs text-gray-500 mt-1">bg-white/60 backdrop-blur-xl</p>
        </div>
      </div>

      <div>
        <p className="text-[10px] text-gray-400 font-medium mb-3 uppercase tracking-wider">Solid Card</p>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 w-64">
          <p className="text-sm font-bold text-gray-800">Solid Card</p>
          <p className="text-xs text-gray-500 mt-1">bg-white rounded-2xl</p>
        </div>
      </div>

      <div>
        <p className="text-[10px] text-gray-400 font-medium mb-3 uppercase tracking-wider">Terminal Window</p>
        <div className="terminal-window rounded-xl p-4 w-80">
          <div className="flex gap-1.5 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <p className="font-mono text-xs text-gray-300">bg-[#1e293b] + font-mono</p>
        </div>
      </div>
    </div>
  ),
}
