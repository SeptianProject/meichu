import { CardStaggerAnimation, ContainerStaggerAnimation } from "../../animations/StaggerAnimation"
import { brandAmbassadorItems } from "../../../assets/AnotherAssets"
import { BsInstagram, BsTiktok, BsTwitterX, BsYoutube } from "react-icons/bs"
import SingleBadgeSosmed from "../../elements/SingleBadgeSosmed";

const MainContentBA = () => {
     return (
          <ContainerStaggerAnimation
               initialDelay={0.5}
               staggerDelay={0.4}
               className="w-full">
               <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {brandAmbassadorItems.map((item, index) => (
                         <CardStaggerAnimation key={index} hiddenPosition={{ y: 100 }}>
                              <div className="h-[30rem] bg-center bg-cover rounded-2xl relative overflow-hidden lg:h-[25rem] xl:h-[35rem]"
                                   style={{ backgroundImage: `url(${item})` }}>
                                   <div className="absolute bottom-7 z-10 left-5 flex flex-col gap-y-2">
                                        <h1 className="font-semibold lg:text-lg xl:text-2xl text-light">
                                             Jenny RubyJane
                                        </h1>
                                        <p className="lg:text-xs xl:text-base font-extralight text-light">
                                             Whether you have a question about talents, pricing, portfolio,
                                             or anything else, our team...
                                        </p>
                                        <div className="flex items-center gap-x-2">
                                             <SingleBadgeSosmed icon={BsTwitterX} />
                                             <SingleBadgeSosmed icon={BsInstagram} />
                                             <SingleBadgeSosmed icon={BsYoutube} />
                                             <SingleBadgeSosmed icon={BsTiktok} />
                                        </div>
                                   </div>
                                   <div className="absolute h-44 w-full bottom-0 rounded-t-2xl 
                                   bg-gradient-to-t from-yellowBloobs via-yellowBloobs/40
                                   to-transparent via-60% from-[5%]"/>
                              </div>
                         </CardStaggerAnimation>
                    ))}
               </div>
          </ContainerStaggerAnimation>
     )
}

export default MainContentBA