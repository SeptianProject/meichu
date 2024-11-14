import { BsClock } from "react-icons/bs"
import { bestSellerImages } from "../../assets/assets"
import TextTagline from "../fragments/home/TextTagline"
import RouteHistory from "../layouts/RouteHistory"
import BtnBorderGradient from "../elements/BtnBorderGradient"

const EventPage = () => {
     return (
          <section className="px-7 space-y-10 lg:px-20">
               <RouteHistory currentRoute="/event" currentText="Event" />
               <div className="space-y-4">
                    <TextTagline text="Meichu Event" className="font-semibold" />
                    <p className="font-light tracking-wide text-opacity-80">Whether you have a question about talents, pricing, portfolio, or anything else, our team is ready.</p>
               </div>
               {/* Cards */}
               <div className="flex flex-col items-center gap-y-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-y-7">
                         <EventCard />
                         <EventCard />
                         <EventCard />
                         <EventCard />
                    </div>
                    <BtnBorderGradient />
               </div>
          </section>
     )
}

export default EventPage

const EventCard = () => {
     return (
          <div className="w-full h-80 bg-[#302F35] rounded-2xl p-4 space-y-2">
               <div>
                    <img className="w-full h-40 object-cover rounded-xl"
                         src={bestSellerImages[1]} alt="" />
               </div>
               <div className="flex flex-col gap-y-3">
                    <div className="flex items-center justify-between w-full">
                         <h1 className="font-semibold">Giveaway Assets Chinnese</h1>
                         <button className="font-semibold text-sm font-inter 
                                   text-light bg-bluePrimary w-24 py-[5px] rounded-full">
                              See Event
                         </button>
                    </div>
                    <p className="font-light text-xs text-opacity-80 tracking-wide">Whether you have a question about talents, pricing, portfolio, or anything else, our team, Whether you have a question about talents, pricing.</p>
                    <div className="flex items-center gap-x-3">
                         <BsClock className="text-bluePrimary" />
                         <p className="text-sm font-light text-opacity-80">Feb 25, 2024</p>
                    </div>
               </div>
          </div>
     )
}