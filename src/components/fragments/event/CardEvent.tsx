import { bestSellerImages } from '../../../assets/assets'
import DeskCardEvent from './DescCardEvent'
import TimeCardEvent from './TimeCardEvent'
import TitleCardEvent from './TitleCardEvent'

const CardEvent = () => {
     return (
          <div className="w-full h-80 border border-[#302F35] rounded-2xl p-4 space-y-2
          dark:border-transparent dark:bg-[#302F35]">
               <div>
                    <img className="w-full h-[145px] sm:h-40 md:h-36 object-cover rounded-xl"
                         src={bestSellerImages[1]} alt="" />
               </div>
               <div className="flex flex-col gap-y-3">
                    <TitleCardEvent />
                    <DeskCardEvent />
                    <TimeCardEvent />
               </div>
          </div>
     )
}

export default CardEvent