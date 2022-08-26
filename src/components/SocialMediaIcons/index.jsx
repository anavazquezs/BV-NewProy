import './SocialMediaIcons.css';

const SocialMediaIcons = (props) => {
  return (
    <li className='iconos-redes' key={props.id}>
        {props.icono}            
    </li>
  )
};

export default SocialMediaIcons;