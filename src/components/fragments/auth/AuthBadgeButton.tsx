import { authIcons } from "../../../assets/badgeAssets";
import ListBadgeSosmed from "../../elements/ListBadgeSosmed";

const AuthBadgeButton = () => {
     return (
          <>
               <p className="dark:text-light/40 text-xs text-center">
                    - OR Continue with -
               </p>
               <div className="flex items-center justify-center gap-x-3">
                    <ListBadgeSosmed badgeItems={authIcons}
                         className="rounded-full border border-dark 
                         dark:border-transparent dark:bg-light
                         transition-all duration-300 hover:-translate-y-1 hover:scale-110" />
               </div>
          </>
     );
}

export default AuthBadgeButton;