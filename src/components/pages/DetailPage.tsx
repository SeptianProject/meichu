import RouteHistory from "../../routes/HistoryRoute"
import ListProductDetail from "../layouts/detail/ListProductDetail"
import ProductDetailContent from "../layouts/detail/ProductDetailContent"
import { FadeAnimation } from "../animations/FadeAnimation"
import { useParams } from "react-router-dom"

const DetailPage = () => {
     const { productId } = useParams<{ productId: string }>()

     return (
          <FadeAnimation className="px-7 space-y-10 lg:px-20 relative">
               <RouteHistory
                    prevRoute="/catalog"
                    prevText="Catalog"
                    currentRoute={`/catalog-detail/${productId}`}
                    currentText="Detail" />
               <ProductDetailContent productId={productId} />
               <ListProductDetail currentProductId={Number(productId)} />
          </FadeAnimation>
     )
}

export default DetailPage