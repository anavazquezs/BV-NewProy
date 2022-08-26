import { DATA_FOOTER } from '../../helpers/dataFooter';
import CardsFooter from '../CardsFooter';
import '../CardsFooter/CardsFooter.css';

const CardsFooterContainer = () => {
  return (
    <>
          <div className='footer-container'>
            <div className='card-container'> 
              {DATA_FOOTER.filter(el => el.tipo === "All Categories").map(el =>
              <CardsFooter
              key={el.id}
              titulo={el.titulo}
              reseña={el.reseña}
              />
              )}
            </div>
            
            <div className='card-container'> 
              {DATA_FOOTER.filter(el => el.tipo === "Gifts & Bundles").map(el =>
              <CardsFooter
              key={el.id}
              titulo={el.titulo}
              reseña={el.reseña}
              />
              )}
            </div>
            
            <div className='card-container'> 
              {DATA_FOOTER.filter(el => el.tipo === "Ubicacion").map(el =>
              <CardsFooter
              key={el.id}
              icono={el.icono}
              titulo={el.titulo}
              direccion={el.direccion}
              />
              )}
            </div>
            
            <div className='card-container'> 
              {DATA_FOOTER.filter(el => el.tipo === "Dias y Horarios de Atención").map(el =>
              <CardsFooter
              key={el.id}
              icono={el.icono}
              titulo={el.titulo}
              semana={el.semana}
              finde={el.finde}
              />
              )}
            </div>

          </div>
          
          <div className='copyright'>
            <p className='leyenda-2'><span className='leyenda-1'> Buena Vida  </span>Health & Wellness</p>
            <p className='leyenda-3'>Copyright © 2022. Todos los derechos reservados</p>
            <p className='grupo'>Servicio a Distancia<span className='sigla-0'> - </span><span className='sigla-1'>A.</span><span className='sigla-2'>C.</span><span className='sigla-3'>G.</span><span className='sigla-4'>G.</span> <span className='sigla-5'>GROUP</span></p>
          </div>
        </>
  )
}

export default CardsFooterContainer;