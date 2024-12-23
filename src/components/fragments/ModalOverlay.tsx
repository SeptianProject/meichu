import React from "react";

interface ModalOverlayProps {
     isModalClose: () => void;
     isModalOpen: boolean;
}

const ModalOverlay: React.FC<ModalOverlayProps> = React.memo(({
     isModalClose,
     isModalOpen
}) => {
     return (
          <div onClick={isModalClose}
               className={`fixed inset-0 bg-black/50 backdrop-blur-sm
                    ${isModalOpen ? 'z-20 translate-x-0' : '-z-10 opacity-0 pointer-events-none'}`} />
     );
})

export default ModalOverlay;