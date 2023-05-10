import caseitem from './caseitem.css';
import axios from "axios";
import { Link, Route } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


const Case =({keyItem, index, ownerFullName, typeBike, pageId})=>{
  const url = "https://sf-final-project-be.herokuapp.com/api/cases/"
  const idCase = keyItem;


const navigate = useNavigate();

  

  const onDeleteCase =(e)=>{
    e.preventDefault();
    axios.delete(url+idCase, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2ZkNjBhM2E2YzZkNGQ4NDgzMmExYiIsImlhdCI6MTY4MzcxMjQ3MSwiZXhwIjoxNjg0MzE3MjcxfQ.j5ogbXJWkE2mcFlbvK-N_hP8vMj7MjbtfDN3N3XTSVE',
      },
    })
    .then((data) => {
      console.log(data.data)
        ;
    })
    .catch((error) => {
      console.error(error)
    })
  }

  

  return(

    
    <div key={Number(keyItem)} className="case-wrapper">
      <div key={Number(keyItem)} className="case-information">
        
        {pageId}
        <div>{ownerFullName}</div>
        <div>{typeBike}</div>
        <div>{keyItem}</div>
        <div>{index}</div>
      </div>
      <button onClick={onDeleteCase}>Удалить</button>
      <button> <Link to={`${pageId}`}>Редактировать</Link>   </button>
    </div>

  )
}
  

export default Case;