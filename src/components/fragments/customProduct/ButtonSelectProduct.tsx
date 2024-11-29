import { FC } from "react";

interface ButtonSelectProductProps {
     icon: string;
     title: string;
}

const ButtonSelectProduct: FC<ButtonSelectProductProps> = ({ icon, title }) => {
     return (
          <div className="h-28 border border-[#5E5A5A] rounded-2xl flex items-center gap-x-5 px-5 w-full">
               <div className="bg-[#E0E0E1] dark:bg-[#303037] w-28 h-20 rounded-xl flex items-center justify-center">
                    <img className="size-10 object-cover" src={icon} alt="" />
               </div>
               <h2 className="dark:text-light font-semibold">{title}</h2>
          </div>
     );
}

export default ButtonSelectProduct;