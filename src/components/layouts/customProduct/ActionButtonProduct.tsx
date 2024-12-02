import React from "react";
import RoundedButton from "../../elements/buttons/RoundedBtn"
import BounceAnimation from "../../../animations/BounceAnimation";


type ActionButtonProductProps = {
     onPublish: () => void;
}

const ActionButtonProduct: React.FC<ActionButtonProductProps> = ({ onPublish }) => {

     return (
          <div className="flex items-center gap-x-5 pb-20 lg:pb-0">
               <BounceAnimation
                    delayVal={0.5}
                    hiddenCoordinates={{ y: -50 }}>
                    <RoundedButton
                         title="Cancel" />
               </BounceAnimation>
               <BounceAnimation
                    delayVal={0.8}
                    hiddenCoordinates={{ y: 50 }}>
                    <RoundedButton
                         title="Publish"
                         onClick={onPublish} />
               </BounceAnimation>
          </div>
     )
}

export default ActionButtonProduct