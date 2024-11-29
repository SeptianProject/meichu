import Icon from '@mdi/react'
import { mdiStarFourPoints } from '@mdi/js'
import React from 'react'

type StarProps = {
     className?: string
}

const Star: React.FC<StarProps> = ({ className }) => {

     return (
          <Icon path={mdiStarFourPoints}
               className={`absolute ${className} text-dark dark:text-light 
                    size-5 md:size-8 lg:size-12`} />
     )
}

export default Star