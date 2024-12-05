import { CardStaggerAnimation, ContainerStaggerAnimation } from "../../animations/StaggerAnimation"
import BtnBorderGradient from "../../elements/buttons/BorderGradientBtn"
import CardEvent from "../../fragments/event/CardEvent"

const cardEvent = <CardEvent type="event" />

const listCardEvent = [
     cardEvent, cardEvent, cardEvent, cardEvent, cardEvent, cardEvent, cardEvent, cardEvent, cardEvent
]

const MainContentEvent = () => {

     return (
          <div className="flex flex-col items-center gap-y-20">
               <ContainerStaggerAnimation
                    initialDelay={0.5}
                    staggerDelay={0.4}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                    {listCardEvent.map((item, index) => (
                         <CardStaggerAnimation
                              key={index}
                              hiddenPosition={{ y: 100 }}
                              className='w-full'>
                              {item}
                         </CardStaggerAnimation>
                    ))}
               </ContainerStaggerAnimation>
               <BtnBorderGradient onClick={() => { }} />
          </div>
     )
}

export default MainContentEvent