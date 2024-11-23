import { assetsImage, badgeSosmedItems } from "../../assets/assets"
import ListBadgeSosmed from "../elements/ListBadgeSosmed"

const FooterLogoBadge = () => {
     return (
          <div className="flex flex-col items-start relative gap-y-10 lg:gap-y-4">
               <img className="size-48 absolute -top-5 -left-5 select-none"
                    src={assetsImage.MeichuLogo} alt="Meichu" />
               <h3 className="dark:text-light hidden lg:block mt-36 
                    dark:text-opacity-80 z-10">Follow Us</h3>
               <div className="flex items-center gap-x-2 mt-36 lg:mt-1">
                    <ListBadgeSosmed badgeItems={badgeSosmedItems}
                         className="rounded-xl bg-[#D9D9D9] transition-all duration-300
                              hover:scale-105 hover:-translate-y-1" />
               </div>
               <h6 className="dark:text-light text-opacity-50 text-sm font-light
                    dark:text-opacity-80 lg:tracking-wider">
                    2024Meichu | All rights reserved
               </h6>
          </div>
     )
}

export default FooterLogoBadge