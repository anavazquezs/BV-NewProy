import Modal from '../Modal/index';
import { useState } from 'react';
import { FiX } from "react-icons/fi";
import './Offers.css';
import { useModal } from '../../hooks/useModal';

function Offers() {
    //Se usa hook customizado useModal
    const [ isOpenModalOffers, openModalOfffers, closeModalOffers ] = useModal(false);

    //Se muestra o no la oferta
    const [ open, setOpen ] = useState(true);
    
    //Ofertas
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
                    <h3>{offers[Math.floor(Math.random() * (3 - 0 + 1))]}</h3> {/* MathRandom entre 1 y 4 porque hay sólo 4 ofertas*/}
                    <h1>TU CÓDIGO:</h1>
                    <h2>BVWH-{Math.random()}</h2> {/* Random entre 0 y 1 para el código */}
                </div>
            </Modal>
        </>
    : ''
  )
}

export default Offers;