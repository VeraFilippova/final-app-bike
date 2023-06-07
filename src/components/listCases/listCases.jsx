import axios from "axios"
import { useEffect, useState } from "react";
import CaseItem from "../case/caseItem";
import { apiInstance } from "../axios/instance"

const ListCases = () => {



  const[ article, setArticle] = useState([]);

  useEffect(()=>{
    apiInstance.get('/cases/')
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
              <div key ={item._id}>
                
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