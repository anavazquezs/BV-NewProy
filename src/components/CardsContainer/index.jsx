import Cards from "../Cards/index";
import '../Cards/Cards.css';
import useAxios from "../../hooks/useAxios";

const CardsContainer = ({name}) => {
  //Llamada a la API falsa de productos con hook cusmotizado useAxios():
    const {data: productsCards, isLoading: isLoadingCards, error: errorCards } = useAxios('https://run.mocky.io/v3/f4661f67-02fb-4aaf-bff2-26df9a77c4fd');

  return (
    <div>
            <h3 className='titulos-cards'> {name} </h3>
            <div className='flex'>
                    {errorCards.isError ? <h4>Error: {errorCards.message}</h4> :
                        isLoadingCards ? <h4>Cargando...</h4> :
                        productsCards.length !== 0 &&
                        productsCards.items.filter(pr => pr.tipo === name).map(product => 
                            <Cards key={product.id}
                                mykey={product.id}
                                img={product.img}
                                product={product.producto}
                                price={product.precio}
                                offer={product.antes}
                            /> 
                        )
                    }
            </div> 
    </div>
  )
}

export default CardsContainer;