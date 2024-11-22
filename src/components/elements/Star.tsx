import Icon from '@mdi/react'
import { mdiStarFourPoints } from '@mdi/js'

type StarProps = {
     className?: string
}

const Star = ({ className }: StarProps) => {
     return (
          <Icon path={mdiStarFourPoints}
               className={`absolute ${className} text-dark dark:text-light 
                    size-5 md:size-8 lg:size-12`} />
     )
}

export default Star