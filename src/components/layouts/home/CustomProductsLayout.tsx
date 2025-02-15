import { useNavigate } from "react-router-dom"
import BounceAnimation from "../../animations/BounceAnimation"
import TextCursorAnimation from "../../animations/TextCursorAnimation"
import CardProductAnimate from "../../fragments/home/CardProductAnimate"
import Button from "../../elements/buttons/Button"
import CardStackProduct from "../../fragments/home/CardStackProduct"

const CustomProductsLayout = () => {
     const navigate = useNavigate()

     return (
          <div className="min-h-screen w-full h-full relative flex flex-col items-center gap-y-20 
          md:flex-row md:gap-y-0 md:gap-x-10 md:pb-5">
               <CardStackProduct />
               <div className="max-w-full h-full sm:max-w-[80vw] md:h-full md:max-w-[45vw] lg:max-w-[60vw] 
               relative flex flex-col gap-y-5 md:pb-20">
                    <BounceAnimation
                         hiddenCoordinates={{ x: -100 }}>
                         <h1 className="dark:text-light text-2xl sm:text-3xl xl:text-4xl font-bold">
                              Make it the style of your
                              <TextCursorAnimation
                                   words={['dreams!']}
                                   className="ml-1 lg:w-fit"
                              />
                         </h1>
                    </BounceAnimation>
                    <BounceAnimation
                         hiddenCoordinates={{ y: 100 }}>
                         <p className="dark:text-light font-light text-base md:text-sm leading-relaxed
                         lg:text-base lg:max-w-[43vw] xl:tracking-wide xl:text-lg xl:max-w-[42vw]">
                              Hey there! We know you've got a great style, and we're here to help you make it even more attractive! Meichu products from Imvu using imvu+ make your style look HD and high-quality
                         </p>
                    </BounceAnimation>
                    <div className="flex items-center gap-x-3 md:gap-x-5">
                         <BounceAnimation
                              hiddenCoordinates={{ y: -50 }}>
                              <Button
                                   isGold
                                   title="Custom Product"
                                   onClick={() => navigate("/custom-product")}
                                   className="w-40"
                              />
                         </BounceAnimation>
                         <BounceAnimation
                              hiddenCoordinates={{ y: 50 }}>
                              <Button
                                   isCancel={false}
                                   isGold={false}
                                   title="More Product"
                                   onClick={() => navigate("/catalog")}
                                   className="w-40"
                              />
                         </BounceAnimation>
                    </div>
               </div>
               <CardProductAnimate />
          </div>
     )
}

export default CustomProductsLayout
