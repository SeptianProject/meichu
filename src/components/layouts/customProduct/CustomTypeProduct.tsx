import BounceAnimation from "../../../animations/BounceAnimation"
import { assetsImage } from "../../../assets/assets"
import ButtonSelectProduct from "../../fragments/customProduct/ButtonSelectProduct"
import TitleDesc from "../../fragments/customProduct/TitleDesc"

const CustomTypeProduct = () => {
     return (
          <div className="space-y-8">
               <TitleDesc
                    delayAnimation={0.5}
                    title="Custom Product Type For Custom"
                    desc="They All Serve The Same Purpose, But Each One Takes." />
               <div className="flex flex-col lg:flex-row gap-5">
                    <BounceAnimation
                         delayVal={0.5}
                         hiddenCoordinates={{ y: 50 }}
                         className="w-full">
                         <ButtonSelectProduct icon={assetsImage.SingleEmoji}
                              title="Create Single Product" />
                    </BounceAnimation>
                    <BounceAnimation
                         delayVal={0.5}
                         hiddenCoordinates={{ y: 50 }}
                         className="w-full">
                         <ButtonSelectProduct icon={assetsImage.DuoEmoji}
                              title="Create Bundle" />
                    </BounceAnimation>
               </div>
          </div>
     )
}

export default CustomTypeProduct