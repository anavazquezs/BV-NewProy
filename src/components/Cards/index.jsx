import { useEffect, useState } from "react";
import useCartContext from "../../hooks/useCartContext";
import { useModal } from "../../hooks/useModal";
import Button from '../Styles/Button/index';
import { BsCart4 } from "react-icons/bs";
import './Cards.css';
import Modal from '../../components/Modal/index';


const Cards = ({ mykey, img, product, price, offer }) => {
    
    const objProduct = {'id': mykey, 'product': product, 'img': img, 'price': price, 'cant': 1};

    const [ isOpenModalCards, openModalCards, closeModalCards ] = useModal(false);

    const { cart, addToCart, addCounter, addTotalPrice } = useCartContext();

    const handleOnClick = () => {
      addCounter();
      addTotalPrice(objProduct.price);
      cart.forEach((item) => {
        if(item.id === objProduct.id) {
          item.cant++;
        }
      });
      const isInCart = cart.find((item) => item.id === objProduct.id);
      if(!isInCart) {
        addToCart(objProduct);
  }
}

  return (
    <>
      <figure key={mykey} className='card-producto'>
        <img src={img} alt={product} />
        <figcaption>
          <p> {product} </p>
          <p> ${price} <span className='lista'>${offer}</span></p>
          <Button HandleClick={openModalCards}>Agregar al Carrito<BsCart4 className='cart'/></Button>
        </figcaption>
      </figure>
      <Modal isOpen={isOpenModalCards} closeModal={closeModalCards}>
        <div className='modal-cards'>
          <h2>Estas a un paso de obtener mayor salud y bienestar</h2>
          <p>¿Deseas continuar?</p>
          <div className='botones'>
            <button className='cancelar' id='cancelar' onClick={closeModalCards}>Cancelar</button>
            <button className='continuar' id='continuar' onClick={handleOnClick}>Continuar</button>
          </div>
        </div>
      </Modal>
    </>
    
  )
}

export default Cards;
