import { marketPlaceItems, meichuFooterItems } from "../../assets/assets"
import FooterItems from "../fragments/FooterItems"
import FooterLogoBadge from "../fragments/FooterLogoBadge"

const Footer = () => {
     return (
          <div className='min-h-[65vh] mt-20 bg-transparent
          px-10 lg:px-20 flex flex-col gap-y-10
          lg:flex-row lg:items-center lg:gap-x-40 lg:bg-transparent
          dark:lg:bg-transparent dark:bg-[#1F1F27]'>
               {/* Logo & more */}
               <FooterLogoBadge />
               <div className="flex items-start gap-x-20 lg:gap-x-32">
                    <FooterItems title="MarketPlace" listFooterItem={marketPlaceItems} />
                    <FooterItems title="Meichu" listFooterItem={meichuFooterItems} />
               </div>
          </div>
     )
}

export default Footer