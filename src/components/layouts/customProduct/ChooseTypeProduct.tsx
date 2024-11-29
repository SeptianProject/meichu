import TitleDesc from '../../fragments/customProduct/TitleDesc'
import ButtonSelectProduct from '../../fragments/customProduct/ButtonSelectProduct'
import { assetsImage } from '../../../assets/assets'
import BounceAnimation from '../../../animations/BounceAnimation'

const ChooseTypeProduct = () => {
     return (
          <div className="space-y-8">
               <TitleDesc
                    delayAnimation={0.5}
                    title="Choose Type Product"
                    desc="They All Serve The Same Purpose" />
               <div className="flex flex-col lg:flex-row gap-5">
                    <BounceAnimation
                         delayVal={0.5}
                         hiddenCoordinates={{ y: 50 }}
                         className='w-full'>
                         <ButtonSelectProduct title="Imvu+" icon={assetsImage.SingleEmoji} />
                    </BounceAnimation>
                    <BounceAnimation
                         delayVal={0.5}
                         hiddenCoordinates={{ y: 50 }}
                         className='w-full'>
                         <ButtonSelectProduct title="Non Imvu+" icon={assetsImage.DuoEmoji} />
                    </BounceAnimation>
               </div>
          </div>
     )
}

export default ChooseTypeProduct