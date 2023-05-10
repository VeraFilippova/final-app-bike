import formauthblock from './formauthblock.css'

const FormAuthBlock =()=>{
  return(
<div>
  <form className="form-auth" action="">
    <input type="text" placeholder="email" />
    <input type="password" placeholder="password" />
    <div className="btn-login">
      <button>Войти</button>
    <button>Регистрация</button>
    </div>
    
  </form>
</div>
  )
}

export default FormAuthBlock;