import BtnBorderGradient from "../elements/BtnBorderGradient"
import HeadingBA from "../layouts/brand/HeadingBA"
import MainContentBA from "../layouts/brand/MainContentBA"
import RouteHistory from "../layouts/RouteHistory"

const BrandPage = () => {
     return (
          <section className="px-7 space-y-10 lg:px-20 relative">
               <RouteHistory currentRoute="/brand-ambassador"
                    currentText="Brand Ambassador Meichu" />
               <HeadingBA />
               {/* Main Content */}
               <div className="flex flex-col items-center gap-y-16">
                    <MainContentBA />
                    <BtnBorderGradient onClick={() => { }} />
               </div>
          </section>
     )
}

export default BrandPage