import TitleDesc from '../../fragments/customProduct/TitleDesc'
import ButtonSelectProduct from '../../fragments/customProduct/ButtonSelectProduct'
import { assetsImage } from '../../../assets/assets'

const ChooseTypeProduct = () => {
     return (
          <div className="space-y-8">
               <TitleDesc title="Choose Type Product"
                    desc="They All Serve The Same Purpose" />
               <div className="flex flex-col lg:flex-row gap-5">
                    <ButtonSelectProduct title="Imvu+" icon={assetsImage.SingleEmoji} />
                    <ButtonSelectProduct title="Non Imvu+" icon={assetsImage.DuoEmoji} />
               </div>
          </div>
     )
}

export default ChooseTypeProduct