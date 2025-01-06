import TextTagline from "../fragments/home/TextTagline"
import MainContentEvent from "../layouts/event/MainContentEvent"
import RouteHistory from "../layouts/RouteHistory"

const EventPage = () => {
     return (
          <section className="px-7 space-y-10 lg:px-20 relative">
               <RouteHistory currentRoute="/event" currentText="Event" />
               <div className="space-y-4">
                    <TextTagline text="Meichu Event" className="font-semibold" />
                    <p className="font-light tracking-wide text-opacity-80 
                    dark:text-light dark:text-opacity-80">
                         Meichu event held on IMVU, Instagram, Facebook Meichu Shop can be seen below.
                    </p>
               </div>
               <MainContentEvent />
          </section>
     )
}

export default EventPage