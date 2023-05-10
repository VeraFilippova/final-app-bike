import axios from "axios"
import { useEffect, useState } from "react";
import CaseItem from "../case/caseItem";

const ListCases = () => {



  const[ article, setArticle] = useState([]);

  useEffect(()=>{
    axios.get('https://sf-final-project-be.herokuapp.com/api/cases/', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2ZkNjBhM2E2YzZkNGQ4NDgzMmExYiIsImlhdCI6MTY4MzcxMjQ3MSwiZXhwIjoxNjg0MzE3MjcxfQ.j5ogbXJWkE2mcFlbvK-N_hP8vMj7MjbtfDN3N3XTSVE',
      },
    })
      .then(data => {
        setArticle(data.data.data);
        
       
      })
      .catch((error) => {
        console.error(error)
      })
  })





  return (
    <div >
      

      <div>
      {
          article.map(item=>{
            
            return(
              <div>
                
                <CaseItem key={item._id} pageId={item._id}  ownerFullName={item.ownerFullName} typeBike={item.type} dataAdd={item.createdAt
              }></CaseItem>
              </div>
              
              
            )

          })
        }
      </div>
      
    </div>

  )
}

export default ListCases;