import vikeReact from 'vike-react/config'
import type { Config } from 'vike/types'

// Default configs (can be overridden by pages)
export default {
  ssr: true,
  clientRouting: true,
  extends: [vikeReact],
  meta: {
    data: {
      env: { server: true, client: false },
    },
  },
} satisfies Config
