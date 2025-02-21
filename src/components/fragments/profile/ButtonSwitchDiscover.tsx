import React from "react"


type buttonSwitchDiscoverProps = {
     onClick: VoidFunction
     text: string
     value?: number
     isFavored: boolean
}

const ButtonSwitchDiscover: React.FC<buttonSwitchDiscoverProps> = React.memo(({
     onClick,
     text,
     value,
     isFavored
}) => {

     return (
          <button
               onClick={onClick}
               className={`text-sm lg:text-base font-medium transition-all duration-300 ease-in-out
               ${isFavored ? 'dark:text-light scale-100' : 'scale-90 dark:text-light/60'}`}>
               {text}
               <span className="">({value})</span>
          </button>
     )
})

export default ButtonSwitchDiscover