import React, { FC } from "react";
import BounceAnimation from "../../animations/BounceAnimation";

interface TextInputProps {
     name: 'product' | 'person'
}

const TextInput: FC<TextInputProps> = React.memo(({ name }) => {
     return (
          <div className="space-y-8">
               <BounceAnimation
                    delayVal={0.5}
                    hiddenCoordinates={{ x: -50 }}>
                    <h1 className="text-xl text-dark dark:text-light font-semibold">
                         {name === 'product' ? 'Name Your Product' : 'Enter Your Name'}
                    </h1>
               </BounceAnimation>
               <input
                    type="text"
                    placeholder={name === 'product'
                         ? 'E.G Redeemable T-Shirt With Logo'
                         : 'Ex: Septianzz'}
                    className="text-dark dark:text-light font-poppins dark:text-opacity-70 
                    ring-[1.5px]  ring-graySecondary w-full py-8 rounded-2xl px-10 bg-transparent 
                    dark:bg-[#191820] transition-all duration-300 outline-none border-none focus:ring-[2.5px]" />
          </div>
     );
})

export default TextInput;