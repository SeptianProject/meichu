import React from "react"

type TDescCardEvent = {
     type: 'event' | 'profile'
}

const DescCardEvent: React.FC<TDescCardEvent> = React.memo(({ type }) => {
     return (
          <p className="font-light text-[10px] sm:text-xs md:text-sm text-opacity-80 tracking-wide dark:text-light
                    dark:text-opacity-80">
               {type === 'event'
                    ? 'Whether you have a question about talents, pricing, portfolio, or anything else, our team, Whether you have a question about talents, pricing.'
                    : 'Your request is being processed. Please hold on for a moment as we carefully craft your product to ensure the highest quality, Thank You!'}
          </p>
     )
})

export default DescCardEvent