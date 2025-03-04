import React from "react";

interface ButtonSelectProductProps {
     icon: string;
     title: string;
     isSelected: boolean;
     onSelect: VoidFunction;
}

const ButtonSelectProduct = React.memo(React.forwardRef<HTMLButtonElement, ButtonSelectProductProps>(({
     icon,
     title,
     isSelected,
     onSelect
}, ref) => {
     return (
          <button ref={ref}
               onClick={onSelect}
               className={`h-20 xl:h-24 rounded-2xl flex items-center gap-x-5 px-5 w-full 
                    cursor-pointer transition-all duration-300 ease-in-out bg-transparent
                    ${isSelected ? 'dark:bg-[#1F1F2C] ring ring-purplePrimary dark:ring-transparent'
                         : 'dark:bg-[#191820] ring-[1.5px] ring-graySecondary/80'}`}>
               <div className={`dark:bg-[#303037] w-20 h-14 xl:w-24 xl:h-16 rounded-lg flex 
               items-center justify-center
               ${title.includes('Imvu+') ? 'bg-transparent' : 'bg-[#C2C2C4]/50 '}`}>
                    <img src={icon}
                         alt="Imvu"
                         loading='lazy'
                         className={`object-cover
                         ${title.includes('Imvu+') ? 'size-full p-2 dark:p-4'
                                   : 'size-8 xl:size-10'}`}
                    />
               </div>
               <h2 className={`dark:text-light font-semibold transition-all duration-300 ease-in-out
                    ${isSelected ? 'text-purplePrimary' : 'text-graySecondary '}`}>
                    {title}
               </h2>
          </button>
     );
}))

export default ButtonSelectProduct;