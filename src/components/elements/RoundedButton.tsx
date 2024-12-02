import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface RoundedButtonProps {
     title: string;
     onClick?: () => void;
     className?: string;
}

const RoundedButton: FC<RoundedButtonProps> = ({
     onClick,
     title,
     className,
}) => {
     const navigate = useNavigate()

     return (
          <button
               onClick={title.includes('Cancel') ? () => navigate('/') : onClick}
               type="button"
               className={`${className} font-semibold border rounded-full w-36 py-3 
                    lg:w-44 transition-all duration-300
                    ${title.includes('Cancel')
                         ? 'bg-transparent text-[#5E5A5A] border-[#5E5A5A] dark:hover:text-light dark:hover:bg-[#5E5A5A]'
                         : ' bg-bluePrimary text-light border-transparent dark:hover:bg-bluePrimary/70'}`}>
               {title}
          </button >
     );
}

export default RoundedButton;