import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Loader } from '../../Services/loader';
import { SharedModule } from '../../Shared/shared.module';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-bar',
  imports: [SharedModule,NgbPopoverModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {

   constructor(public router:Router,public loderService:Loader){}



  logout() {
  Swal.fire({
    title: "Are you sure?",
    text: "You want to be logout!",
    icon: "warning",
    showCancelButton: true,
    
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, logout!"
  }).then((result) => {
    if (result.isConfirmed) {
      sessionStorage.clear();
      this.loderService.isLogin = 'No';
      this.router.navigate(['/login']);
      Swal.fire("Logout!", "You have been successfully logged out", "success");
    }
  });
}


 
}
