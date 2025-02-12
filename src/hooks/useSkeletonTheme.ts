import { useAppSelector } from '../redux/hook'
import type { RootState } from '../redux/store'

export const useSkeletonTheme = () => {
     const mode = useAppSelector((state: RootState) => state.ui.mode)

     return {
          baseColor: mode === 'dark' ? '#08070F' : '#ebebeb',
          highlightColor: mode === 'dark' ? '#15151A' : '#f5f5f5'
     }
}