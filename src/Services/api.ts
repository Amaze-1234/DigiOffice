import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class Api {

  //hosturl:any="https://103.12.1.103/digiOfficeAPI/"

 
  constructor() { }

  async postMethod(endpoint: any, data: any) {
    const response = await axios.post(`http://localhost:4199/${endpoint}`, data);
    // const response = await axios.post(this.hosturl +  endpoint, data);
    return response
  }
  
  async getMethod(endpoint: any) {
    try{
       const response = await axios.get(`https://103.12.1.103/DigiOfficeAPI/${endpoint}`);
    return response
    }
    catch(error){
      throw error
    }
   
    
  }

 
  
}
