import BounceAnimation from '../../animations/BounceAnimation'
import TextTagline from '../../fragments/home/TextTagline'

const HeadEvent = () => {
     return (
          <div className="space-y-4">
               <TextTagline text="Meichu Event" className="font-semibold" />
               <BounceAnimation
                    delayVal={1}
                    hiddenCoordinates={{ x: -50 }}>
                    <p className="font-light tracking-wide text-opacity-80 
                    dark:text-light dark:text-opacity-80">
                         Whether you have a question about talents, pricing, portfolio, or anything else, our team is ready.
                    </p>
               </BounceAnimation>
          </div>
     )
}

export default HeadEvent