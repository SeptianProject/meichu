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
          <div className='w-full h-full border border-[#302F35] rounded-2xl space-y-4
          dark:border-transparent bg-[#C2C2C4]/30 dark:bg-cardBackground px-3 py-4
          hover:-translate-y-3 transition-all duration-500'>
               <div>
                    <img className='w-full object-cover rounded-2xl h-44 md:h-48 lg:h-64'
                         src={image ? image : assetItems.EventImage} alt="" loading='lazy' />
               </div>
               <div className='flex flex-col gap-y-2 md:gap-y-4'>
                    <div className="flex items-center justify-between gap-x-2 w-full">
                         <h1 className='text-[12px] font-semibold dark:text-light xs:text-sm md:text-lg'>
                              {isEvent ? 'Giveaway Assets Chinnese' : title ?? 'Giveaway Assets Chinnese'}
                         </h1>
                         <Button
                              isGold
                              onClick={onClick}
                              title={isEvent ? 'See Event' : 'See Details'}
                              className='text-[12px] py-[2px] w-[5rem] xs:text-[12px] md:py-1 md:w-[7rem]'
                         />
                    </div>
                    <p className='font-light text-[10px] text-opacity-70 xs:text-[10px] md:text-[14px]
                    tracking-wide md:leading-6 dark:font-extralight dark:text-light/70 md:pr-12'>
                         {isEvent
                              ? 'Whether you have a question about talents, pricing, portfolio, or anything else, our team, Whether you have a question about talents, pricing.'
                              : 'Your request is being processed. Please hold on for a moment as we carefully craft your product to ensure the highest quality, Thank You!'}
                    </p>
                    <div className="flex items-center gap-x-3">
                         <BsClock className="text-yellowLinear1 size-4 md:size-6" />
                         <p className="text-xs font-light text-opacity-80 dark:text-light
                         dark:text-opacity-80 xs:text-[14px]">
                              {time ? time : 'Feb 25, 2024'}
                         </p>
                    </div>
               </div>
          </div>
     )
})

export default CardEvent