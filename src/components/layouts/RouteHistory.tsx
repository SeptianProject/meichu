import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

type RouteHistoryProps = {
     prevRoute?: string | boolean
     prevText?: string
     currentRoute: string
     currentText: string
}

const RouteHistory = ({ currentRoute, currentText, prevRoute, prevText }: RouteHistoryProps) => {
     return (
          <div className="flex items-center pt-32 lg:pt-40">
               <Link to={'/'} className='font-medium text-light font-poppins text-opacity-80'>
                    Home
               </Link>
               {prevRoute && (
                    <>
                         <MdKeyboardArrowRight className="text-light size-6 text-opacity-80" />
                         <Link to={prevRoute.toString()} className='font-medium text-light font-poppins text-opacity-80'>{prevText}</Link>
                    </>
               )}
               <MdKeyboardArrowRight className="text-light size-6 text-opacity-80" />
               <Link to={currentRoute} className='font-medium text-light font-poppins text-opacity-80'>
                    {currentText}
               </Link>
          </div>
     )
}

export default RouteHistory