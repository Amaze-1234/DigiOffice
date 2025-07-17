import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../Shared/shared.module';
import { Loader } from '../../Services/loader';
import { Api } from '../../Services/api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-staff-dashboard',
  imports: [CommonModule,SharedModule],
  templateUrl: './staff-dashboard.html',
  styleUrl: './staff-dashboard.css'
})

export class StaffDashboard {
  designationData:any
  staffData:any;
 searchText:any='';
constructor(public router: Router,public loaderService:Loader, public apiservice:Api,public modalService: NgbModal){

}
ngOnInit()
{
  this.getData();
  this.getDesignationData();
}
navigateToEmployeeDetails(){
  this.router.navigate(['/staff-details']);
  sessionStorage.setItem('isDetail','employee');
  this.loaderService.isDetail='employee';
  console.log(1);
  
}

 async getData() {
    const result = await this.apiservice.getMethod("Master/GetStaffDashboard");
    this.staffData = result.data;
    


  }
 async getDesignationData()
{
  const result = await this.apiservice.getMethod('DigiOffice/GetDesignation');
    this.designationData = result.data;

}


}
