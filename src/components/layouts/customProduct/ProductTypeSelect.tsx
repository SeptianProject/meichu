/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import TitleDesc from "../../fragments/customProduct/TitleDesc"
import { assetItems } from "../../../assets/AnotherAssets";
import useUI from "../../../hooks/useUI";
import { FieldError } from "react-hook-form";

interface ProductTypeSelectProps {
     type: 'product' | 'imvu';
     value?: string | boolean;
     onChange?: (value: any) => void;
     error?: FieldError | undefined
}

const ProductTypeSelect: React.FC<ProductTypeSelectProps> = React.memo(React.forwardRef<HTMLInputElement, ProductTypeSelectProps>(({
     onChange, type, value, error
}, ref) => {
     const { mode } = useUI()
     const isDarkMode = mode === 'dark'

     const getIcon = (darkIcon: string, lightIcon: string) => isDarkMode ? darkIcon : lightIcon

     const options = type === 'product'
          ? [
               {
                    value: 'single',
                    label: 'Create Single Product',
                    icon: getIcon(assetItems.DarkSingleEmoji, assetItems.LightSingleEmoji)
               },
               {
                    value: 'bundle',
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

     return (
          <div className="space-y-8">
               <TitleDesc
                    title={type === 'product' ? "Custom Product Type For Custom" : "Choose Type Product"}
                    desc={type === 'product'
                         ? "They All Serve The Same Purpose, But Each One Takes."
                         : "They All Serve The Same Purpose"}
               />
               {options.map((option) => (
                    <label key={String(option.value)} className="flex items-center space-x-4 cursor-pointer">
                         <input
                              type="radio"
                              name={type}
                              ref={ref}
                              value={String(option.value)}
                              checked={String(value) === String(option.value)}
                              onChange={(e) => onChange!(e.target.value)}
                              className="hidden"
                         />
                         <div className={`p-4 flex items-center space-x-4 w-full rounded-lg ring-2 border-none transition-all
                              ${String(value) === String(option.value) ? 'ring-purplePrimary bg-purple-50' : 'ring-gray-200'}`}>
                              <img src={option.icon} alt="" className="w-10 h-10" />
                              <span className="font-medium text-white">{option.label}</span>
                         </div>
                    </label>
               ))}
               {error && <p className="text-red-500 text-sm">{error.message}</p>}
          </div>
     )
}))

ProductTypeSelect.displayName = 'ProductTypeSelect'

export default React.memo(ProductTypeSelect)