import React from "react";
import { IconType } from "react-icons";

interface ArrowCardCarouselProps {
     onClick: () => void;
     icon: IconType;
}

const ArrowCardCarousel: React.FC<ArrowCardCarouselProps> = ({
     onClick,
     icon: Icon
}) => {
     return (
          <button onClick={onClick}
               className="bg-dark dark:bg-light rounded-full size-10
               flex justify-center items-center overflow-hidden">
               <Icon className='size-6 text-light dark:text-dark' />
          </button>
     );
}

export default ArrowCardCarousel;