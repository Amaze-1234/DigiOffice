import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { Loader } from '../../Services/loader';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Api } from '../../Services/api';


@Component({
  selector: 'app-login',
  imports: [SharedModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  userName: any;
  passWord: any;
  loginValue:any;
  staffLogin: any;
  loginType: any;
  Logintype: any;

  constructor(public loaderService: Loader, public router: Router, public apiService: Api) { }
  ngOnInit() {
    this.getStaffLoginDetails();
    this.getLoginType();
  }
  async getStaffLoginDetails() {
    
    let result = await this.apiService.getMethod('Master/GetStaffLoginByLoginType');
    this.staffLogin = result.data;

  }
  async getLoginType() {
    let result = await this.apiService.getMethod('Master/GetLoginType');
    this.Logintype = result.data;
  }
   async onChange(even: any) {
    debugger;
    this.loginValue=even.target.value;
    console.log(this.loginValue)
    
  }
  // getLoginType(){
  //   for(let data of this.staffLogin){
  //     var login = data.loginType;
  //     if(login!=3){
  //       sessionStorage.setItem("loginType",'HR');
  //     }
  //   }
  // }
  login() {
    for (let data of this.staffLogin) {
      var name = data.username;
      var pass = data.password;
      var login = data.loginType;
      console.log(name);
      console.log(pass);
      console.log(login, typeof login);


     
      if (this.userName == name && this.passWord == pass && this.loginValue == login) {
        sessionStorage.setItem("isLogin", 'Yes');
        this.loaderService.isLogin = 'Yes';

        // if (login == 3 ) {
        //   sessionStorage.setItem("loginType", 'HR');
        //   this.loaderService.loginType = 'HR';
        // }
        
        if (login == 2 ) {
          
          sessionStorage.setItem("isLogin", 'Manager');
          this.loaderService.isLogin = 'Manager';
          sessionStorage.setItem('staffID',String(data.staffID))
          this.loaderService.staffID=String(data.staffID)
          this.router.navigate(['/AttendanceDetails']);

          return;
        }

        //  if (this.loaderService.loginType == 'HR') {
        //     this.router.navigate(['/staff-details']);
        //     console.log("staff");
        //   }
         else {
          this.router.navigate(['/department-table']);
          console.log("department");

        }
        return;
      }
    }
    Swal.fire("Please enter valid data");
  }
}
