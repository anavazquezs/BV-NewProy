import { NavLink } from 'react-router-dom';
import { HiOutlineUser, HiOutlineShoppingCart, HiOutlineSearch } from 'react-icons/hi';
import { FiMenu } from 'react-icons/fi';
import './NavBar.css';
import { useNavbar } from '../../hooks/useNavbar';
import useCartContext from '../../hooks/useCartContext';

const NavBar = () => {
    const [ showList, changeShowList ] = useNavbar(false);
    //Llamada al contador del contexto para mostrar el total de elementos en el carrito del navbar
    const { counter } = useCartContext();

  return (
    <div className='navbar' id='navbar'>
            <div className='lado-izquierdo'>
                <img className='logo' src='https://i.ibb.co/CmcwLYT/BV-logo-ult.png' alt='logo Buena Vida Health and Wellness' />
            </div>
            <div className='centro'>
                {/* El div se esconde o se muestra cambiando clases de css*/}
                <div id={ showList ? 'vista' : 'escondida' }>
                    <ul>
                        <li className='lista-navbar' onClick={ changeShowList }>
                            <button className='boton-lista'>
                                <NavLink className='navLink' to='/'>Inicio</NavLink>
                            </button>
                        </li>
                        <li className='lista-navbar' onClick={ changeShowList }>
                            <button className='boton-lista'>
                                <NavLink className='navLink' to='/products'>Productos</NavLink>
                            </button>
                        </li>
                        <li className='lista-navbar' onClick={ changeShowList }>
                            <button className='boton-lista'>
                                <NavLink className='navLink' to='/courses'>Cursos</NavLink>
                            </button>
                        </li>
                        <li className='lista-navbar' onClick={ changeShowList }>
                            <button className='boton-lista'>
                                <NavLink className='navLink' to='/books'>Libros</NavLink>
                            </button>
                        </li>
                        <li className='lista-navbar' onClick={ changeShowList }>
                            <button className='boton-lista'>
                                <NavLink className='navLink' to='/us'>Nosotros</NavLink>
                            </button>
                        </li>
                        <li className='lista-navbar ultimo' onClick={ changeShowList }>
                            <button className='boton-lista'>
                                <NavLink className='navLink' to='/contact'>Contacto</NavLink>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='lado-derecho'>
                {/* Al clickear el botón se cambia de estado mostrarLista (false a true o viceversa) y se despliega o no el menú*/}
                <div className='boton-navbar'>
                    <button className='dropdown'
                    onClick={ changeShowList } ><FiMenu /></button>
                </div>
                <div className='circulos'>
                    <div className='circulo circulo-buscar'>
                        <HiOutlineSearch 
                        className='search'/>
                    </div>
                    <div className='circulo circulo-login'>
                        <HiOutlineUser 
                        className='login'/>
                    </div>
                    <div className='circulo circulo-carrito'>
                        <button className='carrito-boton'>
                            <NavLink className='navLink' to='/cart'>
                                <HiOutlineShoppingCart className='carrito-icono'/>
                            </NavLink>
                        </button>
                        <div className={counter === 0 ? 'oculto' : 'contador'}>{ counter }</div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default NavBar;

