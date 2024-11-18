import React from "react";
import RoundedButton from "../../elements/RoundedButton"
import { useNavigate } from "react-router-dom"


type ActionButtonProductProps = {
     onPublish: () => void;
}

const ActionButtonProduct: React.FC<ActionButtonProductProps> = ({ onPublish }) => {
     const navigate = useNavigate()

     return (
          <div className="flex items-center gap-x-5 pb-20 lg:pb-0">
               <RoundedButton onClick={() => navigate('/')} title="Cancel"
                    className="bg-transparent text-[#5E5A5A] border-[#5E5A5A]" />
               <RoundedButton onClick={onPublish} title="Publish"
                    className="bg-bluePrimary text-light border-transparent" />
          </div>
     )
}

export default ActionButtonProduct