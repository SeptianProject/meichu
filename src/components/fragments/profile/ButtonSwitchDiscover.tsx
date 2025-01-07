import React from "react"


type buttonSwitchDiscoverProps = {
     onClick: () => void
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
          <button onClick={onClick}
               className={`text-sm lg:text-base transition-all duration-500 ease-in-out
               ${isFavored ? 'font-semibold dark:text-light' : ' font-light dark:text-light/60'}`}>
               {text}
               <span className="">({value})</span>
          </button>
     )
})

export default ButtonSwitchDiscover