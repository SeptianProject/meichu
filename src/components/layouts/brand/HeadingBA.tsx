import BounceAnimation from '../../animations/BounceAnimation'
import TextTagline from '../../fragments/home/TextTagline'

const HeadingBA = () => {
     return (
          <div className="space-y-5">
               <TextTagline text="Brand Ambassador" className="font-semibold" />
               <BounceAnimation
                    delayVal={0.5}
                    hiddenCoordinates={{ y: -50 }}>
                    <p className="font-light text-dark dark:text-light tracking-wide">
                         Whether you have a question about talents, pricing, portfolio, or anything else, our team is ready.
                    </p>
               </BounceAnimation>
          </div>
     )
}

export default HeadingBA