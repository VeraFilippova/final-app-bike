import axios from "axios";


export const apiInstance = axios.create({ 
  baseURL: 'https://sf-final-project-be.herokuapp.com/api', 
  headers: { "Content-Type": "application/json", 
            Authorization: `Bearer ${localStorage.getItem('token')} `, 
          }, 
  }); 