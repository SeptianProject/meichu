import React from "react"

type ButtonBuyCatalogProps = {
     type: 'catalog' | 'profile'
}

const ButtonBuyCatalog: React.FC<ButtonBuyCatalogProps> = ({ type }) => {
     return (
          <button className={`border border-[#5E5A5A] text-[#5E5A5A] font-inter w-fit
                    rounded-full text-[10px] font-medium text-xs transition-all duration-300 
                    dark:border-light dark:text-light hover:bg-bluePrimary hover:text-light
                    hover:border-transparent dark:hover:border-transparent dark:hover:bg-bluePrimary
                    ${type === 'catalog'
                    ? 'py-1 px-2 sm:py-2 sm:px-3 sm:font-semibold md:px-5 md:py-3 md:text-sm'
                    : 'p-1'}`}>
               Buy Now!
          </button>
     )
}

export default ButtonBuyCatalog