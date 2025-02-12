import { MotionProps } from "motion/react";
import React from "react";

export interface BaseAnimationProps extends Partial<MotionProps> {
     children?: React.ReactNode
     className?: string
}

export interface CoordinateProps {
     x?: number
     y?: number
}

export const BASE_TRANSITION = {
     duration: 0.2
}

export const SPRING_TRANSITION = {
     type: "spring",
     stiffness: 100,
     damping: 10
} as const

export const BASE_VIEWPORT = {
     once: true,
     amount: 0.2
} as const