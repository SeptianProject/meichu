import React from "react";
import { IconType } from "react-icons";

interface ArrowCardCarouselProps {
     onClick: VoidFunction;
     icon: IconType;
}

const ArrowCardCarousel: React.FC<ArrowCardCarouselProps> = React.memo(({
     onClick,
     icon: Icon
}) => {
     return (
          <button onClick={onClick}
               className="bg-graySecondary dark:bg-light rounded-full size-10
               flex justify-center items-center overflow-hidden">
               <Icon className='size-7 text-light dark:text-grayPrimary' />
          </button>
     );
})

export default ArrowCardCarousel;