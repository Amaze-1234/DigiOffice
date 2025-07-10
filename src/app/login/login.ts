import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { Loader } from '../../Services/loader';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  imports: [ SharedModule ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  userName:any;
  password:any;


  constructor(public loaderService:Loader){

  }

    Login(){
      if(this.userName == "Amaze-1234" && this.password == "Amaze-1234"){
         sessionStorage.setItem("isLogin",'Yes');
      this.loaderService.isLogin='Yes';
         }
       else{
      Swal.fire("Enter Valid data");
    }
   
}

}
