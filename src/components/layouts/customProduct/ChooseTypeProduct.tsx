/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import ButtonSelectProduct from "../../fragments/customProduct/ButtonSelectProduct"
import TitleDesc from "../../fragments/customProduct/TitleDesc"
import { assetItems } from "../../../assets/AnotherAssets";
import useUI from "../../../hooks/useUI";

interface ChooseTypeProductProps {
     type: 'product' | 'imvu';
     value?: string | boolean;
     onChange: (value: any) => void;
}

const ChooseTypeProduct: React.FC<ChooseTypeProductProps> = ({
     type,
     value,
     onChange
}) => {
     const [selectedProduct, setSelectedProduct] = React.useState<string | null>(null)
     const buttonRef = React.useRef<HTMLDivElement>(null)
     const { mode } = useUI()
     const isDarkMode = mode === 'dark'

     const handleSelectProduct = (title: string) => {
          const newValue = title === selectedProduct ? null : title
          setSelectedProduct(newValue)

          if (type === 'product') {
               onChange(newValue || '')
          } else {
               onChange(title === 'Imvu+')
          }
     }

     const getIcon = (darkIcon: string, lightIcon: string) => isDarkMode ? darkIcon : lightIcon

     const productTypes = [
          {
               icon: type === 'product'
                    ? getIcon(assetItems.DarkSingleEmoji, assetItems.LightSingleEmoji)
                    : getIcon(assetItems.DarkImvu, assetItems.LightImvu),
               title: type === 'product' ? "Create Single Product" : "Imvu+"
          }, {
               icon: type === 'product'
                    ? getIcon(assetItems.DarkDuoEmoji, assetItems.LightDuoEmoji)
                    : getIcon(assetItems.DarkImvu, assetItems.LightImvu),
               title: type === 'product' ? "Create Bundle" : "Non Imvu+"
          }
     ]

     React.useEffect(() => {
          if (type === 'product' && typeof value === 'string') {
               setSelectedProduct(value)
          } else if (type === 'imvu' && typeof value === 'boolean') {
               setSelectedProduct(value ? 'Imvu+' : 'Non Imvu+')
          }
     }, [value, type])

     return (
          <div className="space-y-8">
               <TitleDesc
                    title={type === 'product' ? "Custom Product Type For Custom" : "Choose Type Product"}
                    desc={type === 'product'
                         ? "They All Serve The Same Purpose, But Each One Takes."
                         : "They All Serve The Same Purpose"}
               />
               <div ref={buttonRef} className="flex flex-col lg:flex-row gap-5">
                    {productTypes.map((product) => (
                         <ButtonSelectProduct
                              key={product.title}
                              icon={product.icon}
                              title={product.title}
                              isSelected={selectedProduct === product.title}
                              onSelect={() => handleSelectProduct(product.title)}
                         />
                    ))}
               </div>
          </div>
     )
}

export default React.memo(ChooseTypeProduct)