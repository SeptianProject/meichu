import { useNavigate } from "react-router-dom"
import BounceAnimation from "../../animations/BounceAnimation"
import TextCursorAnimation from "../../animations/TextCursorAnimation"
import CardProductAnimate from "../../fragments/home/CardProductAnimate"
import Button from "../../elements/buttons/Button"

const CustomProductsLayout = () => {
     const navigate = useNavigate()

     return (
          <div className="lg:min-h-screen w-full flex items-center gap-x-10 pb-20 md:pb-5">
               <div className="max-w-full sm:max-w-[80vw] md:max-w-[45vw] lg:max-w-[60vw] 
               h-full relative flex flex-col gap-y-5 md:pb-20">
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
                                   isGradient
                                   title="Custom Product"
                                   onClick={() => navigate("/custom-product")}
                                   className="w-40"
                              />
                         </BounceAnimation>
                         <BounceAnimation
                              hiddenCoordinates={{ y: 50 }}>
                              <Button
                                   isCancel={false}
                                   isGradient={false}
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
