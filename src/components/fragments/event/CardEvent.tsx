import React from 'react'
import { assetItems } from '../../../assets/assets'
import Button from '../../elements/buttons/Button'
import { BsClock } from 'react-icons/bs'

interface CardEventProps {
     isEvent?: boolean
     onClick?: VoidFunction
     image?: string
     title?: string
     time?: string
}

const CardEvent: React.FC<CardEventProps> = React.memo(({ isEvent, image, title, time, onClick }) => {
     return (
          <div className={`w-full h-full border border-[#302F35] rounded-2xl space-y-4
          dark:border-transparent dark:bg-cardBackground
          ${isEvent ? 'p-6' : 'px-3 py-4'}`}>
               <div>
                    <img className={`w-full object-cover rounded-2xl
                    ${isEvent ? 'h-44 md:h-40 lg:h-52 xl:h-60' : 'h-36 md:h-40'}`}
                         src={image ? image : assetItems.EventImage} alt="" />
               </div>
               <div className={`flex flex-col gap-y-2 md:gap-y-4`}>
                    <div className="flex items-center justify-between gap-x-2 w-full">
                         <h1 className='text-[12px] font-semibold dark:text-light sm:text-sm md:text-lg'>
                              {isEvent ? 'Giveaway Assets Chinnese' : title ?? 'Giveaway Assets Chinnese'}
                         </h1>
                         <Button
                              isGradient
                              isCancel={false}
                              onClick={onClick}
                              title={isEvent ? 'See Event' : 'See Details'}
                              className={`text-[12px] py-[5px]
                         ${isEvent ? ' w-[7rem] sm:text-sm' : 'w-[5rem] sm:text-[12px] md:w-[6rem]'}`}
                         />
                    </div>
                    <p className={`font-light text-[10px] text-opacity-70
                    tracking-wide md:leading-6 dark:font-extralight dark:text-light/70 md:pr-12
                    ${isEvent ? 'sm:text-[12px] md:text-[15.5px]' : 'sm:text-[10px] md:text-[14px]'}`}>
                         {isEvent
                              ? 'Whether you have a question about talents, pricing, portfolio, or anything else, our team, Whether you have a question about talents, pricing.'
                              : 'Your request is being processed. Please hold on for a moment as we carefully craft your product to ensure the highest quality, Thank You!'}
                    </p>
                    <div className="flex items-center gap-x-3">
                         <BsClock className="text-yellowLinear1 size-4 md:size-6" />
                         <p className="text-xs font-light text-opacity-80 dark:text-light
                         dark:text-opacity-80 sm:text-[14px]">
                              {time ? time : 'Feb 25, 2024'}
                         </p>
                    </div>
               </div>
          </div>
     )
})

export default CardEvent