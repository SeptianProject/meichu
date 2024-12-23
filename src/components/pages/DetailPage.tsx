import RouteHistory from "../layouts/RouteHistory"
import MainContentDetail from "../layouts/detail/MainContentDetail"
import MainDescriptionDetail from "../layouts/detail/MainDescriptionDetail"
import React from "react"
import ListProductDetail from "../layouts/detail/ListProductDetail"
import { FadeAnimation } from "../animations/FadeAnimation"
import { detailProducts } from "../../assets/meichuBundle"

type ImageContent = {
     id: 'first' | 'second' | 'third';
     source: string
}

const DetailPage = () => {
     const [selectContent, setSelectContent] = React.useState<ImageContent['id']>('first')
     const images: ImageContent[] = React.useMemo(() => [
          { id: 'first', source: detailProducts[0] },
          { id: 'second', source: detailProducts[1] },
          { id: 'third', source: detailProducts[2] },
     ], [])

     const handleSelectContent = (content: ImageContent['id']) => {
          setSelectContent(content)
     }

     return (
          <FadeAnimation className="px-7 space-y-10 lg:px-20 relative">
               <RouteHistory
                    prevRoute="/catalog"
                    prevText="Catalog"
                    currentRoute="/catalog-detail"
                    currentText="Detail" />
               <div className="space-y-10 lg:flex items-center gap-x-16">
                    <MainContentDetail
                         images={images}
                         content={selectContent}
                         onSelectContent={handleSelectContent} />
                    <MainDescriptionDetail
                         onBuyCLick={() => { }} />
               </div>
               <ListProductDetail
                    onLoadMore={() => { }} />
          </FadeAnimation>
     )
}

export default DetailPage