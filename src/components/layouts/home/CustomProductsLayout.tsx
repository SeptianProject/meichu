import ButtonToCustomProduct from "../../fragments/home/ButtonToCustomProduct"
import CardProductAnimate from "../../fragments/home/CardProductAnimate"

const CustomProductsLayout = () => {

     return (
          <div className="lg:min-h-screen w-full
          flex items-center gap-x-10">
               <div className="max-w-full sm:max-w-[80vw] md:max-w-[75vw] lg:max-w-[60vw] h-full relative 
               flex flex-col gap-y-5 lg:pb-20">
                    <h1 className="dark:text-light text-3xl 
                    md:text-4xl lg:text-3xl xl:text-4xl font-bold">
                         Make it the style of your
                         <span className="text-bluePrimary"> dreams!</span>
                    </h1>
                    <p className="dark:text-light font-light text-base leading-relaxed  
                    lg:max-w-[43vw] xl:tracking-wide xl:text-lg xl:max-w-[40vw]">
                         Hey there! We know you've got a great style, and we're here to help you make it even more attractive! Meichu products from Imvu using imvu+ make your style look HD and high-quality
                    </p>
                    <div className="flex items-center gap-x-5">
                         <ButtonToCustomProduct text="Custom Product" />
                         <ButtonToCustomProduct text="More Product" />
                    </div>
               </div>
               <CardProductAnimate />
          </div>
     )
}

export default CustomProductsLayout