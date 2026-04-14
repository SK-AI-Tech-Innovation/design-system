import React, { useEffect } from 'react'

const themeStylesheets: Record<string, string> = {
  latte: '/src/styles/themes/latte.css',
  ace: '/src/styles/themes/ace.css',
}

export function ThemeDecorator(Story: React.ComponentType, context: { globals: { theme: string } }) {
  const theme = context.globals.theme || 'latte'

  useEffect(() => {
    const existingLink = document.getElementById('ds-theme-link') as HTMLLinkElement | null
    if (existingLink) {
      existingLink.href = themeStylesheets[theme]
    } else {
      const link = document.createElement('link')
      link.id = 'ds-theme-link'
      link.rel = 'stylesheet'
      link.href = themeStylesheets[theme]
      document.head.appendChild(link)
    }
  }, [theme])

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <Story />
    </div>
  )
}
