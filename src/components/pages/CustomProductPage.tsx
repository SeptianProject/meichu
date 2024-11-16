import TextTagline from "../fragments/home/TextTagline"
import TextInput from "../fragments/customProduct/TextInput"
import RouteHistory from "../layouts/RouteHistory"
import CustomTypeProduct from "../layouts/customProduct/CustomTypeProduct"
import UploadImageProduct from "../layouts/customProduct/UploadImageProduct"
import ChooseTypeProduct from "../layouts/customProduct/ChooseTypeProduct"
import ActionButtonProduct from "../layouts/customProduct/ActionButtonProduct"

const CustomProductPage = () => {
     return (
          <section className="px-7 space-y-16 lg:px-20">
               <div className="space-y-10">
                    <RouteHistory currentRoute="/custom-product" currentText="Custom Product" />
                    <TextTagline text="custom product" className="dark:text-light font-semibold" />
               </div>
               <form action="" className="space-y-16">
                    <CustomTypeProduct />
                    <UploadImageProduct />
                    <TextInput label="Name Your Product"
                         placeholder="E.G Redeemable T-Shirt With Logo" />
                    <ChooseTypeProduct />
                    <TextInput label="Enter Your Name" placeholder="Ex: Septianzz" />
                    <ActionButtonProduct />
               </form>
          </section>
     )
}

export default CustomProductPage