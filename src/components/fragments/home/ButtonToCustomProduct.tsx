import React from "react";

interface ButtonToCustomProductProps {
     text: string
     onClick: () => void
}

const ButtonToCustomProduct: React.FC<ButtonToCustomProductProps> = ({
     text,
     onClick
}) => {
     return (
          <button onClick={onClick}
               className={`text-sm font-semibold rounded-full w-32 py-2 border 
                         lg:text-base lg:w-44 transition-all duration-300 ease-out 
                         hover:scale-105 hover:-translate-y-1
                         ${text === 'Custom Product'
                         ? 'bg-bluePrimary text-light border-transparent'
                         : 'bg-transparent text-[#5E5A5A] border-[#5E5A5A] dark:text-light dark:hover:text-bluePrimary dark:hover:bg-light'}`}>
               {text}
          </button>
     );
}

export default ButtonToCustomProduct;