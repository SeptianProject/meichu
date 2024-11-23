import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonToCustomProductProps {
     text: string
}

const ButtonToCustomProduct: React.FC<ButtonToCustomProductProps> = ({
     text
}) => {
     const navigate = useNavigate();

     return (
          <button onClick={() => navigate("/custom-product")}
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