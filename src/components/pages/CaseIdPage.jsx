import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CaseIdPage = () =>{
  const url= 'https://sf-final-project-be.herokuapp.com/api/cases/';

  const {id} = useParams();

  const [ownerFullName, setOwnerFullName] = useState()



   axios.get(url+id, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2ZkNjBhM2E2YzZkNGQ4NDgzMmExYiIsImlhdCI6MTY4MzcxMjQ3MSwiZXhwIjoxNjg0MzE3MjcxfQ.j5ogbXJWkE2mcFlbvK-N_hP8vMj7MjbtfDN3N3XTSVE',
      },
    }).then(data => {
      console.log(data.data.data);
      setOwnerFullName(data.data.data.ownerFullName)
      
     
    })
    .catch((error) => {
      console.error(error)
    })

  return(
    <div>
      {id}
      Эта страница 
      {ownerFullName}
      <input type="text" defaultValue={ownerFullName} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatibus debitis earum consectetur non omnis pariatur eveniet neque accusamus, asperiores officiis itaque unde. Molestiae autem commodi asperiores tempora aut eum?</p>
    </div>
  )
}

export default CaseIdPage;