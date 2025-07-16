import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-navbar',
  imports: [CommonModule,SharedModule],
  templateUrl: './staff-navbar.html',
  styleUrl: './staff-navbar.css'
})
export class StaffNavbar {

    constructor(public router:Router){}
  employee(){
    this.router.navigate(['/employee-details']);   
  }
    position(){
    this.router.navigate(['/position-details']);   
  }
}
