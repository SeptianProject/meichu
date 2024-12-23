import React from "react"


type buttonSwitchDiscoverProps = {
     onClick: () => void
     text: string
     value?: number
     onFavored: boolean
}

const ButtonSwitchDiscover: React.FC<buttonSwitchDiscoverProps> = React.memo(({
     onClick,
     text,
     value,
     onFavored
}) => {

     return (
          <button onClick={onClick}
               className={`dark:text-light text-xs lg:text-base
                    transition-all duration-500 ease-in-out
               ${onFavored ? 'font-semibold' : ' font-light'}`}>
               {text}
               <span className="">({value})</span>
          </button>
     )
})

export default ButtonSwitchDiscover