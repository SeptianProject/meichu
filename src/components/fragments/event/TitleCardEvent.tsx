import React from "react"

type TitleCardEventProps = {
     type: 'event' | 'profile'
}

const TitleCardEvent: React.FC<TitleCardEventProps> = ({ type }) => {
     return (
          <div className="flex items-center justify-between w-full">
               <h1 className="text-[12px] font-semibold dark:text-light
               sm:text-sm md:text-base">
                    {type === 'event' ? 'Giveaway Assets Chinnese' : 'Eyebrows Cute Style'}
               </h1>
               <button className="font-semibold text-[12px] font-inter 
               text-light bg-bluePrimary w-20 py-[3px] rounded-full
               hover:bg-bluePrimary/80 transition-all duration-300
               sm:text-sm sm:w-24 sm:py-[5px]">
                    {type === 'event' ? 'See Event' : 'See Details'}
               </button>
          </div>
     )
}

export default TitleCardEvent