import { SOCIAL_ICONS } from '../../helpers/socialIcons';
import SocialMediaIcons from '../SocialMediaIcons';
import './SocialMedia.css';


const SocialMedia = () => {
  return (
    <div className='contenedor-redes'>
      <h2 className='redes-titulo'>Visitá nuestras redes</h2>
        <ul className='redes'>
          {SOCIAL_ICONS.map((item, index) => (
            <SocialMediaIcons
              key={index}
              icono={item.icon}
              id={item.id} 
            />
          )
          )}
        </ul>
    </div>
  )
}

export default SocialMedia;
