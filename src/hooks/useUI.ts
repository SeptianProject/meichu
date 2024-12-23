import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { initializeUI, toggleDarkMode } from '../redux/slices/uiSlice'
import { useAppDispatch } from '../redux/hook'

const useUI = () => {
     const dispatch = useAppDispatch()
     const mode = useSelector((state: RootState) => state.ui.mode)
     const screenSize = useSelector((state: RootState) => state.ui.screenSize)

     useEffect(() => {
          dispatch(initializeUI())
     }, [dispatch])

     return {
          mode,
          screenSize,
          toggleDarkMode: () => dispatch(toggleDarkMode())
     }
}

export default useUI