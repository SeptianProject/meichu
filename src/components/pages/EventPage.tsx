import React from "react"
import CardEvent from "../fragments/event/CardEvent"
import TextTagline from "../fragments/home/TextTagline"
import RouteHistory from "../../routes/HistoryRoute"
import ButtonBorderGradient from "../elements/buttons/ButtonBorderGradient"
import { CardStaggerAnimation, ContainerStaggerAnimation } from "../animations/StaggerAnimation"

const cardEvent = <CardEvent isEvent />

const EventPage = () => {
     const listCardEvent = React.useMemo(() => [
          cardEvent,
          cardEvent,
          cardEvent,
          cardEvent
     ], [])

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
               <div className="flex flex-col items-center gap-y-20">
                    <ContainerStaggerAnimation
                         staggerDelay={0.4}
                         className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                         {listCardEvent.map((item, index) => (
                              <CardStaggerAnimation
                                   key={index}
                                   hiddenPosition={{ y: 50 }}>
                                   {item}
                              </CardStaggerAnimation>
                         ))}
                    </ContainerStaggerAnimation>
                    <ButtonBorderGradient onClick={() => { }} />
               </div>
          </section>
     )
}

export default EventPage