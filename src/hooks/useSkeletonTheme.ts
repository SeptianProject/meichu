import { useAppSelector } from '../redux/hook'
import type { RootState } from '../redux/store'

export const useSkeletonTheme = () => {
     const mode = useAppSelector((state: RootState) => state.ui.mode)

     return {
          baseColor: mode === 'dark' ? '#212121' : '#ebebeb',
          highlightColor: mode === 'dark' ? '#1A1A1A' : '#f5f5f5'
     }
}