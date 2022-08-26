import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Slide, TextoSlide } from './Banner.styled'
import useAxios from '../../hooks/useAxios';

const Banner = () => {
    const { data: dataBanner, isLoading: isLoadingBanner, error: errorBanner } = useAxios('https://run.mocky.io/v3/e8c67503-14ac-4676-b566-92ca4b826748');

    const sliderSettings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        infinite: true,
    }

  return (
            <Slider {...sliderSettings}>
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


