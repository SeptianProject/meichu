import { BsInstagram, BsTiktok, BsTwitterX, BsYoutube } from "react-icons/bs"
import { ContainerStaggerAnimation } from "../animations/StaggerAnimation"
import ButtonBorderGradient from "../elements/buttons/ButtonBorderGradient"
import SingleBadgeSosmed from "../elements/SingleBadgeSosmed"
import TextTagline from "../fragments/home/TextTagline"
import RouteHistory from "../../routes/HistoryRoute"
import { useQuery } from "@tanstack/react-query"
import { BrandAmbassadors } from "../../types"
import { getBrandAmbassadors } from "../../services/productService"
import BrandPageSkeleton from "../elements/skeletons/BrandPageSkeleton"
import React from "react"

const BrandPage = () => {
     const { data: brandAmbassadorData, isLoading } = useQuery<BrandAmbassadors>(['ambassador'], getBrandAmbassadors)

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
                    <ButtonBorderGradient
                         onClick={() => { }}
                    />
               </div>
          </section>
     )
}

export default BrandPage

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
                         <div key={brand.id} className="h-[30rem] bg-center bg-cover rounded-2xl relative overflow-hidden lg:h-[25rem] xl:h-[32rem]"
                              style={{ backgroundImage: `url(${brand.attributes.image.data.attributes.url})` }}>
                              <div className="absolute bottom-7 z-10 left-5 flex flex-col gap-y-2">
                                   <h1 className="font-semibold lg:text-lg xl:text-2xl text-light">
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
                              <div className="absolute h-44 w-full bottom-0 rounded-t-2xl 
                                   bg-gradient-to-t from-yellowBloobs via-yellowBloobs/40
                                   to-transparent via-60% from-[5%]"/>
                         </div>
                    ))}
               </div>
          </ContainerStaggerAnimation>
     )
}