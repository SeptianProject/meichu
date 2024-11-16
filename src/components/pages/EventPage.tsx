import HeadEvent from "../layouts/event/HeadEvent"
import MainContentEvent from "../layouts/event/MainContentEvent"
import RouteHistory from "../layouts/RouteHistory"

const EventPage = () => {
     return (
          <section className="px-7 space-y-10 lg:px-20">
               <RouteHistory currentRoute="/event" currentText="Event" />
               <HeadEvent />
               <MainContentEvent />
          </section>
     )
}

export default EventPage