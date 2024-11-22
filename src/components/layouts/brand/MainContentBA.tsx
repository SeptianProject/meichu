import { brandAmbassadorItems } from "../../../assets/assets"
import CardGradientBA from "../../fragments/brand/CardGradientBA"

const MainContentBA = () => {
     return (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               {brandAmbassadorItems.map((item, index) => (
                    <CardGradientBA key={index} image={item} title="Jenny RubyJane"
                         desc="Whether you have a question about talents, pricing, portfolio, or anything else, our team..." />
               ))}
          </div>
     )
}

export default MainContentBA