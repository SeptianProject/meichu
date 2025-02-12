import { useCallback, useState } from "react"

export const usePasswordVisibility = (fields: string[] = ['password']) => {
     const [visibilityState, setVisibilityState] = useState<Record<string, boolean>>(
          fields.reduce((acc, field) => ({ ...acc, [field]: false }), {})
     )

     const toggleVisibility = useCallback((field: string) => {
          setVisibilityState(prev => ({
               ...prev,
               [field]: !prev[field]
          }))
     }, [])

     return {
          visibilityState,
          toggleVisibility
     }
}