import { Link } from "react-router-dom"
import { assetsImage, marketPlaceItems, meichuFooterItems } from "../../assets/assets"
import ListBadgeSosmed from "../elements/ListBadgeSosmed"

const Footer = () => {
     return (
          <div className='min-h-[65vh] mt-20 bg-transparent dark:bg-[#1F1F27] lg:bg-transparent px-10 lg:px-20
          flex flex-col lg:flex-row lg:items-center gap-y-10 lg:gap-x-40'>
               {/* Logo & more */}
               <div className="flex flex-col items-start relative gap-y-10 lg:gap-y-4">
                    <img className="size-48 absolute -top-5 -left-5"
                         src={assetsImage.MeichuLogo} alt="Meichu" />
                    <h3 className="dark:text-light hidden lg:block mt-36">Follow Us</h3>
                    <div className="flex items-center gap-x-2 mt-36 lg:mt-0">
                         <ListBadgeSosmed />
                    </div>
                    <h6 className="dark:text-light text-opacity-50 text-sm font-light">
                         2024Meichu | All rights reserved
                    </h6>
               </div>
               <div className="flex items-start gap-x-20">
                    {/* Marketplace */}
                    <div className="flex flex-col gap-y-5">
                         <h3 className="dark:text-light text-base font-bold">MarketPlace</h3>
                         <div className="flex flex-col gap-y-2">
                              {marketPlaceItems.map((item, index) => (
                                   <Link key={index} to={item.link}
                                        className="text-dark dark:text-light text-sm font-poppins text-opacity-70">
                                        {item.name}
                                   </Link>
                              ))}
                         </div>
                    </div>
                    {/* Meichu */}
                    <div className="flex flex-col gap-y-5">
                         <h3 className="dark:text-light text-base font-bold">Meichu</h3>
                         <div className="flex flex-col gap-y-2">
                              {meichuFooterItems.map((item, index) => (
                                   <Link key={index} to={item.link}
                                        className="text-dark dark:text-light text-sm font-poppins text-opacity-70">
                                        {item.name}
                                   </Link>
                              ))}
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Footer