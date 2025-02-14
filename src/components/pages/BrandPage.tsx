import { BsInstagram, BsTiktok, BsTwitterX, BsYoutube } from "react-icons/bs"
import { CardStaggerAnimation, ContainerStaggerAnimation } from "../animations/StaggerAnimation"
import SingleBadgeSosmed from "../elements/SingleBadgeSosmed"
import TextTagline from "../fragments/home/TextTagline"
import RouteHistory from "../../routes/HistoryRoute"
import { BrandAmbassadors } from "../../types"
import BrandPageSkeleton from "../elements/skeletons/BrandPageSkeleton"
import React from "react"
import { useBrandAmbassadorData } from "../../hooks/useQueryRequest"
import { getCloudinaryUrl } from "../../services"
import Button from "../elements/buttons/Button"

const BrandPage = () => {
     const { data: brandAmbassadorData, isLoading } = useBrandAmbassadorData()

     return (
          <section className="px-7 space-y-10 lg:px-20 relative">
               <RouteHistory currentRoute="/brand-ambassador"
                    currentText="Brand Ambassador Meichu" />
               <div className="space-y-5">
                    <TextTagline text="Brand Ambassador" className="font-semibold" />
                    <p className="font-light text-dark dark:text-light tracking-wide">
                         MeiChu's Brand Ambassador inspires elegance and trust with passion and authenticity.
                    </p>
               </div>
               <div className="flex flex-col items-center gap-y-16">
                    <BrandAmbassadorCards
                         isLoading={isLoading}
                         brandAmbassadorData={brandAmbassadorData}
                    />
                    <Button
                         isGold
                         title="Load More"
                    />
               </div>
          </section>
     )
}

export default React.memo(BrandPage)

interface BrandAmbassadorCardsProps {
     brandAmbassadorData?: BrandAmbassadors
     isLoading?: boolean
}

const BrandAmbassadorCards: React.FC<BrandAmbassadorCardsProps> = ({ isLoading, brandAmbassadorData }) => {
     if (isLoading) return <BrandPageSkeleton />

     return (
          <ContainerStaggerAnimation
               initialDelay={0.5}
               staggerDelay={0.4}
               className="w-full">
               <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {brandAmbassadorData?.data.map((brand) => (
                         <CardStaggerAnimation
                              key={brand.id}
                              hiddenPosition={{ y: 50 }}>
                              <div className="h-[28rem] bg-center bg-cover rounded-2xl relative overflow-hidden 
                              lg:h-[25rem] xl:h-[32rem] bg-slate-200 dark:bg-cardBackground"
                                   style={{ backgroundImage: `url(${getCloudinaryUrl(brand.attributes.image.data.attributes.url)})` }}>
                                   <div className="absolute bottom-7 z-10 left-5 flex flex-col gap-y-2">
                                        <h1 className="font-semibold lg:text-lg xl:text-xl text-light">
                                             {brand.attributes.name ?? 'Jane Rubyjane'}
                                        </h1>
                                        <p className="lg:text-xs xl:text-base font-extralight text-light">
                                             {brand.attributes.description ?? 'Whether you have a question about talents, pricing, portfolio,or anything else, our team...'}
                                        </p>
                                        <div className="flex items-center gap-x-2">
                                             <SingleBadgeSosmed icon={BsTwitterX} />
                                             <SingleBadgeSosmed icon={BsInstagram} />
                                             <SingleBadgeSosmed icon={BsYoutube} />
                                             <SingleBadgeSosmed icon={BsTiktok} />
                                        </div>
                                   </div>
                                   <div className="absolute h-40 w-full bottom-0 rounded-t-2xl 
                                   bg-gradient-to-t from-[#BA8C46] to-transparent from-20%"/>
                              </div>
                         </CardStaggerAnimation>
                    ))}
               </div>
          </ContainerStaggerAnimation>
     )
}