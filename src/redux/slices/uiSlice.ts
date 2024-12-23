import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppThunk } from "../store"

interface UIState {
     mode: 'light' | 'dark'
     screenSize: 'mobile' | 'tablet' | 'desktop'
}

const getInititialMode = (): 'light' | 'dark' => {
     if (typeof window === 'undefined') return 'dark'

     const storedTheme = localStorage.getItem('theme')
     if (storedTheme) return storedTheme as 'light' | 'dark'

     localStorage.setItem('theme', 'dark')
     return 'dark'
}

const getInitialScreenSize = (): 'mobile' | 'tablet' | 'desktop' => {
     if (typeof window === 'undefined') return 'desktop'

     const width = window.innerWidth
     if (width < 768) return 'mobile'
     if (width < 1024) return 'tablet'

     return 'desktop'
}

const initialState: UIState = {
     mode: getInititialMode(),
     screenSize: getInitialScreenSize()
}

const uiSlice = createSlice({
     name: 'ui',
     initialState,
     reducers: {
          setMode(state, action: PayloadAction<'light' | 'dark'>) {
               state.mode = action.payload
          },
          setScreenSize(state, action: PayloadAction<'mobile' | 'tablet' | 'desktop'>) {
               state.screenSize = action.payload
          }
     }
})

export const { setMode, setScreenSize } = uiSlice.actions

const applyDarkMode = (isDark: boolean) => {
     document.documentElement.classList.toggle('dark', isDark)
}

export const toggleDarkMode = (): AppThunk => (dispatch, getState) => {
     const currentMode = getState().ui.mode
     const newMode = currentMode === 'light' ? 'dark' : 'light'

     localStorage.setItem('theme', newMode)
     applyDarkMode(newMode === 'dark')
     dispatch(setMode(newMode))
}

export const initializeUI = (): AppThunk => (dispatch) => {
     const initialMode = getInititialMode()
     applyDarkMode(initialMode === 'dark')

     const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
     mediaQuery.addEventListener('change', (e) => {
          const newMode = e.matches ? 'dark' : 'light'
          dispatch(setMode(newMode))
          localStorage.setItem('theme', newMode)
          applyDarkMode(e.matches)
     })

     const handleResize = () => {
          const width = window.innerWidth
          let newSize: 'mobile' | 'tablet' | 'desktop'

          if (width < 768) newSize = 'mobile'
          else if (width < 1024) newSize = 'tablet'
          else newSize = 'desktop'

          dispatch(setScreenSize(newSize))
     }

     window.addEventListener('resize', handleResize)
}

export default uiSlice.reducer