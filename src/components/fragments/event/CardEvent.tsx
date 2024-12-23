import React from 'react'
import DeskCardEvent from './DescCardEvent'
import TimeCardEvent from './TimeCardEvent'
import TitleCardEvent from './TitleCardEvent'
import { assetItems } from '../../../assets/AnotherAssets'

interface CardEventProps {
     type: 'event' | 'profile'
}

const CardEvent: React.FC<CardEventProps> = React.memo(({ type }) => {
     return (
          <div className="w-full h-full border border-[#302F35] rounded-2xl p-4 space-y-4
          dark:border-transparent dark:bg-[#302F35]">
               <div>
                    <img className={`w-full object-cover rounded-xl
                    ${type === 'event' ? 'h-44 md:h-40 lg:h-52 xl:h-64' : 'h-32 md:h-40'}`}
                         src={type === 'event' ? assetItems.EventImage : assetItems.MeichuLogo} alt="" />
               </div>
               <div className={`flex flex-col gap-y-2 md:gap-y-4`}>
                    <TitleCardEvent type={type} />
                    <DeskCardEvent type={type} />
                    <TimeCardEvent />
               </div>
          </div>
     )
})

export default CardEvent