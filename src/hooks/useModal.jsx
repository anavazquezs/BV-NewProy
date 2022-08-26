import { useState } from 'react';

//Hook para usar modal y cambios de estado con useState del modal

export const useModal = (initialValue = false) => {
    const [ isOpen, setIsOpen ] = useState(initialValue);

    const openModal = () => setIsOpen(true);

    const closeModal = () => setIsOpen(false);

  return [ isOpen, openModal, closeModal ];
}




