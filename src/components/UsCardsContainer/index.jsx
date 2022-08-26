import React from 'react';
import "./UsCardsContainer.css";
import { ABOUT_US } from '../../helpers/dataUs';
import UsCards from '../UsCards/index';

//Los datos de Nosotros están en un archivo en helpers/dataUs

const UsCardsContainer = () => {
  
  return (
    <div className='contenedor-nosotros'>
      <h3 className='titulo-nosotros'>¿Por qué elegirnos?</h3>
        <div className='nosotros'>
          <ul className='lista-nosotros'>
            {
              ABOUT_US.map(item => (
                <UsCards
                    key={item.id}
                    id={item.id} 
                    icono={item.icono}
                    titulo={item.titulo}
                    contenido={item.contenido}/>
              ))
            }
          </ul>
        </div>
    </div>
  )
}

export default UsCardsContainer;
