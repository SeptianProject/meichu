

type buttonSwitchDiscoverProps = {
     onClick: () => void
     text: string
     isFavored: boolean
}

const ButtonSwitchDiscover: React.FC<buttonSwitchDiscoverProps> = ({
     onClick,
     text,
     isFavored
}) => {
     return (
          <button onClick={onClick}
               className={`dark:text-light text-xs lg:text-base
               ${isFavored ? 'font-semibold' : ' font-light'}`}>
               {text}
          </button>
     )
}

export default ButtonSwitchDiscover