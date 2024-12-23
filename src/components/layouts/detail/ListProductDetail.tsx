import CatalogCard from '../catalog/CatalogCard'
import BtnBorderGradient from '../../elements/buttons/BorderGradientBtn'
import React from 'react'
import { CardStaggerAnimation, ContainerStaggerAnimation } from '../../animations/StaggerAnimation'

interface ListProductDetailProps {
     onLoadMore: () => void
}

const catalogCard = <CatalogCard type="catalog" />

const ListProductDetail: React.FC<ListProductDetailProps> = React.memo(({
     onLoadMore
}) => {
     const listCatalog = React.useMemo(() => [
          { id: 1, component: catalogCard },
          { id: 2, component: catalogCard },
          { id: 3, component: catalogCard },
          { id: 4, component: catalogCard },
          { id: 5, component: catalogCard },
          { id: 6, component: catalogCard },
     ], [])

     return (
          <div className="border-t-2 border-dark/30 dark:border-light/20 space-y-10 pb-40 lg:pb-0">
               <h1 className="text-2xl font-semibold pt-5 dark:text-light">
                    Explore Others Products
               </h1>
               <div className="flex flex-col items-center gap-y-16">
                    <ContainerStaggerAnimation
                         initialDelay={0.5}
                         staggerDelay={0.4}
                         className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                         {listCatalog.map((item) => (
                              <CardStaggerAnimation
                                   hiddenPosition={{ y: 100 }}>
                                   <div key={item.id}>
                                        {item.component}
                                   </div>
                              </CardStaggerAnimation>
                         ))}
                    </ContainerStaggerAnimation>
                    <BtnBorderGradient onClick={onLoadMore} />
               </div>
          </div>
     )
})

export default ListProductDetail