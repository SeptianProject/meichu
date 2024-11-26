import React from "react"

type TitleCardEventProps = {
     type: 'event' | 'profile'
}

const TitleCardEvent: React.FC<TitleCardEventProps> = ({ type }) => {
     return (
          <div className="flex items-center justify-between w-full">
               <h1 className="text-sm sm:text-base font-semibold dark:text-light">
                    {type === 'event' ? 'Giveaway Assets Chinnese' : 'Eyebrows Cute Style'}
               </h1>
               <button className="font-semibold text-sm font-inter 
               text-light bg-bluePrimary w-24 py-[5px] rounded-full">
                    {type === 'event' ? 'See Event' : 'See Details'}
               </button>
          </div>
     )
}

export default TitleCardEvent