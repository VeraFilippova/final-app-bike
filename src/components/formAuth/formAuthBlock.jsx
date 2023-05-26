import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import formauthblock from './formauthblock.css'
import { AuthContext } from '../context/context';
import { apiInstance } from "../axios/instance"

import axios from 'axios';

const FormAuthBlock = () => {

  const { isAuth, setIsAuth } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const dataLogin = {
    "email": email,
    "password": password
  }


  const onSignIn = (e) => {
    e.preventDefault();
    apiInstance.post('/auth/sign_in', dataLogin)
      .then((data) => {
        localStorage.setItem('token', data.data.data.token);
        localStorage.setItem('auth', 'true')
        setIsAuth(true);
        navigate("/case")
      })
      .catch((error) => {
        console.error(error)
      })
    }





    return (
      <div>
        <form className="form-auth" action="">
          <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className="btn-login">
            <button onClick={onSignIn}>Войти</button>
            <button>Регистрация</button>
          </div>

        </form>
      </div>
    )
  }

  export default FormAuthBlock;