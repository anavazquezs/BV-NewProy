import './CardsFooter.css';

const CardsFooter = (props) => {
  return (
    <div className='items-footer' key={props.id}>
        <h4 className='titulo-footer'> <span> {props.icono}</span> {props.titulo} </h4>
        <p>{props.reseña}</p>
        <p>{props.direccion}</p>
        <p>{props.semana}</p>
        <p>{props.finde}</p>
    </div>
  )
}

export default CardsFooter;