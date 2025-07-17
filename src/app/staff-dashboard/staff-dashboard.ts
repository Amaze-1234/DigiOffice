import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../Shared/shared.module';
import { Loader } from '../../Services/loader';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Api } from '../../Services/api';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-staff-dashboard',
  imports: [CommonModule,SharedModule],
  templateUrl: './staff-dashboard.html',
  styleUrl: './staff-dashboard.css'
})

export class StaffDashboard {

   staffData: any;
  searchText:any='';

constructor(public router: Router,public loaderService:Loader,public apiservice: Api,public modalService: NgbModal){

}



  ngOnInit() {
    this.getData();
  }


  async getData() {
    const result = await this.apiservice.getMethod("Master/GetStaffDashboard");
    this.staffData = result.data;


  }
  navigateToEmployeeDetails(){
  this.router.navigate(['/staff-details']);
  sessionStorage.setItem('isDetail','employee');
  this.loaderService.isDetail='employee';
  console.log(1);
  
}



// deleted(employeeID: number) {

//   this.selectedEmployeeID = null;
// }



}
