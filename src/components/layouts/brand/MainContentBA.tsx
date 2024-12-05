import { CardStaggerAnimation, ContainerStaggerAnimation } from "../../animations/StaggerAnimation"
import { brandAmbassadorItems } from "../../../assets/AnotherAssets"
import CardGradientBA from "../../fragments/brand/CardGradientBA"

const MainContentBA = () => {
     return (
          <ContainerStaggerAnimation
               initialDelay={0.5}
               staggerDelay={0.4}
               className="w-full">
               <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {brandAmbassadorItems.map((item, index) => (
                         <CardStaggerAnimation
                              hiddenPosition={{ y: 100 }}>
                              <CardGradientBA key={index} image={item} title="Jenny RubyJane"
                                   desc="Whether you have a question about talents, pricing, portfolio, or anything else, our team..." />
                         </CardStaggerAnimation>
                    ))}
               </div>
          </ContainerStaggerAnimation>
     )
}

export default MainContentBA