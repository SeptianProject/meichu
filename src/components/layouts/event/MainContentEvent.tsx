import BtnBorderGradient from "../../elements/BtnBorderGradient"
import CardEvent from "../../fragments/event/CardEvent"

const MainContentEvent = () => {
     return (
          <div className="flex flex-col items-center gap-y-20">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-y-7">
                    <CardEvent />
                    <CardEvent />
                    <CardEvent />
                    <CardEvent />
               </div>
               <BtnBorderGradient />
          </div>
     )
}

export default MainContentEvent