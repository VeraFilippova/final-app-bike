import {Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import { AuthContext } from '../context/context';
import { apiInstance } from "../axios/instance"



const FormAuthBlock = () => {

  const {  setIsAuth } = useContext(AuthContext);

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
        setIsAuth(true);
        
        navigate("/case")
      })
      .catch((data) => {
       alert(data.response.data.message);
      })
    }

    return (
      <div>
        <form className="form-auth" action="">
          <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="password" autoComplete="on" value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className="btn-login">
            <button onClick={onSignIn}>Войти</button>
            
            <button><Link to="/formsignup">Регистрация</Link></button>
          </div>

        </form>
      </div>
    )
  }

  export default FormAuthBlock;