import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Offers from './components/Offers';
import NavBar from './components/NavBar';
import Inicio from './screens/Inicio';
import CartContextProvider from './contexts/CartContext';
import CardsContainer from './components/CardsContainer/index';
import UsCardsContainer from './components/UsCardsContainer';
import UpButton from './components/UpButton';
import Formulario from './screens/Form';
import Cart from './screens/Cart/index';

function App() {

  return (
      <CartContextProvider>
        <Router>
          <div className='App'>
            <Offers />
            <NavBar />
            <Routes>
              <Route exact path='/' element={<Inicio />}></Route>
              <Route exact path='/products' element={<CardsContainer name='Productos' />}></Route>
              <Route exact path='/courses' element={<CardsContainer name='Cursos' />}></Route>
              <Route exact path='/books' element={<CardsContainer name='Libros' />}></Route>
              <Route exact path='/us' element={<UsCardsContainer />}></Route>
              <Route exact path='/contact' element={<Formulario />}></Route>
              <Route exact path='/cart' element={<Cart />}></Route>
            </Routes>
            <UpButton />
          </div>
        </Router>
      </CartContextProvider>
  )
}

export default App;
