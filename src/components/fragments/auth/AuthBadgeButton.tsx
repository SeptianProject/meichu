import { badgeAuthItems } from "../../../assets/assets";
import ListBadgeSosmed from "../../elements/ListBadgeSosmed";

const AuthBadgeButton = () => {
     return (
          <>
               <p className="dark:text-light/40 text-xs text-center">
                    - OR Continue with -
               </p>
               <div className="flex items-center justify-center gap-x-3">
                    <ListBadgeSosmed badgeItems={badgeAuthItems}
                         className="rounded-full border border-dark dark:border-transparent dark:bg-light" />
               </div>
          </>
     );
}

export default AuthBadgeButton;