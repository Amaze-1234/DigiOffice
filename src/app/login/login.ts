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
  staffLogin: any;
  Logintype: any;

  constructor(public loaderService: Loader, public router: Router, public apiService: Api) {}
  ngOnInit() {
    this.getStaffDetails();
    this.getLoginType();
  }
  async getStaffDetails() {
    let result = await this.apiService.getMethod('Master/GetStaffLogin');
    this.staffLogin = result.data;
    console.log(this.staffLogin.value.username);
    console.log(this.staffLogin.value.password);
  }
  async getLoginType() {
    let result = await this.apiService.getMethod('Master/GetLoginType');
    this.Logintype = result.data;
  }
  login() {
    for (let data of this.staffLogin) {
      var name = data.username;
      var pass = data.password;
      console.log(name);
      console.log(pass);
      if (this.userName == name && this.passWord == pass) {
        sessionStorage.setItem("isLogin", 'Yes');
        this.loaderService.isLogin = 'Yes';
        this.router.navigate(['/department-table']);
        return;
      }
    }
    Swal.fire("Enter valid data");
  }
}
