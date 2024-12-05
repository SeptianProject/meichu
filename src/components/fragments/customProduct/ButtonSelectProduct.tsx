import React from "react";

interface ButtonSelectProductProps {
     icon: string;
     title: string;
     isSelected: boolean;
     onSelect: () => void;
}

const ButtonSelectProduct: React.FC<ButtonSelectProductProps> = ({
     icon,
     title,
     isSelected,
     onSelect,
}) => {

     return (
          <div
               onClick={onSelect}
               className={`h-24 rounded-2xl flex items-center gap-x-5 px-5 w-full 
                    cursor-pointer transition-all duration-300 ease-in-out bg-transparent
                    ${isSelected ? 'dark:bg-[#1F1F2C] ring ring-purplePrimary dark:ring-transparent'
                         : 'dark:bg-[#191820] ring-[1.5px] ring-graySecondary/80'}`}>
               <div className={`dark:bg-[#303037] w-24 h-16 rounded-lg flex 
               items-center justify-center
               ${title.includes('Imvu+') ? 'bg-transparent' : 'bg-[#C2C2C4]/50 '}`}>
                    <img
                         src={icon}
                         alt=""
                         className={`object-cover
                         ${title.includes('Imvu+') ? 'size-full p-2 dark:p-4' : 'size-10'}`}
                    />
               </div>
               <h2 className={`dark:text-light font-semibold transition-all duration-300 ease-in-out
                    ${isSelected ? 'text-purplePrimary' : 'text-graySecondary '}`}>
                    {title}
               </h2>
          </div>
     );
}

export default ButtonSelectProduct;