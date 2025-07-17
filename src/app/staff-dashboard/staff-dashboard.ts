import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../Shared/shared.module';
import { Loader } from '../../Services/loader';
import { Api } from '../../Services/api';

@Component({
  selector: 'app-staff-dashboard',
  imports: [CommonModule,SharedModule],
  templateUrl: './staff-dashboard.html',
  styleUrl: './staff-dashboard.css'
})
export class StaffDashboard {
  designationData:any
constructor(public router: Router,public loaderService:Loader, public apiService:Api){

}
ngOnInit()
{
  this.getDesignationData();
}
navigateToEmployeeDetails(){
  this.router.navigate(['/staff-details']);
  sessionStorage.setItem('isDetail','employee');
  this.loaderService.isDetail='employee';
  console.log(1);
  
}
 async getDesignationData()
{
  const result = await this.apiService.getMethod('DigiOffice/GetDesignation');
    this.designationData = result.data;

}


}
