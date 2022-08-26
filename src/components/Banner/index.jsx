import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Slide, TextoSlide } from './Banner.styled'
import useAxios from '../../hooks/useAxios';

const Banner = () => {
    //Llamada a la API de imágenes con hook cusmotizado useAxios():
    const { data: dataBanner, isLoading: isLoadingBanner, error: errorBanner } = useAxios('https://run.mocky.io/v3/e8c67503-14ac-4676-b566-92ca4b826748'); 

    const sliderSettings = {
        dots: true, //Usa puntitos para moverse en el banner
        slidesToShow: 1, //Muestra 1 imagen por vez
        slidesToScroll: 1, //Scrolea una imagen por vez
        autoplay: true, //Para que las imágenes pasen de manera automática
        autoplaySpeed: 2000,
        pauseOnHover: true, //Para que la velocidad de play pause entre imágenes
        infinite: true, //Para que al finalizar el scroll de idea de continuidad y no vuelva
    }

  return (
            <Slider {...sliderSettings}> {/* Usa librería react-slick */}
                {
                    errorBanner.isError ? <h4>Error: {errorBanner.message}</h4> :
                    isLoadingBanner ? <h4>Cargando... </h4> :
                    dataBanner.length !== 0 && dataBanner.items.map((e) => {
                        return(
                            <Slide key={e.id}>
                                <TextoSlide>
                                    <h1>{e.title}<br />{e.titleBr}</h1>
                                        <button>Conocé mas</button>
                                </TextoSlide>
                                <div>
                                    <img src={e.img} alt="" />
                                </div>
                            </Slide>
                        )
                    })
                }
            </Slider>
  )
}

export default Banner;


