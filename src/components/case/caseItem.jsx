import caseitem from './caseitem.css';
// import axios from "axios";
import { Link} from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { apiInstance } from "../axios/instance"


const Case = ({ keyItem, index, ownerFullName, typeBike, pageId, dataAdd }) => {
  // const url = "https://sf-final-project-be.herokuapp.com/api/cases/"
  const idCase = pageId;






  const onDeleteCase = (e) => {
    e.preventDefault();
    apiInstance.delete(`/cases/${idCase}`)
      .then((data) => {
        console.log(data.data)
          ;
      })
      .catch((error) => {
        console.error(error)
      })
  }



  return (


    <div key={Number(keyItem)} className="case-wrapper">
      <div key={Number(keyItem)} className="case-information">

        ID: {pageId}
        <div>Создатель заявки: {ownerFullName}</div>
        <div>Тип велосипеда:{typeBike}</div>
        <div>Дата создания заявки: {dataAdd.slice(0, 10)}</div>
      </div>

      <button onClick={onDeleteCase}>Удалить</button>
      <button> <Link to={`${pageId}`}>Редактировать</Link>   </button>
    </div>

  )
}


export default Case;