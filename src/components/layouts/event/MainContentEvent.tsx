import BtnBorderGradient from "../../elements/BtnBorderGradient"
import CardEvent from "../../fragments/event/CardEvent"

const cardEvent = <CardEvent type="event" />

const listCardEvent = [
     cardEvent, cardEvent, cardEvent, cardEvent, cardEvent, cardEvent, cardEvent, cardEvent,
]

const MainContentEvent = () => {

     return (
          <div className="flex flex-col items-center gap-y-20">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-y-7">
                    {listCardEvent.map((item, index) => (
                         <div key={index} className='w-full'>{item}</div>
                    ))}
               </div>
               <BtnBorderGradient onClick={() => { }} />
          </div>
     )
}

export default MainContentEvent