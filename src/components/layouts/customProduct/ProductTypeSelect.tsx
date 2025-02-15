import React from "react"
import TitleDesc from "../../fragments/customProduct/TitleDesc"
import { assetItems } from "../../../assets/assets";
import useUI from "../../../hooks/useUI";
import { FieldError } from "react-hook-form";

interface ProductTypeSelectProps {
     type: 'product' | 'imvu';
     value?: string | boolean;
     name: string
     onChange: (e: { target: { name: string, value: string | boolean } }) => void;
     error?: FieldError
     ref?: React.Ref<HTMLInputElement>
}

const ProductTypeSelect = React.forwardRef<HTMLInputElement, ProductTypeSelectProps>(({
     onChange, type, value, error, name }, ref) => {
     const { mode } = useUI()
     const isDarkMode = mode === 'dark'

     const getIcon = (darkIcon: string, lightIcon: string) => isDarkMode ? darkIcon : lightIcon

     const options = type === 'product'
          ? [
               {
                    value: 'Single',
                    label: 'Create Single Product',
                    icon: getIcon(assetItems.DarkSingleEmoji, assetItems.LightSingleEmoji)
               },
               {
                    value: 'Bundle',
                    label: 'Create Bundle',
                    icon: getIcon(assetItems.DarkDuoEmoji, assetItems.LightDuoEmoji)
               }
          ]
          : [
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
          ]

     const handleChange = (newValue: string | boolean) => {
          onChange({
               target: {
                    name,
                    value: newValue
               }
          })
     }

     return (
          <div className="space-y-8">
               <TitleDesc
                    title={type === 'product' ? "Custom Product Type For Custom" : "Choose Type Product"}
                    desc={type === 'product'
                         ? "Custom Products Perfectly Tailored Just for You."
                         : "You can choose the type of product you want such as imvu+ and non imvu+. The difference is only that imvu+ looks higher quality and HD, While non imvu+ is standard."}
               />
               <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {options.map((option) => (
                         <label
                              key={String(option.value)}
                              className="flex items-center cursor-pointer w-full">
                              <input
                                   type="radio"
                                   name={name}
                                   ref={ref}
                                   value={JSON.stringify(option.value)}
                                   checked={value === String(option.value)}
                                   onChange={(e) => handleChange(JSON.parse(e.target.value))}
                                   className="hidden"
                              />
                              <div className={`${value === option.value ? 'bg-gold rounded-2xl' : 'bg-transparent'}
                                   w-full border-none p-[3px]`}>
                                   <div className={`p-3 md:p-4 flex items-center gap-x-4 w-full rounded-[14px] 
                                   border-none bg-light dark:bg-dark transition-all duration-300
                                   ${error ? 'ring-redDanger' : 'ring-graySecondary'}
                                   ${value === option.value
                                             ? 'ring-0 ring-transparent'
                                             : 'ring-[1.5px] ring-graySurface1'}`}>
                                        <div className={`${option.label.includes('Imvu+')
                                             ? 'bg-[#f1f1f1] dark:bg-graySurface2 py-3'
                                             : 'bg-[#C2C2C4]/50 dark:bg-graySurface2 py-2'} rounded-lg w-24 h-full flex justify-center`}>
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
                                        <span className={`${value === option.value
                                             ? 'bg-gold bg-clip-text text-transparent'
                                             : ' text-graySurface1 dark:text-white/80'}
                                        text-lg font-medium transition-colors duration-300`}>
                                             {option.label}
                                        </span>
                                   </div>
                              </div>
                         </label>
                    ))}
               </div>
          </div>
     )
})
ProductTypeSelect.displayName = 'ProductTypeSelect'

export default ProductTypeSelect