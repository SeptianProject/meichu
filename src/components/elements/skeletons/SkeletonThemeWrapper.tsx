import React from 'react'
import { useSkeletonTheme } from '../../../hooks/useSkeletonTheme'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface SkeletonThemeWrapperProps {
     children: React.ReactNode
}

export const SkeletonThemeWrapper = ({ children }: SkeletonThemeWrapperProps) => {
     const skeletonTheme = useSkeletonTheme()

     return (
          <SkeletonTheme
               baseColor={skeletonTheme.baseColor}
               highlightColor={skeletonTheme.highlightColor}>
               {children}
          </SkeletonTheme>
     )
}

export default SkeletonThemeWrapper