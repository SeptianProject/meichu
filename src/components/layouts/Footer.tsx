import { footerItems } from "../../assets/assets"
import FooterItems from "../fragments/footers/FooterItems"
import FooterLogoBadge from "../fragments/footers/FooterLogoBadge"

const Footer = () => {
     return (
          <footer className='min-h-[40rem] lg:min-h-[65vh] mt-20 bg-transparent px-10 lg:px-20 
          flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-40'>
               <FooterLogoBadge />
               <div className="flex items-start gap-x-20 lg:gap-x-32">
                    <FooterItems title="MarketPlace" listFooterItem={footerItems.marketplaces} />
                    <FooterItems title="Meichu" listFooterItem={footerItems.meichu} />
               </div>
          </footer>
     )
}

export default Footer