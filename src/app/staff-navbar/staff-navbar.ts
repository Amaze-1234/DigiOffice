import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { Router } from '@angular/router';
import { Loader } from '../../Services/loader';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-staff-navbar',
  imports: [CommonModule, SharedModule],
  templateUrl: './staff-navbar.html',
  styleUrl: './staff-navbar.css'
})
export class StaffNavbar {

  constructor(public router: Router, public loaderService: Loader) { }
  employee() {

    this.loaderService.isDetail = "employee"
  }

  position() {
    if (this.loaderService.isEmployee != "Yes") {
      Swal.fire({
        icon: 'error',
        title: "You Not Allowed to Navigate",
        text: 'Please Fill Employee Details Tab'
      });
      return;
    }

    this.loaderService.isDetail = 'position'
  }

}
