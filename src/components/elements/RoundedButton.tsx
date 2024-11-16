import { FC } from "react";

interface RoundedButtonProps {
     title: string;
     onClick: () => void;
     className?: string;
}

const RoundedButton: FC<RoundedButtonProps> = ({ onClick, title, className }) => {
     return (
          <button onClick={onClick}
               className={`${className} border rounded-full w-36 py-3 lg:w-44`}>
               {title}
          </button>
     );
}

export default RoundedButton;