import './Modal.css';
import { GoX } from 'react-icons/go';

const Modal = ({ children, isOpen, closeModal }) => {
    const handleModalContainerClic = (e) => e.stopPropagation();
  return (
    <article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
        <div className='modal-container' onClick={handleModalContainerClic}>
            <button className='modal-close' onClick={closeModal}>
                <GoX />
            </button>
            {children}
        </div>
    </article>
  )
}

export default Modal;