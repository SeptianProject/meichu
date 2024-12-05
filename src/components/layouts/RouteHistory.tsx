import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import BounceAnimation from '../animations/BounceAnimation'

type RouteHistoryProps = {
     prevRoute?: string | boolean
     prevText?: string
     currentRoute: string
     currentText: string
}

const RouteHistory = ({ currentRoute, currentText, prevRoute, prevText }: RouteHistoryProps) => {
     return (
          <div className="flex items-center pt-32 lg:pt-40">
               <BounceAnimation
                    hiddenCoordinates={{ x: -50 }}>
                    <Link to={'/'}
                         className='font-medium text-dark dark:text-light font-poppins 
                    text-opacity-80'>
                         Home
                    </Link>
               </BounceAnimation>
               {prevRoute && (
                    <>
                         <BounceAnimation
                              delayVal={0.5}
                              hiddenCoordinates={{ x: -20 }}>
                              <MdKeyboardArrowRight className="text-dark dark:text-light size-6 text-opacity-80" />
                         </BounceAnimation>
                         <BounceAnimation
                              delayVal={1}
                              hiddenCoordinates={{ x: -20 }}>
                              <Link to={prevRoute.toString()} className='font-medium text-dark dark:text-light font-poppins text-opacity-80'>{prevText}</Link>
                         </BounceAnimation>
                    </>
               )}
               <BounceAnimation
                    delayVal={prevRoute ? 1.5 : 0.5}
                    hiddenCoordinates={{ x: -20 }}>
                    <MdKeyboardArrowRight
                         className="text-dark dark:text-light size-6 text-opacity-80" />
               </BounceAnimation>
               <BounceAnimation
                    delayVal={prevRoute ? 2 : 1}
                    hiddenCoordinates={{ x: -20 }}>
                    <Link to={currentRoute} className='font-medium text-dark dark:text-light 
                    font-poppins text-opacity-80'>
                         {currentText}
                    </Link>
               </BounceAnimation>
          </div>
     )
}

export default RouteHistory