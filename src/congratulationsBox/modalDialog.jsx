import './modalDialog.css'
import React, { useRef,useEffect} from "react";

const Modal = ({ isOpen, hasCloseBtn = true, onClose, children}) => {
    const modalRef = useRef(null);

    const handleCloseModal = () => {
      if (onClose) {
        onClose();
      }
    };
  
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };
  
    useEffect(() => {
      const modalElement = modalRef.current;
      if (!modalElement) return;
  
      if (isOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }, [isOpen]);
  
    return (
      <dialog ref={modalRef} onKeyDown={handleKeyDown} className="modal">
        
        {children}
        {hasCloseBtn && (
        <button className="modal-close-btn" onClick={handleCloseModal}>
          Try again
        </button>
      )}
      </dialog>
    );
  };
  
  export default Modal