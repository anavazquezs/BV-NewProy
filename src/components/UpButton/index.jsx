import { FiChevronsUp } from 'react-icons/fi';
import './UpButton.css';

const UpButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

  return (
    <div className="subir"  onClick={ scrollToTop }><FiChevronsUp/></div>
  )
}

export default UpButton;