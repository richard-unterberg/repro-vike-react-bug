import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

import '@unocss/reset/tailwind.css'
import '#components/styles.css'
import 'virtual:uno.css'

import Menu from '#components/Menu'

const queryClient = new QueryClient()

const App = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <Menu isHeader />
    <div className="w-full min-h-dvh overflow-x-hidden xl:overflow-x-initial">
      <div className="pt-12">{children}</div>
    </div>
  </QueryClientProvider>
)

export default App
