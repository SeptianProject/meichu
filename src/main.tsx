import App from './App.tsx'
import './index.css'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { SkeletonTheme } from 'react-loading-skeleton'
import store from './redux/store.ts'

const queryClient = new QueryClient()

const getInitialTheme = () => {
  const theme = localStorage.getItem('theme') || 'dark'
  return {
    baseColor: theme === 'dark' ? '#08070F' : '#ebebeb',
    highlightColor: theme === 'dark' ? '#15151A' : '#f5f5f5'
  }
}

const initialTheme = getInitialTheme()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <SkeletonTheme
            baseColor={initialTheme.baseColor}
            highlightColor={initialTheme.highlightColor}>
            <App />
          </SkeletonTheme>
        </QueryClientProvider>
      </Provider>
    </Router>
  </StrictMode>
)
