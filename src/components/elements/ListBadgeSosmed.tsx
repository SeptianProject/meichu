import { CardStaggerAnimation } from "../../animations/StaggerAnimation";

type BadgeSosmedItem = {
     className: string;
     badgeItems: {
          icon: string;
          link: string;
     }[]
}

const ListBadgeSosmed = ({ className, badgeItems }: BadgeSosmedItem) => {
     return (
          <>
               {badgeItems.map((item, index) => (
                    <CardStaggerAnimation
                         hiddenPosition={{ x: -50 }}>
                         <div key={index} className={`flex justify-center 
                         items-center size-11 ${className}`}>
                              <a href={item.link} target='_blank'>
                                   <img className='size-6' src={item.icon} alt="" />
                              </a>
                         </div>
                    </CardStaggerAnimation>
               ))}
          </>
     )
}

export default ListBadgeSosmed