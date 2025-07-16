import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../Shared/shared.module';
import { Loader } from '../../Services/loader';

@Component({
  selector: 'app-side-bar',
  imports: [SharedModule],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css'
})
export class SideBar {

      hide = true;
      staff=true;
     downArrow = '\u2304';
  constructor(public router:Router,public loaderService:Loader){

  }
  ngOnInit(){
    
   
  }
  navigateDashboard(){
    sessionStorage.setItem("isTitle","Dashboard Master")
    this.loaderService.isTitle = 'Dashboard Master';
  }
  navigateEmployeeManager(){
    sessionStorage.setItem("isTitle","EmployeeManager Master")
    this.loaderService.isTitle = 'EmployeeManager Master';
    this.staff = !this.staff;
  }
    navigateStaffDashboard(){
    this.router.navigate(['/staffdashboard']);
    sessionStorage.setItem("isTitle","StaffDashboard Master");
    this.loaderService.isTitle = 'StaffDashboard Master';
  }
  navigateConfiguration(){
    sessionStorage.setItem("isTitle","Configuration Master")
    this.loaderService.isTitle = 'Configuration Master';
  }
  navigateEmoloyeeMaster(){
    sessionStorage.setItem("isTitle","EmployeeField Master")
    this.loaderService.isTitle = 'EmployeeField Master';
    this.hide = !this.hide;
  }
    navigateDepartment(){
    this.router.navigate(['/department-table']);
    sessionStorage.setItem("isTitle","Department Master");
    this.loaderService.isTitle = 'Department Master';
  }

  navigateUnit(){
     this.router.navigate(['/unit-table']);
     sessionStorage.setItem("isTitle","Unit Master")
     this.loaderService.isTitle = 'Unit Master';
  }
  navigateJobLevelType(){
    this.router.navigate(['/jobleveltypetable']);
    sessionStorage.setItem("isTitle","JobLevelType Master")
    this.loaderService.isTitle = 'JobLevelType Master';
  }
  navigateShift(){
    this.router.navigate(['/shift-table']);
    sessionStorage.setItem("isTitle","Shift Master")
    this.loaderService.isTitle = 'Shift Master';
  }
  navigateOvertime(){
    sessionStorage.setItem("isTitle","Overtime Master")
    this.loaderService.isTitle = 'Overtime Master';
  }
  navigateLoanType(){
    this.router.navigate(['/loantypetable']);
    sessionStorage.setItem("isTitle","Loantype Master")
    this.loaderService.isTitle = 'Loantype Master';
  }
  navigateCountry(){
    this.router.navigate(['/countrytable']);
    sessionStorage.setItem("isTitle","Country Master")
    this.loaderService.isTitle = 'Country Master';
  }
  navigateProvince(){
    this.router.navigate(['/provincetable']);
    sessionStorage.setItem("isTitle","Province Master")
    this.loaderService.isTitle = 'Province Master';
  }
  navigateCity(){
    this.router.navigate(['/citytable']);
    sessionStorage.setItem("isTitle","City Master")
    this.loaderService.isTitle = 'City Master';
  }
  navigateAuditTrail(){
    sessionStorage.setItem("isTitle","AuditTrail Master")
    this.loaderService.isTitle = 'AuditTrail Master';
  }
}
