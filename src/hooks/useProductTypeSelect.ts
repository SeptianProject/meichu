import React from "react"
import useUI from "./useUI"
import { assetItems } from "../assets/assets"
import { ProductCategoriesResponse } from "../types"
import { useCustomCategories } from "./useQueryRequest"

export interface Option {
     value: string | boolean
     label: string
     icon: string
     subOptions?: ProductCategoriesResponse['data']
}

export const useProductTypeSelect = (
     type: string,
     value: string | boolean | string[] | undefined,
     name: string,
     onChange: (e: { target: { name: string, value: string | boolean | string[] } }) => void,
     onCategorySelect: ((categoryUuid: string[] | string) => void) | undefined,
     selectedCategories: string[] | undefined,
) => {
     const { mode } = useUI()
     const isDarkMode = mode === 'dark'

     const [showSubOptions, setShowSubOptions] = React.useState(false)
     const [, setSelectedCategories] = React.useState<string[]>([])
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
     }, [value, type])

     React.useEffect(() => {
          if (selectedCategories && selectedCategories.length > 0) {
               setSelectedCategories(selectedCategories);
          }
     }, [selectedCategories])

     const getIcon = React.useCallback(
          (darkIcon: string, lightIcon: string) => isDarkMode ? darkIcon : lightIcon,
          [isDarkMode]
     )

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
               setSelectedCategories([])

               if (onCategorySelect) {
                    onCategorySelect([])
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

     const handleCategoryToggle = React.useCallback((categoryUuid: string) => {
          setSelectedCategories(prev => {
               const isSelected = prev.includes(categoryUuid)
               const newSelectedCategories = isSelected
                    ? prev.filter(uuid => uuid !== categoryUuid)
                    : [...prev, categoryUuid];

               if (onCategorySelect) {
                    onCategorySelect(newSelectedCategories);
               }

               onChange({
                    target: {
                         name: 'custom_categories',
                         value: newSelectedCategories
                    }
               })
               return newSelectedCategories
          })
     }, [onChange, onCategorySelect])

     const isSelected = React.useCallback((optionValue: string | boolean) => {
          if (type === 'imvu') {
               return value === optionValue
          }
          if (showSubOptions && typeof optionValue === 'string') {
               if (typeof value === 'string') {
                    return value?.toString().startsWith(optionValue)
               }
          }
          return value === optionValue
     }, [type, value, showSubOptions])

     const isCategorySelected = React.useCallback(
          (categoryUuid: string) => {
               return selectedCategories?.includes(categoryUuid);
          }, [selectedCategories]
     )

     return {
          showSubOptions,
          isBundle,
          options,

          handleChange,
          handleCategoryToggle,
          isSelected,
          isCategorySelected
     }
}