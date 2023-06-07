import axios from "axios";
import editForm from './editForm.css'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useParams } from "react-router-dom";
import { apiInstance } from "../axios/instance";

const CaseIdPage = () => {
  const navigate = useNavigate();
  

  const { id } = useParams();

  const [ownerFullName, setOwnerFullName] = useState();
  const [timeAdd, setTimeAdd] = useState();
  const [descr, setDescr] = useState();
  const [typeBike, setTypeBike] = useState();
  const [colorBike, setColorBike] = useState();



  const [editownerFullName, seteditOwnerFullName] = useState();
  const [edittypeBike, setedittypeBike] = useState();
  const [editcolorBike, seteditColorBike] = useState();
  const [editdescr, seteditDescr] = useState();
  




  apiInstance.get(`/cases/${id}`)
  .then(data => {
    // console.log(data.data.data);
    setOwnerFullName(data.data.data.ownerFullName);
    setTimeAdd(data.data.data.createdAt);
    setColorBike(data.data.data.color);
    setDescr(data.data.data.description)
  })
    .catch((error) => {
      console.error(error)
    })


    const editInfo = {
      color: editcolorBike,
      description: editdescr,
      type: edittypeBike,
      ownerFullName: editownerFullName
    }


  const editCase = (e) =>{
    e.preventDefault();
    apiInstance.put(`/cases/${id}`, editInfo)
      .then((data) => {
        
        navigate("/case")
      })
      .catch((error) => {
        console.error(error)
      })
  }  

  return (
    <div>
      <h3>Информация о краже</h3>

      <div>Id: {id}</div>
      <div>Дата создания: {timeAdd}</div>
      <div>Создатель: {ownerFullName}</div>
      <div>Тип велосипеда: {typeBike}</div>
      <div>Цвет: {colorBike}</div>
      <div>Описание: {descr}</div>

      <h3>Редактировать информацию:</h3>

      <form className="editForm" onSubmit={editCase}>
        <input type="text" placeholder="Создатель"  onChange={(e) => seteditOwnerFullName(e.target.value)} />
        <select name="" id="" placeholder='Выберете модель'  onChange={(e) => setedittypeBike(e.target.value)} >
          <option >general</option>
          <option >sport</option>
        </select>
        <input type="text" placeholder="Цвет"  onChange={(e) => seteditColorBike(e.target.value)} />
        <input type="text" placeholder="Описание"  onChange={(e) => seteditDescr(e.target.value)} />

        <button >Отправить</button>
      </form>
    </div>
  )
}

export default CaseIdPage;