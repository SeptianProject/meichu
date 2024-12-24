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
                         Whether you have a question about talents, pricing, portfolio, or anything else, our team is ready.
                    </p>
               </div>
               <MainContentEvent />
          </section>
     )
}

export default EventPage