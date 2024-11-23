import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

interface FooterItemsProps {
     title: string
     listFooterItem: {
          name: string;
          link: string;
     }[]
}

const FooterItems: React.FC<FooterItemsProps> = ({
     title, listFooterItem
}) => {
     return (
          <div className="flex flex-col gap-y-5">
               <h3 className="dark:text-light text-base font-bold lg:text-lg">{title}</h3>
               <div className="flex flex-col gap-y-2 lg:gap-y-3">
                    {listFooterItem.map((item, index) => (
                         <Link key={index} to={item.link}
                              className="w-fit text-dark flex items-center 
                                        gap-x-1 text-sm font-poppins text-opacity-70 
                                        dark:text-opacity-70 dark:text-light group
                                        transition-all duration-300 hover:translate-x-1
                                        hover:text-opacity-100 dark:hover:text-opacity-100">
                              {item.name}
                              <span>
                                   <MdKeyboardArrowRight className="size-4 scale-0 
                                             -translate-x-5 transition-all duration-300 
                                             group-hover:scale-125 group-hover:translate-x-0" />
                              </span>
                         </Link>
                    ))}
               </div>
          </div>
     );
}

export default FooterItems;