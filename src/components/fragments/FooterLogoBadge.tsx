import BounceAnimation from "../../animations/BounceAnimation"
import { ContainerStaggerAnimation } from "../../animations/StaggerAnimation"
import { assetsImage, badgeSosmedItems } from "../../assets/assets"
import ListBadgeSosmed from "../elements/ListBadgeSosmed"

const FooterLogoBadge = () => {
     return (
          <div className="flex flex-col items-start relative gap-y-10 lg:gap-y-4">
               <BounceAnimation
                    delayVal={0.5}
                    hiddenCoordinates={{ y: -50 }}
                    className="w-fit">
                    <img className="size-48 absolute -top-5 -left-5 select-none"
                         src={assetsImage.MeichuLogo} alt="Meichu" />
               </BounceAnimation>
               <BounceAnimation
                    delayVal={0.5}
                    hiddenCoordinates={{ y: 100 }}>
                    <h3 className="dark:text-light font-semibold hidden lg:block mt-36
                    dark:text-opacity-80 z-10">Follow Us</h3>
               </BounceAnimation>
               <ContainerStaggerAnimation
                    initialDelay={0.5}
                    staggerDelay={0.4}
                    className="flex items-center gap-x-2 mt-20 lg:mt-1">
                    <ListBadgeSosmed badgeItems={badgeSosmedItems}
                         className="rounded-xl bg-[#D9D9D9] transition-all duration-300
                              hover:scale-105 hover:-translate-y-1" />
               </ContainerStaggerAnimation>
               <BounceAnimation
                    delayVal={0.5}
                    hiddenCoordinates={{ x: -100 }}>
                    <h6 className="dark:text-light text-opacity-50 text-sm font-light
                    dark:text-opacity-80 lg:tracking-wider">
                         2024Meichu | All rights reserved
                    </h6>
               </BounceAnimation>
          </div>
     )
}

export default FooterLogoBadge