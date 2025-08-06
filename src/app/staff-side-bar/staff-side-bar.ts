import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Loader } from '../../Services/loader';
import { SharedModule } from '../../Shared/shared.module';

@Component({
  selector: 'app-staff-side-bar',
  imports: [SharedModule],
  templateUrl: './staff-side-bar.html',
  styleUrl: './staff-side-bar.css'
})
export class StaffSideBar {

  
  
  hide2 = true;
  hide3 = true;
  hide4 = true;

  downArrow = '\u2304';
  constructor(public router: Router, public loaderService: Loader) {

  }
  ngOnInit() {


  }
  navigateDashboard() {
    sessionStorage.setItem("isTitle", "Dashboard")
    this.loaderService.isTitle = 'Dashboard';
    this.router.navigate(['/dashboard']);
  }
 
  navigateAttendence() {
    sessionStorage.setItem("isTitle", "Attendence")
    this.loaderService.isTitle = 'Attendence';
    this.hide2 = !this.hide2;
  }
  navigateAttendenceDetails() {
    sessionStorage.setItem("isTitle", "AttendenceDetails")
    this.loaderService.isTitle = 'AttendenceDetails';
    this.router.navigate(['/AttendanceDetails']);
  }
  navigateShiftDetails() {
    sessionStorage.setItem("isTitle", "ShiftDetails")
    this.loaderService.isTitle = 'ShiftDetails';
    this.router.navigate(['/ShiftDetails']);

  }
  navigateAttendenceCorrection() {
    sessionStorage.setItem("isTitle", "AttendenceCorrection")
    this.loaderService.isTitle = 'AttendenceCorrection';
    this.router.navigate(['/Attendence-Correction']);
  }

  navigateRequest() {

    sessionStorage.setItem("isTitle", "Request");
    this.loaderService.isTitle = 'Request';
    this.hide3 = !this.hide3;
  }
  navigateLoanRequest() {
    sessionStorage.setItem("isTitle", "LoanRequest")
    this.loaderService.isTitle = 'LoanRequest';
    this.router.navigate(['/loan-request']);
  }
  navigateOvertimeDetails() {
    sessionStorage.setItem("isTitle", "OvertimeDetails")
    this.loaderService.isTitle = 'OvertimeDetails';
    this.router.navigate(['/overtime-details']);

  }
  navigateLeaveRequest() {
    sessionStorage.setItem("isTitle", "LeaveRequest")
    this.loaderService.isTitle = 'LeaveRequest';
    this.router.navigate(['/leave-request']);

  }
  navigateResignation() {
    sessionStorage.setItem("isTitle", "Resignation")
    this.loaderService.isTitle = 'Resignation';
    this.router.navigate(['/resignation']);
  }

  navigateSurvey() {

    sessionStorage.setItem("isTitle", "Survey");
    this.loaderService.isTitle = 'Survey';
    this.hide4 = !this.hide4;
  }
  navigateTakeSurvey() {

    sessionStorage.setItem("isTitle", "TakeSurvey");
    this.loaderService.isTitle = 'TakeSurvey';
    this.router.navigate(['/survey']);
  }



}
