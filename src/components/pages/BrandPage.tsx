import ButtonBorderGradient from "../elements/buttons/ButtonBorderGradient"
import TextTagline from "../fragments/home/TextTagline"
import MainContentBA from "../layouts/brand/MainContentBA"
import RouteHistory from "../layouts/RouteHistory"

const BrandPage = () => {
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
                    <MainContentBA />
                    <ButtonBorderGradient onClick={() => { }} />
               </div>
          </section>
     )
}

export default BrandPage