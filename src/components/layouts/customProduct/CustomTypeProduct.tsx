import { assetsImage } from "../../../assets/assets"
import ButtonSelectProduct from "../../fragments/customProduct/ButtonSelectProduct"
import TitleDesc from "../../fragments/customProduct/TitleDesc"

const CustomTypeProduct = () => {
     return (
          <div className="space-y-8">
               <TitleDesc title="Custom Product Type For Custom"
                    desc="They All Serve The Same Purpose, But Each One Takes." />
               <div className="flex flex-col lg:flex-row gap-5">
                    <ButtonSelectProduct icon={assetsImage.SingleEmoji}
                         title="Create Single Product" />
                    <ButtonSelectProduct icon={assetsImage.DuoEmoji}
                         title="Create Bundle" />
               </div>
          </div>
     )
}

export default CustomTypeProduct