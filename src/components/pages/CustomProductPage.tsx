import TextTagline from "../fragments/home/TextTagline"
import TextInput from "../fragments/customProduct/TextInput"
import RouteHistory from "../layouts/RouteHistory"
import ChooseTypeProduct from "../layouts/customProduct/ChooseTypeProduct"
import UploadImageProduct from "../layouts/customProduct/UploadImageProduct"
import ActionButtonProduct from "../layouts/customProduct/ActionButtonProduct"
import React from "react"
import ModalPublishCustomProduct from "../layouts/customProduct/ModalPublishCustomProduct"

const CustomProductPage = () => {
     const [onPublish, setOnPublish] = React.useState(false)

     const handleOnPublish = () => {
          setOnPublish(true)
     }

     React.useEffect(() => {
          if (onPublish) {
               document.body.style.overflow = 'hidden'
               document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`
          } else {
               const timer = setTimeout(() => {
                    document.body.style.overflow = ''
                    document.body.style.paddingRight = ''
               }, 200);

               return () => clearTimeout(timer)
          }
     }, [onPublish])

     return (
          <>
               <section className="px-7 space-y-16 lg:px-20">
                    <div className="space-y-10">
                         <RouteHistory currentRoute="/custom-product" currentText="Custom Product" />
                         <TextTagline text="custom product" className="dark:text-light font-semibold" />
                    </div>
                    <form action=""
                         className="space-y-16">
                         <ChooseTypeProduct type="product" />
                         <UploadImageProduct />
                         <TextInput name="product" />
                         <ChooseTypeProduct type="imvu" />
                         <TextInput name="person" />
                         <ActionButtonProduct onPublish={handleOnPublish} />
                    </form>
               </section>
               <ModalPublishCustomProduct
                    isModalOpen={onPublish}
                    isModalClose={() => setOnPublish(false)} />
          </>
     )
}

export default CustomProductPage