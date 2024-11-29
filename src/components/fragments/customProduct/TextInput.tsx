import { FC } from "react";
import BounceAnimation from "../../../animations/BounceAnimation";

interface TextInputProps {
     name: 'product' | 'person'
}

const TextInput: FC<TextInputProps> = ({ name }) => {
     return (
          <div className="space-y-8">
               <BounceAnimation
                    delayVal={0.5}
                    hiddenCoordinates={{ x: -50 }}>
                    <h1 className="text-xl dark:text-light font-semibold">
                         {name === 'product' ? 'Name Your Product' : 'Enter Your Name'}
                    </h1>
               </BounceAnimation>
               <input
                    type="text"
                    placeholder={name === 'product'
                         ? 'E.G Redeemable T-Shirt With Logo'
                         : 'Ex: Septianzz'}
                    className="text-light dark:text-light font-poppins text-opacity-70 bg-transparent border 
                                   border-[#5E5A5A] w-full py-8 rounded-2xl px-10" />
          </div>
     );
}

export default TextInput;