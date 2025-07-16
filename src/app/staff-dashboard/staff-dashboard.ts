import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../Shared/shared.module';

@Component({
  selector: 'app-staff-dashboard',
  imports: [CommonModule,SharedModule],
  templateUrl: './staff-dashboard.html',
  styleUrl: './staff-dashboard.css'
})
export class StaffDashboard {
constructor(public router: Router){

}
navigateToEmployeeDetails(){
  this.router.navigate(['/staff-details']);
  console.log(1);
  
}
}
