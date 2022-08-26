import Banner from '../components/Banner/index';
import CardsContainer from '../components/CardsContainer/index';
import CardsFooterContainer from '../components/CardsFooterContainer';
import InstaCarousel from '../components/Insta-carousel';
import SocialMedia from '../components/SocialMedia';
import UsCardsContainer from '../components/UsCardsContainer';
import { HashRouter } from "react-router-dom";

const Inicio = () => {
  return (
    <>
        <Banner />
          <CardsContainer name='Productos' />
          <CardsContainer name='Cursos' />
          <CardsContainer name='Libros' />
          <UsCardsContainer />
          <InstaCarousel />
          <SocialMedia />
          <CardsFooterContainer />
    </>
  )
}

export default Inicio