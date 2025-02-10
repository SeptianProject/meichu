import { useAppSelector } from '../redux/hook'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'

const useThemeAwareSkeleton = () => {
     const mode = useAppSelector((state) => state.ui.mode)

     const skeletonProps = {
          baseColor: mode === 'dark' ? '#08070F' : '#ebebeb',
          highlightColor: mode === 'dark' ? '#15151A' : '#f5f5f5'
     }

     return {
          ThemeAwareSkeleton: (props: SkeletonProps) => <Skeleton {...skeletonProps} {...props} />
     }
}

export default useThemeAwareSkeleton