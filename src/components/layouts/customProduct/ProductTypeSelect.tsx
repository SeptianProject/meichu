import React from "react"
import TitleDesc from "../../fragments/customProduct/TitleDesc"
import { assetItems } from "../../../assets/assets";
import useUI from "../../../hooks/useUI";
import { FieldError } from "react-hook-form";
import { AnimatePresence, Variants, motion } from "motion/react";
import { useCustomCategories } from "../../../hooks/useQueryRequest";
import { ProductCategoriesResponse } from "../../../types";

interface Option {
     value: string | boolean
     label: string
     icon: string
     subOptions?: ProductCategoriesResponse['data']
}


interface ProductTypeSelectProps {
     type: 'product' | 'imvu';
     value?: string | boolean;
     name: string
     onChange: (e: { target: { name: string, value: string | boolean } }) => void;
     onCategorySelect?: (categoryUuid: string) => void
     error?: FieldError
     ref?: React.Ref<HTMLInputElement>
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
     onChange,
     type,
     value,
     error,
     name,
     onCategorySelect,
     categoryRequired = false,
     categoryError
}, ref) => {
     const { mode } = useUI()
     const isDarkMode = mode === 'dark'
     const [showSubOptions, setShowSubOptions] = React.useState(false)
     const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null)
     const [isBundle, setIsBundle] = React.useState<boolean | undefined>(() => {
          if (type === 'product') {
               if (value === 'Single') return false
               if (value === 'Bundle') return true
          }
          return undefined
     })

     const { data: customCategories } = useCustomCategories(isBundle)

     React.useEffect(() => {
          if (type === 'product') {
               if (value === 'Single') setIsBundle(false)
               else if (value === 'Bundle') setIsBundle(true)
               setShowSubOptions(value === 'Single' || value === 'Bundle')
          }
     }, [value, type, customCategories])

     // eslint-disable-next-line react-hooks/exhaustive-deps
     const getIcon = (darkIcon: string, lightIcon: string) => isDarkMode ? darkIcon : lightIcon

     const options: Option[] = React.useMemo(() => type === 'product' ? [
          {
               value: 'Single',
               label: 'Create Single Product',
               icon: getIcon(assetItems.DarkSingleEmoji, assetItems.LightSingleEmoji),
               subOptions: !isBundle ? customCategories?.data : undefined,
          },
          {
               value: 'Bundle',
               label: 'Create Bundle',
               icon: getIcon(assetItems.DarkDuoEmoji, assetItems.LightDuoEmoji),
               subOptions: isBundle ? customCategories?.data : undefined,
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
     ], [getIcon, type, isBundle, customCategories])

     const handleChange = React.useCallback((newValue: string | boolean, isMainOption = true) => {
          if (isMainOption && type === 'product') {
               if (newValue === 'Single') setIsBundle(false)
               else if (newValue === 'Bundle') setIsBundle(true)
               setShowSubOptions(newValue === 'Single' || newValue === 'Bundle')
               setSelectedCategory(null)

               if (onCategorySelect) {
                    onCategorySelect('')
               }
          }
          onChange({
               target: {
                    name,
                    value: type === 'imvu' && typeof newValue === 'string'
                         ? JSON.parse(newValue)
                         : newValue
               }
          })
     }, [onChange, name, type, onCategorySelect])

     const handleCategorySelect = React.useCallback((categoryUuid: string, categoryName: string) => {
          setSelectedCategory(categoryUuid)

          if (onCategorySelect) {
               onCategorySelect(categoryUuid)
          }

          onChange({
               target: {
                    name: categoryName,
                    value: isBundle ? 'Bundle' : 'Single'
               }
          })
     }, [isBundle, onChange, onCategorySelect])

     const isSelected = React.useCallback((optionValue: string | boolean) => {
          if (type === 'imvu') {
               return value === optionValue
          }
          if (showSubOptions && typeof optionValue === 'string') {
               return value?.toString().startsWith(optionValue)
          }
          return value === optionValue
     }, [type, value, showSubOptions])

     const renderSubOptions = (option: Option) => {
          if (!showSubOptions || !option.subOptions) return null;

          return (
               <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={subOptionsVariants}
                    className="bg-[#C2C2C4]/30 dark:bg-cardBackground mt-4 p-4 space-y-3 rounded-xl">
                    {categoryRequired && !selectedCategory && (
                         <div className="text-redDanger text-sm mb-2">
                              {categoryError?.message || "Please select a category"}
                         </div>
                    )}
                    {option.subOptions.map((subOption) => (
                         <label key={subOption.id}
                              className="flex items-center cursor-pointer w-full">
                              <input
                                   type="radio"
                                   name={`${name}_category`}
                                   value={subOption.attributes.uuid}
                                   checked={selectedCategory === subOption.attributes.uuid}
                                   onChange={() => handleCategorySelect(subOption.attributes.uuid, subOption.attributes.name)}
                                   className="hidden"
                              />
                              <div className={`${selectedCategory === subOption.attributes.uuid ? 'bg-gold rounded-xl' : 'bg-transparent'} 
                                   w-full border-none p-[2px]`}>
                                   <div className={`p-3 md:p-4 flex items-center gap-x-4 w-full rounded-[11px]
                                   border-none bg-light dark:bg-dark transition-all duration-300
                                   ${selectedCategory === subOption.attributes.uuid ? 'ring-0 ring-transparent' : 'ring-[1.5px] ring-graySurface1'}`}>
                                        <span className={`${selectedCategory === subOption.attributes.uuid
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