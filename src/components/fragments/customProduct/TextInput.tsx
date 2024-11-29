import { FC } from "react";
import BounceAnimation from "../../../animations/BounceAnimation";

interface TextInputProps {
     label: string
     placeholder: string
     delayAnimation?: number
}

const TextInput: FC<TextInputProps> = ({ label, placeholder, delayAnimation }) => {
     return (
          <div className="space-y-8">
               <BounceAnimation
                    delayVal={delayAnimation}
                    hiddenCoordinates={{ x: -50 }}>
                    <h1 className="text-xl dark:text-light font-semibold">{label}</h1>
               </BounceAnimation>
               <BounceAnimation
                    delayVal={delayAnimation}
                    hiddenCoordinates={{ y: 50 }}>
                    <input type="text" placeholder={placeholder}
                         className="text-light dark:text-light font-poppins text-opacity-70 bg-transparent border 
                                   border-[#5E5A5A] w-full py-8 rounded-2xl px-10" />
               </BounceAnimation>
          </div>
     );
}

export default TextInput;