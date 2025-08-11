import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../Shared/shared.module';
import { Loader } from '../../Services/loader';
import { Api } from '../../Services/api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-staff-dashboard',
  imports: [CommonModule, SharedModule],
  templateUrl: './staff-dashboard.html',
  styleUrl: './staff-dashboard.css'
})

export class StaffDashboard {

  designationData: any
  staffData: any;
  searchText: any = '';
// selectedDesignationId: any = '';
  jobLevelData: any;
  title:any;
  constructor(public router: Router, public loaderService: Loader, public apiservice: Api, public modalService: NgbModal) {

  }
  ngOnInit() {
    this.getData();
    this.getDesignationData();
  }
  navigateToEmployeeDetails(id: any = null) {
  
    if (id) {
      this.router.navigate(['/staff-details',id]);
      sessionStorage.setItem('isDetail', 'employee');
      this.loaderService.isDetail = 'employee';
      this.loaderService.isEmployee = "Yes"
       return;
    }
   
    this.router.navigate(['/staff-details']);
    sessionStorage.setItem('isDetail', 'employee');
    this.loaderService.isDetail = 'employee';
    console.log(1);

  }

  async getData() {
    const result = await this.apiservice.getMethod("Master/GetStaffDashboard");
    console.log(result.data);
    
    this.staffData = result.data;
    


  }
  async getDesignationData() {
    const result = await this.apiservice.getMethod('DigiOffice/GetDesignation');
    this.designationData = result.data;

  }

  async onChange(even: any) {
    debugger;
    let result = await this.apiservice.getMethod(`Master/GetLevelByDesignation?ID=${even.target.value}`);
    this.jobLevelData = result.data;
  }


  async deleted(employeeID: any) {
    debugger
    const confirmation = await Swal.fire({
      title: "Are you sure you want to delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    });
    if (confirmation.isConfirmed) {
      const result = await this.apiservice.getMethod(`Master/DeleteStaffDashboard?ID=${employeeID}`);


      if (result.data > 0) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        this.getData();
      }
    }
  }




}
