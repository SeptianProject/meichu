import { mdiStarFourPoints } from '@mdi/js'
import React from 'react'

type StarProps = {
     className?: string
}

const Star: React.FC<StarProps> = React.memo(({ className }) => {
     return (
          <svg
               className={`absolute size-5 md:size-8 lg:size-12 ${className}`}
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               width="48"
               height="48">
               <defs>
                    <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                         <stop offset="9%" stopColor="#865319" />
                         <stop offset="37%" stopColor="#fac561" />
                         <stop offset="48%" stopColor="#a27201" />
                         <stop offset="56%" stopColor="#865319" />
                         <stop offset="65%" stopColor="#ecb859" />
                         <stop offset="79%" stopColor="#a07002" />
                    </linearGradient>
                    <linearGradient id="white-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                         <stop offset="0%" stopColor="#ffffff" />
                         <stop offset="100%" stopColor="#ffffff" />
                    </linearGradient>
               </defs>
               <path
                    d={mdiStarFourPoints}
                    className="fill-[url(#gold-gradient)]"
               />
          </svg>
     )
})

export default Star