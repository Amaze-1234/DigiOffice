import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Loader {

  constructor() { }

  isLogin:any=sessionStorage.getItem("isLogin")||'no';

  isTitle:any=sessionStorage.getItem("Department Master")||'';

  check(data:any){
    

  }

}
