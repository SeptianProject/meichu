import { FC } from "react";
import BounceAnimation from "../../../animations/BounceAnimation";

interface TitleDescProps {
     title: string;
     desc: string;
     delayAnimation?: number;
}

const TitleDesc: FC<TitleDescProps> = ({ desc, title, delayAnimation }) => {
     return (
          <div className="space-y-1">
               <BounceAnimation
                    delayVal={delayAnimation}
                    hiddenCoordinates={{ x: -50 }}>
                    <h3 className="dark:text-light font-semibold text-xl">
                         {title}
                    </h3>
               </BounceAnimation>
               <BounceAnimation
                    delayVal={delayAnimation! + 0.5}
                    hiddenCoordinates={{ x: 50 }}>
                    <p className="dark:text-light font-extralight text-opacity-80">
                         {desc}
                    </p>
               </BounceAnimation>
          </div>
     );
}

export default TitleDesc;