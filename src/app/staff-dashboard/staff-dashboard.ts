import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../Shared/shared.module';
import { Loader } from '../../Services/loader';

@Component({
  selector: 'app-staff-dashboard',
  imports: [CommonModule,SharedModule],
  templateUrl: './staff-dashboard.html',
  styleUrl: './staff-dashboard.css'
})
export class StaffDashboard {
constructor(public router: Router,public loaderService:Loader){

}
navigateToEmployeeDetails(){
  this.router.navigate(['/staff-details']);
  sessionStorage.setItem('isDetail','employee');
  this.loaderService.isDetail='employee';
  console.log(1);
  
}
}
