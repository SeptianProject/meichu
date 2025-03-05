import Button from "../elements/buttons/Button"
import TextTagline from "../fragments/home/TextTagline"
import TextInput from "../fragments/customProduct/TextInput"
import RouteHistory from "../../routes/HistoryRoute"
import ProductTypeSelect from "../layouts/customProduct/ProductTypeSelect"
import UploadImageProduct from "../layouts/customProduct/UploadImageProduct"
import { useLocation } from "react-router-dom"
import ModalInformation from "../layouts/modal/ModalInformation"
import { useProductForm } from "../../hooks/useProductForm"

const CustomProductPage = () => {
     const location = useLocation()

     const uuidParams = location.state?.requestData
     const isEditing = location.state?.isEditing

     const {
          register,
          handleSubmit,
          watch,
          errors,
          onSubmit,
          onPublish,
          previewUrl,
          isPublishDisabled,
          handleFileSelect,
          handleModalClose,
          handleCategorySelect,
          handleCancel,
          userData,
          productMutation,
          productTypeSelected
     } = useProductForm(uuidParams, isEditing)

     return (
          <>
               <section className="px-7 space-y-16 lg:px-20 relative">
                    <div className="space-y-10">
                         <RouteHistory currentRoute="/custom-product" currentText="Custom Product" />
                         <TextTagline text="custom product" className="dark:text-light font-semibold" />
                    </div>
                    <form onSubmit={(e) => {
                         e.preventDefault()
                         handleSubmit(onSubmit)(e)
                    }} className="space-y-16">
                         <input type="hidden" {...register('uuid')} />
                         {!isEditing && <input type="hidden" {...register('references')} />}
                         <input type="hidden"{...register('user')} />
                         <input type="hidden"{...register('custom_categories')} />
                         <ProductTypeSelect
                              {...register('productType')}
                              name="productType"
                              type="product"
                              value={watch('productType')}
                              error={errors.productType}
                              onCategorySelect={handleCategorySelect}
                              selectedCategories={watch('custom_categories') || []}
                              categoryRequired={productTypeSelected}
                              categoryError={errors.custom_categories?.[0]}
                         />
                         {!isEditing && (
                              <UploadImageProduct
                                   error={!previewUrl ? errors.references : undefined}
                                   currentImageUrl={previewUrl}
                                   onFileSelect={handleFileSelect}
                              />
                         )}
                         <TextInput
                              {...register('name')}
                              type="text"
                              label="product"
                              value={watch('name')}
                              error={errors.name}
                         />
                         <ProductTypeSelect
                              {...register('imvu')}
                              name="imvu"
                              type="imvu"
                              value={watch('imvu')}
                              error={errors.imvu}
                         />
                         <TextInput
                              label="user"
                              value={userData?.username || userData?.email}
                              readOnly
                         />
                         <div className="flex items-center gap-x-5 pb-20 lg:pb-0">
                              <Button
                                   isCancel
                                   type="button"
                                   isGold={false}
                                   title="Cancel"
                                   onClick={handleCancel}
                                   className="w-32 lg:w-44"
                              />
                              <Button
                                   isGold
                                   type="submit"
                                   disabled={productMutation.isLoading || isPublishDisabled}
                                   title={productMutation.isLoading ? 'Publishing...'
                                        : isPublishDisabled ? 'Published' : isEditing ? 'Update' : 'Publish'
                                   }
                                   className="w-32 lg:w-44"
                              />
                         </div>
                    </form>
               </section>
               <ModalInformation
                    isOpen={onPublish}
                    onClose={handleModalClose}
                    title="Request Received!"
                    message="Thank you for your request. It will be processed within 1-2 weeks. We'll notify you via email once it's ready. Thank you for your patience!"
                    buttonText="Okay!"
               />
          </>
     )
}

export default CustomProductPage