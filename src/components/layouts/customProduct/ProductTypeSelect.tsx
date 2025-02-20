/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"
import TitleDesc from "../../fragments/customProduct/TitleDesc"
import { assetItems } from "../../../assets/assets";
import useUI from "../../../hooks/useUI";
import { FieldError } from "react-hook-form";
import { AnimatePresence, Variants, motion } from "motion/react";

interface Option {
     value: string | boolean
     label: string
     icon: string
     subOptions?: SubOption[]
}

interface SubOption {
     value: string
     label: string
}

interface ProductTypeSelectProps {
     type: 'product' | 'imvu';
     value?: string | boolean;
     name: string
     onChange: (e: { target: { name: string, value: string | boolean } }) => void;
     error?: FieldError
     ref?: React.Ref<HTMLInputElement>
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
     onChange, type, value, error, name
}, ref) => {
     const { mode } = useUI()
     const isDarkMode = mode === 'dark'
     const [showSubOptions, setShowSubOptions] = React.useState(false)

     const getIcon = (darkIcon: string, lightIcon: string) => isDarkMode ? darkIcon : lightIcon

     const options: Option[] = React.useMemo(() => type === 'product' ? [
          {
               value: 'Single',
               label: 'Create Single Product',
               icon: getIcon(assetItems.DarkSingleEmoji, assetItems.LightSingleEmoji),
               subOptions: [
                    {
                         value: 'Single',
                         label: 'Basic Single Product',
                    },
                    {
                         value: 'Single_Premium',
                         label: 'Premium Single Product',
                    },
                    {
                         value: 'Single_Custom',
                         label: 'Custom Single Product',
                    },
               ]
          },
          {
               value: 'Bundle',
               label: 'Create Bundle',
               icon: getIcon(assetItems.DarkDuoEmoji, assetItems.LightDuoEmoji)
          }
     ] : [
          {
               value: true,
               label: 'Imvu+',
               icon: 'Imvu+'
          },
          {
               value: false,
               label: 'Non Imvu+',
               icon: 'Imvu'
          }
     ], [getIcon, type])

     const handleChange = React.useCallback((newValue: string | boolean, isMainOption = true) => {
          if (isMainOption) {
               setShowSubOptions(newValue === "Single")
          }
          onChange({
               target: {
                    name,
                    value: type === 'imvu' && typeof newValue === 'string'
                         ? JSON.parse(newValue)
                         : newValue
               }
          })
     }, [onChange, name, type])

     const isSelected = React.useCallback((optionValue: string | boolean) => {
          if (type === 'imvu') {
               return value === optionValue
          }
          if (showSubOptions && typeof optionValue === 'string') {
               return value?.toString().startsWith(optionValue)
          }
          return value === optionValue
     }, [type, value, showSubOptions])

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
                    {showSubOptions && option.value === "Single" && option.subOptions && (
                         <motion.div
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              variants={subOptionsVariants}
                              className="bg-[#C2C2C4]/30 dark:bg-cardBackground mt-4 p-4 space-y-3 rounded-xl">
                              {option.subOptions.map((subOption) => (
                                   <label key={subOption.value}
                                        className="flex items-center cursor-pointer w-full">
                                        <input
                                             type="radio"
                                             name={name}
                                             value={subOption.value}
                                             checked={value === subOption.value}
                                             onChange={(e) => handleChange(e.target.value, false)}
                                             className="hidden"
                                        />
                                        <div className={`${value === subOption.value ? 'bg-gold rounded-xl' : 'bg-transparent'} 
                                             w-full border-none p-[2px]`}>
                                             <div className={`p-3 md:p-4 flex items-center gap-x-4 w-full rounded-[11px]
                                             border-none bg-light dark:bg-dark transition-all duration-300
                                             ${value === subOption.value ? 'ring-0 ring-transparent' : 'ring-[1.5px] ring-graySurface1'}`}>
                                                  <span className={`${value === subOption.value
                                                       ? 'bg-gold bg-clip-text text-transparent'
                                                       : 'text-graySurface1 dark:text-white/80'}
                                                       text-base font-medium transition-colors duration-300`}>
                                                       {subOption.label}
                                                  </span>
                                             </div>
                                        </div>
                                   </label>
                              ))}
                         </motion.div>
                    )}
               </AnimatePresence>
          </div>
     )

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