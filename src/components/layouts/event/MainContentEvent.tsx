import React from "react"
import { CardStaggerAnimation, ContainerStaggerAnimation } from "../../animations/StaggerAnimation"
import ButtonBorderGradient from "../../elements/buttons/ButtonBorderGradient"
import CardEvent from "../../fragments/event/CardEvent"

const cardEvent = <CardEvent type="event" />

const MainContentEvent = () => {
     const listCardEvent = React.useMemo(() => [
          cardEvent,
          cardEvent,
          cardEvent,
          cardEvent,
          cardEvent,
          cardEvent,
          cardEvent,
          cardEvent,
          cardEvent
     ], [])

     return (
          <div className="flex flex-col items-center gap-y-20">
               <ContainerStaggerAnimation
                    initialDelay={0.5}
                    staggerDelay={0.4}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    {listCardEvent.map((item, index) => (
                         <CardStaggerAnimation
                              key={index}
                              hiddenPosition={{ y: 100 }}
                              className='w-full'>
                              {item}
                         </CardStaggerAnimation>
                    ))}
               </ContainerStaggerAnimation>
               <ButtonBorderGradient onClick={() => { }} />
          </div>
     )
}

export default MainContentEvent