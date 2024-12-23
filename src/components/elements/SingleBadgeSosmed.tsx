import React, { FC } from "react";
import { IconType } from "react-icons";

interface SingleBadgeSosmedProps {
     icon: IconType
}

const SingleBadgeSosmed: FC<SingleBadgeSosmedProps> = React.memo(({ icon: Icon }) => {
     return (
          <button className="border-2 border-light border-opacity-30 rounded-full size-9 xl:size-10
          flex items-center justify-center hover:bg-light hover:bg-opacity-25
          transition-colors duration-300">
               <Icon className="text-light w-full size-4 xl:size-5" />
          </button>
     );
})

export default SingleBadgeSosmed;