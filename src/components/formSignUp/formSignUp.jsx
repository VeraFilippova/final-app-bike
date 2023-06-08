import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import formauthblock from '../formAuth/formauthblock.css'

import { apiInstance } from "../axios/instance"



const FormSignUp = () => {

  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clientId, setClientId] = useState('')

  const navigate = useNavigate();

  const dataSignUp = {
    "email": email,
    "password": password,
    "clientId": clientId
  }


  const onSignUp = (e) => {
    e.preventDefault();
    apiInstance.post('/auth/sign_up', dataSignUp)
      .then((data) => {
        navigate("/formauth")
      })
      .catch((data) => {
        alert(data.response.data.message)
      })
    }

    return (
      <div>
        <form className="form-auth" action="">
          <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="password" autoComplete="on" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="text" placeholder="clientId" value={clientId} onChange={(e) => setClientId(e.target.value)} />
          <div className="btn-login">
            <button onClick={onSignUp}>Зарегистрироваться</button>
            
          </div>

        </form>
      </div>
    )
  }

  export default FormSignUp;