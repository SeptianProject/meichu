import { BsClock } from 'react-icons/bs'

const TimeCardEvent = () => {
     return (
          <div className="flex items-center gap-x-3">
               <BsClock className="text-bluePrimary size-4 md:size-6" />
               <p className="text-xs font-light text-opacity-80 dark:text-light
                         dark:text-opacity-80 sm:text-sm">
                    Feb 25, 2024
               </p>
          </div>
     )
}

export default TimeCardEvent