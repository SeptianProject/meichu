import BounceAnimation from "../../../animations/BounceAnimation"

type TextTaglineProps = {
     text: string
     className?: string
}

const TextTagline = ({ text, className }: TextTaglineProps) => {
     return (
          <div className={`flex flex-col gap-y-2 w-fit`}>
               <BounceAnimation
                    delayVal={0.5}
                    hiddenCoordinates={{ x: -50 }}>
                    <h1 className={`text-2xl dark:text-light uppercase ${className}`}>{text}</h1>
               </BounceAnimation>
               <BounceAnimation
                    delayVal={0.5}
                    hiddenCoordinates={{ x: 50 }}>
                    <div className="w-full h-[3px] rounded-full bg-gradient-to-r 
                         from-[#6A45BE] to-transparent dark:to-[#312058] dark:to-50%" />
               </BounceAnimation>
          </div>
     )
}

export default TextTagline