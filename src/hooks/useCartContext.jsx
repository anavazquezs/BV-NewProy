import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

//Hook para usar contexto

const useCartContext = () => {
  return useContext(CartContext);
}

export default useCartContext;
