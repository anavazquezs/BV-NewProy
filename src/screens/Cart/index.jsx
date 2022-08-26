
import { NavLink } from 'react-router-dom';
import React from 'react';
import useCartContext from '../../hooks/useCartContext';
import { useModal } from '../../hooks/useModal';
import Modal from '../../components/Modal/index';
import Button from '../../components/Styles/Button/index';
import './Cart.css';


const Cart = () => {

  const { cart, counter, totalPrice, removeFromCart, resetCart, substractCounter, substTotalPrice } = useCartContext();

  const [ isOpenModalCart, openModalCart, closeModalCart ] = useModal(false);

  return (
    <div className='contenedor-cart'>
        {counter > 0 ? 
            <>
                <div className='contenedor-cart-lleno'>
                    <h2>Resumen <span>de Compra</span></h2>
                </div>
                <div className='contenedor-display'>
                    {
                        cart.map((item) => {
                            return(
                                <div className='contenedor-carrito'>
                                    <div key={ item.id } className='key'>
                                        <div className='cart-lleno-card'>
                                            <div className='cart-lleno-img'>
                                                <img className='imagen' src={ item.img } alt='...' />
                                            </div>
                                            <div className='cart-lleno-producto'>
                                                <h5>{ `${item.product } x ${item.cant}`  }</h5>
                                            </div>
                                            <div className='cart-lleno-precio'>
                                                <p>{ `$${ item.price * item.cant },00` }</p>
                                            </div>
                                            <div className='cart-lleno-eliminar-prod'>
                                                <button onClick={() => { removeFromCart(item); substractCounter(); substTotalPrice(item.price) }}>Eliminar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='cart-lleno-pagar'>
                    <h2>{`Total a pagar: `}<span>{`$ ${totalPrice},00`}</span></h2>
                </div>
                <div className='cart-lleno-botones'>
                    <div className='cart-seguir'>
                        <button className='seguir-comprando'><NavLink className='navLink-cart' to='/'>Seguir Comprando</NavLink></button>
                    </div>
                    <div className='cart-lleno-botones-fin'>
                        <button onClick={ openModalCart }>
                            Finalizar Compra
                        </button>
                    </div>
                    <div className='cart-lleno-botones-vaciar'>
                        <button onClick={ resetCart }>
                            Vaciar el carrito
                        </button>
                    </div>
                </div>
                <div>
                    <Modal isOpen={isOpenModalCart} closeModal={closeModalCart}>
                        <div className='modal-cart'>
                            <h5>Compra finalizada</h5>
                            <p>Tu compra se ha procesado <span>correctamente</span>. Pronto nos pondremos en contacto para coordinar la entrega.</p>
                            <h6>¡Muchas gracias!</h6>
                            <Button>
                            <button onClick={ () => {
                                resetCart();
                                } 
                            }>Cerrar</button>
                            </Button>
                        </div>
                          </Modal>
                </div>
            </>
        :
            <>
                <div className='contenedor-cart-vacio'>
                    <h2>Carrito <span>Vacío</span></h2>
                    <div className='button-cart-vacio'>
                        <button className='seguir-comprando'>
                            <NavLink className='navLink-cart' to='/'>Volver al Inicio</NavLink>
                        </button>
                    </div>
                </div>
            </>
        }
    </div>
  )
}

export default Cart;