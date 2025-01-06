import React from "react"
import Button from "../../elements/buttons/Button"

type TitleCardEventProps = {
     type: 'event' | 'profile'
     title?: string
}

const TitleCardEvent: React.FC<TitleCardEventProps> = React.memo(({ type, title }) => {
     return (
          <div className="flex items-center justify-between w-full">
               <h1 className="text-[12px] font-semibold dark:text-light
               sm:text-sm md:text-lg">
                    {type === 'event' ? 'Giveaway Assets Chinnese' : title}
               </h1>
               <Button
                    isGradient
                    isCancel={false}
                    title={type === 'event' ? 'See Event' : 'See Details'}
                    className="text-[12px] w-20 py-[3px] sm:text-sm sm:w-28 sm:py-[5px]"
               />
          </div>
     )
})

export default TitleCardEvent