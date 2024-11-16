import RoundedButton from "../../elements/RoundedButton"

const ActionButtonProduct = () => {
     return (
          <div className="flex items-center gap-x-5 pb-20 lg:pb-0">
               <RoundedButton onClick={() => { }} title="Cancel"
                    className="bg-transparent text-[#5E5A5A] border-[#5E5A5A]" />
               <RoundedButton onClick={() => { }} title="Publish"
                    className="bg-bluePrimary text-light border-transparent" />
          </div>
     )
}

export default ActionButtonProduct