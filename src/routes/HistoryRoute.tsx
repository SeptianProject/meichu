import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import React from 'react'

type RouteHistoryProps = {
     prevRoute?: string | boolean
     prevText?: string
     currentRoute: string
     currentText: string
}

const RouteHistory: React.FC<RouteHistoryProps> = React.memo(({
     currentRoute,
     currentText,
     prevRoute,
     prevText
}) => {
     return (
          <div className="flex items-center pt-32 lg:pt-40">
               <Link to={'/'}
                    className='font-medium text-dark dark:text-light font-poppins 
                    text-opacity-80'>
                    Home
               </Link>
               {prevRoute && (
                    <>
                         <MdKeyboardArrowRight className="text-dark dark:text-light size-6 text-opacity-80" />
                         <Link to={prevRoute.toString()} className='font-medium text-dark dark:text-light font-poppins text-opacity-80'>{prevText}</Link>
                    </>
               )}
               <MdKeyboardArrowRight className="text-dark dark:text-light size-6 text-opacity-80" />
               <Link to={currentRoute} className='font-medium text-dark dark:text-light 
                    font-poppins text-opacity-80'>
                    {currentText}
               </Link>
          </div>
     )
})

export default RouteHistory