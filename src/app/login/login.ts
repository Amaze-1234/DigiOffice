import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { Loader } from '../../Services/loader';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Api } from '../../Services/api';


@Component({
  selector: 'app-login',
  imports: [ SharedModule ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  userName:any;
  password:any;
  staffLogin: any;
  Logintype :any;

  constructor(public loaderService:Loader,public router:Router, public apiService: Api){
    this.getStaffDetails();
    this.getLoginType();
  }
  async getStaffDetails(){
    let result = await this.apiService.getMethod('Master/GetStaffLogin');
    this.staffLogin = result.data;
    console.log(this.staffLogin);
    
  }

  async getLoginType(){
    let result = await this.apiService.getMethod('Master/GetLoginType');
    this.Logintype = result.data;
  }

    login(){
      if(this.userName == "Amaze-1234" && this.password == "Amaze-1234"){
         sessionStorage.setItem("isLogin",'Yes');
      this.loaderService.isLogin='Yes';
      this.router.navigate(['/department-table']);
         }
       else{
      Swal.fire("Enter Valid data");
    }
   
}
}
