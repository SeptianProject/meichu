import React from "react"
import TitleDesc from "../../fragments/customProduct/TitleDesc"
import { assetItems } from "../../../assets/AnotherAssets";
import useUI from "../../../hooks/useUI";
import { FieldError } from "react-hook-form";

// type ProductType = 'Single' | 'Bundle'
// type ImvuType = boolean

interface ProductTypeSelectProps {
     type: 'product' | 'imvu';
     value?: string;
     name: string
     onChange: (e: { target: { name: string, value: string } }) => void;
     onBlur?: () => void;
     error?: FieldError
     ref?: React.Ref<HTMLInputElement>
}

const ProductTypeSelect = React.forwardRef<HTMLInputElement, ProductTypeSelectProps>(({
     onChange, onBlur, type, value, error, name }, ref) => {
     const { mode } = useUI()
     const isDarkMode = mode === 'dark'

     const getIcon = (darkIcon: string, lightIcon: string) =>
          isDarkMode ? darkIcon : lightIcon

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
                    label: 'IMVU+',
                    icon: getIcon(assetItems.DarkImvu, assetItems.LightImvu)
               },
               {
                    value: false,
                    label: 'Non IMVU+',
                    icon: getIcon(assetItems.DarkImvu, assetItems.LightImvu)
               }
          ]

     const handleChange = (newValue: string) => {
          console.log('New Value:', newValue)
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
                         ? "They All Serve The Same Purpose, But Each One Takes."
                         : "They All Serve The Same Purpose"}
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
                                   onBlur={onBlur}
                                   className="hidden"
                              />
                              <div className={`p-4 flex items-center gap-x-4 w-full rounded-lg border-none transition-all
                              ${value === option.value
                                        ? 'dark:bg-[#1F1F2C] ring ring-purplePrimary dark:ring-yellow-500'
                                        : 'dark:bg-[#191820] ring-[1.5px] ring-graySecondary/80'}`}>
                                   <img src={option.icon} alt={option.label} className="w-10 h-10" />
                                   <span className="font-medium text-white/80">
                                        {option.label}
                                   </span>
                              </div>
                         </label>
                    ))}
               </div>
               {error && <p className="text-red-500 text-sm">{error.message}</p>}
          </div>
     )
})
ProductTypeSelect.displayName = 'ProductTypeSelect'

export default React.memo(ProductTypeSelect)