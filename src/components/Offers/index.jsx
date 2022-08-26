import Modal from '../Modal/index';
import { useState } from 'react';
import { FiX } from "react-icons/fi";
import './Offers.css';
import { useModal } from '../../hooks/useModal';

function Offers() {
    const [ isOpenModalOffers, openModalOfffers, closeModalOffers ] = useModal(false);

    const [ open, setOpen ] = useState(true);
    
    const offers = ['20 % off en cursos', '35 % off en libros', '10 % off en spa', '25 % off en cosméticos'];

  return (
    open ?
        <>
            <div className='offers-container'>
                <p><button onClick={openModalOfffers}>Tenemos ofertas todos los días!! Mirá tu descuento del día</button></p>
                <button onClick={(e) => setOpen(!open)} className='offers-close'>
                    <div className='tooltip'>
                        <FiX  /><span className='tooltiptext'>Cerrar</span>
                    </div>
                </button>
            </div>
            <Modal isOpen={isOpenModalOffers} closeModal={closeModalOffers}>
                <div className='offers-modal'>
                    <h3>{offers[Math.floor(Math.random() * (3 - 0 + 1))]}</h3>
                    <h1>TU CÓDIGO:</h1>
                    <h2>BVWH-{Math.random()}</h2>
                </div>
            </Modal>
        </>
    : ''
  )
}

export default Offers;