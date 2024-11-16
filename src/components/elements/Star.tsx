import Icon from '@mdi/react'
import { mdiStarFourPoints } from '@mdi/js'

type StarProps = {
     className?: string
}

const Star = ({ className }: StarProps) => {
     return (
          <Icon path={mdiStarFourPoints} size={1}
               className={`absolute ${className} text-dark 
               dark:text-light size-5 lg:size-12`} />
     )
}

export default Star