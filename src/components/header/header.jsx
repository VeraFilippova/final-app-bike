import { Link, Route } from 'react-router-dom';
import header from './header.css'

const Header = () =>{
  return(
    <header>
      <div className="header-logo">
        <Link to="posts"><img src="https://logopond.com/logos/8870475b1e21c9b8d01bd68b3d96d9e5.png" alt="logo" /></Link> 
      </div>

      <nav>
        
        <Link to="posts">Сообщить о краже</Link>
        <Link to="case">Для сотрудников</Link>

        
      </nav>
      <button>
      <Link to="formauth">Войти</Link>
        </button>
    </header>
  )
}

export default Header;