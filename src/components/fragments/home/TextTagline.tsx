import React from "react"

type TextTaglineProps = {
     text: string
     className?: string
}

const TextTagline: React.FC<TextTaglineProps> = React.memo(({ text, className }) => {
     return (
          <div className={`flex flex-col gap-y-2 w-fit`}>
               <h1 className={`text-2xl md:text-3xl dark:text-light uppercase ${className}`}>{text}</h1>
               <div className="w-full h-[3px] rounded-full bg-gold" />
          </div>
     )
})

export default TextTagline