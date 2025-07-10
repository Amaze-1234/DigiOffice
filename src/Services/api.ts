import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class Api {

  constructor() { }

  async postMethod(endpoint: any, data: any) {
    const response = await axios.post(`http://localhost:4199/${endpoint}`, data);
    return response
  }
  async getMethod(endpoint: any) {
    try{
       const response = await axios.get(`http://localhost:4199/${endpoint}`);
    return response
    }
    catch(error){
      throw error
    }
   
  }

 
  
}
