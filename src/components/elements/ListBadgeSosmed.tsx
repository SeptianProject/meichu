import React from "react";
import { CardStaggerAnimation } from "../animations/StaggerAnimation";

type BadgeSosmedItem = {
     className: string;
     badgeItems: {
          icon: string;
          link: string;
     }[]
}

const ListBadgeSosmed: React.FC<BadgeSosmedItem> = React.memo(({
     className,
     badgeItems
}) => {
     return (
          <>
               {badgeItems.map((item, index) => (
                    <CardStaggerAnimation
                         key={index}
                         hiddenPosition={{ x: -50 }}>
                         <div className={`flex justify-center 
                         items-center size-11 ${className}`}>
                              <a href={item.link} target='_blank'>
                                   <img className='size-6' src={item.icon} alt="" />
                              </a>
                         </div>
                    </CardStaggerAnimation>
               ))}
          </>
     )
})

export default ListBadgeSosmed