import type { Preview } from 'storybook'
import '../src/styles/themes/latte.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'latte',
      values: [
        { name: 'latte', value: '#F5F5F7' },
        { name: 'white', value: '#ffffff' },
        { name: 'dark', value: '#1e293b' },
      ],
    },
  },
}

export default preview
