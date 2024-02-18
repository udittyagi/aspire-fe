import { useRef, useState, useEffect} from 'react';

import { DialogContainer } from "./Dialog.styled"

import closeIcon from '../../../assets/images/mobile/closeIcon.png';

interface PropTypes {
    isOpen: boolean;
    isModal?: boolean;
    hasCloseBtn?: boolean;
    onClose?: () => void;
    children: React.ReactNode;
    className?: string;
  }

const Dialog = ({
    isOpen,
    hasCloseBtn = true,
    onClose,
    className,
    children
  }: PropTypes) => {
    const [isModalOpen, setModalOpen] = useState(isOpen);
    const modalRef = useRef<HTMLDialogElement | null>(null);
  
    const handleCloseModal = () => {
      if (onClose) {
        onClose();
      }
      setModalOpen(false);
    };
  
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };
  
    useEffect(() => {
      setModalOpen(isOpen);
    }, [isOpen]);
  
    useEffect(() => {
      const modalElement = modalRef.current;
  
      if (modalElement) {
        if (isModalOpen) {
          modalElement.showModal();
        } else {
          modalElement.close();
        }
      }
    }, [isModalOpen]);

    return (
        <DialogContainer ref={modalRef} onKeyDown={handleKeyDown} className={className}>
            {
                hasCloseBtn && (
                    <div className='btn__close' role="button" onClick={handleCloseModal}>
                        <img src={closeIcon} alt="" width={14}/>
                    </div>
                )
            }
            {children}
        </DialogContainer>
    )
}

export default Dialog