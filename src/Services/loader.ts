import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Loader {

  constructor() { }

  isLogin:any=sessionStorage.getItem("isLogin")||'no';

  isTitle:any=sessionStorage.getItem("Department Master")||'';

  isDetail:any=sessionStorage.getItem("position")||'';

  isEmployee:any=sessionStorage.getItem("isEmployee")||'';

  isEmployeeDetails: any = sessionStorage.getItem("isEmployeeDetails") || 'no';

  loginType: any = sessionStorage.getItem("loginType") || '';

  staffID:any=sessionStorage.getItem('staffID')||'';
}
