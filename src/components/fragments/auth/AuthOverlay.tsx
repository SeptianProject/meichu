import React from "react";

interface AuthOverlayProps {
     isModalClose: () => void;
     isModalOpen: boolean;
}

const AuthOverlay: React.FC<AuthOverlayProps> = ({ isModalClose, isModalOpen }) => {
     return (
          <div onClick={isModalClose}
               className={`fixed inset-0 bg-black/50 backdrop-blur-sm
                    ${isModalOpen ? 'z-10 translate-x-0' : '-z-10 opacity-0 pointer-events-none'}`} />
     );
}

export default AuthOverlay;