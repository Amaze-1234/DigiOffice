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

  
  
  // hide2 = true;
  // hide3 = true;
  // hide4 = true;

  activeSection: string = ''; 

//   toggleSection(section: string) {
//   this.activeSection = this.activeSection === section ? '' : section;
// }


  downArrow = '\u2304';
  constructor(public router: Router, public loaderService: Loader) {

  }
  ngOnInit() {


  }
  navigateDashboard() {
    sessionStorage.setItem("isTitle", "Dashboard")
    this.loaderService.isTitle = 'Dashboard';
    this.router.navigate(['/Staffdashboard-details']);
    this.activeSection='';
  }
 
  navigateAttendence() {
    sessionStorage.setItem("isTitle", "Attendence")
    this.loaderService.isTitle = 'Attendence';
    // this.toggleSection('attendence');
    this.activeSection = this.activeSection === 'attendence' ? '' : 'attendence';

  }
  navigateAttendenceDetails() {
    sessionStorage.setItem("isTitle", "AttendenceDetails")
    this.loaderService.isTitle = 'AttendenceDetails';
    this.router.navigate(['/AttendanceDetails']);
  }
  navigateShiftDetails() {
    sessionStorage.setItem("isTitle", "ShiftDetails")
    this.loaderService.isTitle = 'ShiftDetails';
    this.router.navigate(['/Staff-shift-details']);

  }
  navigateAttendenceCorrection() {
    sessionStorage.setItem("isTitle", "AttendenceCorrection")
    this.loaderService.isTitle = 'AttendenceCorrection';
    this.router.navigate(['/Staff-attendence-correction']);
  }

  navigateRequest() {

    sessionStorage.setItem("isTitle", "Request");
    this.loaderService.isTitle = 'Request';
  //  this.toggleSection('request');
   this.activeSection = this.activeSection === 'request' ? '' : 'request';

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
    // this.toggleSection('survey');
    this.activeSection = this.activeSection === 'survey' ? '' : 'survey';
  }
  navigateTakeSurvey() {

    sessionStorage.setItem("isTitle", "TakeSurvey");
    this.loaderService.isTitle = 'TakeSurvey';
    this.router.navigate(['/survey']);
  }



}
