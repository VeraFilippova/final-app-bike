import { Link, Route, useNavigate } from 'react-router-dom';
import header from './header.css';
import { useContext } from 'react';

import { AuthContext } from '../context/context';

const Header = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const auth = isAuth;


  const navigate = useNavigate;

  const LogOut = (e) => {
    e.preventDefault();
    setIsAuth(false)
  }




  return (
    <header>
      <div className="header-logo">
        <Link to="posts"><img src="https://logopond.com/logos/8870475b1e21c9b8d01bd68b3d96d9e5.png" alt="logo" /></Link>
      </div>

      <nav>

        <Link to="posts">Сообщить о краже</Link>
        <Link to="case">Для сотрудников</Link>


      </nav>
      {/* <div>
        {auth ? <button onClick={setIsAuth(false)}> Выйти</button> : <button> <Link to="formauth">Войти</Link></button> }
      </div> */}
      <div>
        <button className='bt-padding'> <Link to="formauth">Войти</Link></button>
        <button onClick={LogOut} > Выйти</button>

      </div>




    </header>
  )
}

export default Header;