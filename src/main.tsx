import App from './App.tsx'
import './index.css'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './redux/store.ts'
import { SkeletonTheme } from 'react-loading-skeleton'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <SkeletonTheme baseColor='#08070F' highlightColor='#15151A'>
            <App />
          </SkeletonTheme>
        </QueryClientProvider>
      </Provider>
    </Router>
  </StrictMode>
)
