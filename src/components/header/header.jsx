import { Link} from 'react-router-dom';
import header from './header.css';
import { useContext } from 'react';

import { AuthContext } from '../context/context';


const Header = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const LogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    setIsAuth(false);
    

  }
  return (
    <header>
      <div className="header-logo">
        <Link to="/"><img src="https://logopond.com/logos/8870475b1e21c9b8d01bd68b3d96d9e5.png" alt="logo" /></Link>
      </div>
      <nav>
        <Link to="posts">Сообщить о краже</Link>
        <Link to="case">Для сотрудников</Link>
      </nav>
      <div>
        {isAuth ? <button className='bt-padding' onClick={LogOut} > <Link to="posts" >Выйти</Link> </button> : <button className='bt-padding' > <Link to="formauth">Войти</Link></button>}
      </div>
    </header>
  )
}

export default Header;