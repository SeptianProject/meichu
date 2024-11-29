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
               className={`h-28 border-[#5E5A5A] rounded-2xl flex items-center 
               gap-x-5 px-5 w-full cursor-pointer
               ${isSelected ? 'border-2' : 'border'}`}>
               <div className="bg-[#E0E0E1] dark:bg-[#303037] w-28 h-20 rounded-lg flex 
               items-center justify-center">
                    <img src={icon} alt=""
                         className={`${title.includes('Imvu+')
                              ? 'size-full p-4'
                              : 'size-10'} object-cover`} />
               </div>
               <h2 className="dark:text-light font-semibold">{title}</h2>
          </div>
     );
}

export default ButtonSelectProduct;