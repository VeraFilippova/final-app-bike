import axios from "axios";
import { useState } from 'react';
import form from './form.css'

const Form =()=>{

const[value, setValue]= useState('');
const[licenz, setLicenz]= useState('');
const[typeBike, setType]= useState('');
const[clientId, setclientId]= useState('');


const onCreateNewCase = (e) => {
  e.preventDefault();
  axios.post('https://sf-final-project-be.herokuapp.com/api/public/report', {
    
    ownerFullName: value,
    licenseNumber: licenz,
    type: typeBike,
    clientId: '7f32cc44-9107-4e3f-9611-d3f6001ce4c6'
   })
    .then((data) => {
      console.log(data)
        ;
    })
    .catch((error) => {
      console.error(error)
    })
  }


  
  return(
  
    
 <div >
  <h3> Сообщить о краже</h3>
  
  <form className="main-form" >
    <input type="text" placeholder="Имя" value={value} onChange={(e)=>setValue(e.target.value)}/>
    <input type="text" placeholder="Номер лицензии" value={licenz} onChange={(e)=>setLicenz(e.target.value)} />
    <select name="" id="" placeholder='Выберете модель' value={typeBike}  onChange={(e)=>setType(e.target.value)} >
      <option >general</option>
      <option >sport</option>
    </select>

    <input type="text" placeholder="clientId" value={clientId} onChange={(e)=>setclientId(e.target.value)}   />
    {/* <input type="date" name="Date" id="davaToday"></input> */}
    <button onClick={onCreateNewCase} >Отправить</button>
  </form>

 
 </div>

      
      

  )
}

export default Form;