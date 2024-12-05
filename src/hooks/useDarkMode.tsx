import React from "react";

export const useDarkMode = () => {
     const [isDarkMode, setIsDarkMode] = React.useState(() => {
          const storedTheme = localStorage.getItem('theme')
          return storedTheme ? storedTheme === 'dark'
               : window.matchMedia('(prefers-color-scheme: dark)').matches
     })

     const toggleDarkMode = () => {
          const newDarkMode = !isDarkMode
          setIsDarkMode(newDarkMode)
          localStorage.setItem('theme', newDarkMode ? 'dark' : 'light')
          document.documentElement.classList.toggle('dark', newDarkMode)
          window.dispatchEvent(new Event('theme-change'))
     }

     React.useEffect(() => {
          const handleThemeChange = () => {
               const theme = localStorage.getItem('theme')
               setIsDarkMode(theme === 'dark')
               document.documentElement.classList.toggle('dark', theme === 'dark')
          }

          const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
          const handleMediaChange = (e: MediaQueryListEvent) => {
               const newDarkMode = e.matches
               setIsDarkMode(newDarkMode)
               localStorage.setItem('theme', newDarkMode ? 'dark' : 'light')
               document.documentElement.classList.toggle('dark', newDarkMode)
          }

          window.addEventListener('theme-change', handleThemeChange)
          window.addEventListener('storage', handleThemeChange)
          mediaQuery.addEventListener('change', handleMediaChange)

          return () => {
               window.removeEventListener('theme-change', handleThemeChange)
               window.removeEventListener('storage', handleThemeChange)
               mediaQuery.removeEventListener('change', handleMediaChange)
          }
     }, [])

     React.useEffect(() => {
          document.documentElement.classList.toggle('dark', isDarkMode)
     }, [isDarkMode])

     return { isDarkMode, toggleDarkMode }
}