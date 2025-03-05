import React from "react"
import TitleDesc from "../../fragments/customProduct/TitleDesc"
import { FieldError } from "react-hook-form";
import { AnimatePresence, Variants, motion } from "motion/react";
import { Option, useProductTypeSelect } from "../../../hooks/useProductTypeSelect";

interface ProductTypeSelectProps {
     type: 'product' | 'imvu';
     value?: string | boolean | string[];
     name: string
     onChange: (e: { target: { name: string, value: string | boolean | string[] } }) => void;
     onCategorySelect?: (categoryUuid: string[] | string) => void
     error?: FieldError
     ref?: React.Ref<HTMLInputElement>
     selectedCategories?: string[]
     categoryRequired?: boolean
     categoryError?: FieldError
}

const subOptionsVariants: Variants = {
     hidden: {
          opacity: 0,
          y: -20,
          transition: { duration: 0.2 }
     },
     visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.3 }
     },
     exit: {
          opacity: 0,
          y: -20,
          transition: { duration: 0.2 }
     }
}

const ProductTypeSelect = React.forwardRef<HTMLInputElement, ProductTypeSelectProps>(({
     type,
     value,
     error,
     name,
     onChange,
     onCategorySelect,
     selectedCategories,
     categoryRequired = false,
     categoryError
}, ref) => {
     const {
          showSubOptions,
          options,
          handleChange,
          handleCategoryToggle,
          isSelected,
          isCategorySelected
     } = useProductTypeSelect(
          type,
          value,
          name,
          onChange,
          onCategorySelect,
          selectedCategories
     )

     const renderSubOptions = (option: Option) => {
          if (!showSubOptions || !option.subOptions) return null;

          return (
               <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={subOptionsVariants}
                    className="bg-[#C2C2C4]/30 dark:bg-cardBackground mt-4 p-4 space-y-3 rounded-xl">
                    {categoryRequired && selectedCategories?.length === 0 && (
                         <div className="text-redDanger text-sm mb-2">
                              {categoryError?.message || "Please select a category"}
                         </div>
                    )}
                    {option.subOptions.map((subOption) => (
                         <label key={subOption.id}
                              className="flex items-center cursor-pointer w-full">
                              <input
                                   type="checkbox"
                                   name={`${name}_category`}
                                   value={subOption.attributes.uuid}
                                   checked={isCategorySelected(subOption.attributes.uuid)}
                                   onChange={() => handleCategoryToggle(subOption.attributes.uuid)}
                                   className="hidden"
                              />
                              <div className={`${isCategorySelected(subOption.attributes.uuid) ? 'bg-gold rounded-xl' : 'bg-transparent'} 
                                   w-full border-none p-[2px]`}>
                                   <div className={`p-3 md:p-4 flex items-center gap-x-4 w-full rounded-[11px]
                                   border-none bg-light dark:bg-dark transition-all duration-300
                                   ${isCategorySelected(subOption.attributes.uuid) ? 'ring-0 ring-transparent' : 'ring-[1.5px] ring-graySurface1'}`}>
                                        <span className={`${isCategorySelected(subOption.attributes.uuid)
                                             ? 'bg-gold bg-clip-text text-transparent'
                                             : 'text-graySurface1 dark:text-white/80'}
                                             text-base font-medium transition-colors duration-300`}>
                                             {subOption.attributes.name}
                                        </span>
                                   </div>
                              </div>
                         </label>
                    ))}
               </motion.div>
          );
     };

     const renderOption = (option: Option) => (
          <div key={String(option.value)} className="w-full">
               <label className="flex items-center cursor-pointer w-full">
                    <input
                         type="radio"
                         name={name}
                         ref={ref}
                         value={String(option.value)}
                         checked={isSelected(option.value)}
                         onChange={(e) => handleChange(type === 'imvu' ? JSON.parse(e.target.value) : e.target.value)}
                         className="hidden"
                    />
                    <div className={`${isSelected(option.value)
                         ? 'bg-gold rounded-2xl' : 'bg-transparent'} w-full border-none p-[3px]`}>
                         <div className={`p-3 md:p-4 flex items-center gap-x-4 w-full rounded-[14px] 
                         border-none bg-light dark:bg-dark transition-all duration-300
                         ${error ? 'ring-redDanger' : 'ring-graySecondary'}
                         ${isSelected(option.value)
                                   ? 'ring-0 ring-transparent'
                                   : 'ring-[1.5px] ring-graySurface1'}`}>
                              <div className={`${String(option.label).includes('Imvu+')
                                   ? 'bg-[#f1f1f1] dark:bg-graySurface2 py-3'
                                   : 'bg-[#C2C2C4]/50 dark:bg-graySurface2 py-2'} 
                                   rounded-lg w-24 h-full flex justify-center`}>
                                   {type === 'product' ?
                                        <img src={option.icon}
                                             alt={option.label}
                                             loading='lazy'
                                             className='size-10 pointer-events-none' />
                                        : <h5 className="text-lg font-medium text-gold dark:text-white/80">
                                             {option.icon}
                                        </h5>
                                   }
                              </div>
                              <span className={`${isSelected(option.value)
                                   ? 'bg-gold bg-clip-text text-transparent'
                                   : ' text-graySurface1 dark:text-white/80'}
                                   text-lg font-medium transition-colors duration-300`}>
                                   {option.label}
                              </span>
                         </div>
                    </div>
               </label>
               <AnimatePresence>
                    {showSubOptions && option.subOptions && renderSubOptions(option)}
               </AnimatePresence>
          </div>
     );

     return (
          <div className="space-y-8">
               <TitleDesc
                    title={type === 'product' ? "Custom Product Type For Custom" : "Choose Type Product"}
                    desc={type === 'product'
                         ? "Custom Products Perfectly Tailored Just for You."
                         : "You can choose the type of product you want such as imvu+ and non imvu+. The difference is only that imvu+ looks higher quality and HD, While non imvu+ is standard."}
               />
               <div className="flex flex-col md:flex-row items-start justify-between gap-4">
                    {options.map(renderOption)}
               </div>
          </div>
     )
})

export default ProductTypeSelect