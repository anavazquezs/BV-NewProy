import React from 'react';
import './UsCards.css';

const UsCards = ({ id, icono, titulo, contenido }) => {
    
    return (
        <li key={id} id={id} className='aboutus-card'>
            <div className='aboutus-icono'>{ icono }</div>
            <h4 className='aboutus-titulo'>{ titulo }</h4>
            <p className='aboutus-contenido'>{ contenido }</p>
        </li>
        )
}



export default UsCards ;