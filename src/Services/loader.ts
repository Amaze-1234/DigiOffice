import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Loader {

  constructor() { }

  isLogin:any=sessionStorage.getItem("isLogin")||'no';
}
