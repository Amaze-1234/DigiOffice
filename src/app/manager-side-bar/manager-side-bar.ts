import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { Router } from '@angular/router';
import { Loader } from '../../Services/loader';

@Component({
  selector: 'app-manager-side-bar',
  imports: [SharedModule],
  templateUrl: './manager-side-bar.html',
  styleUrl: './manager-side-bar.css'
})
export class ManagerSideBar {


  // hide = true;
  // hide2 = true;
  // hide3 = true;
  // hide4 = true;
  activeSection: string = ''; 

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
  navigateEmployeeManager() {
    sessionStorage.setItem("isTitle", "EmployeeManagement")
    this.loaderService.isTitle = 'EmployeeManagement';
    this.activeSection = this.activeSection === 'employeeManagement' ? '' : 'employeeManagement';

  }
  navigateExitChecklist() {

    sessionStorage.setItem("isTitle", "ExitChecklist");
    this.loaderService.isTitle = 'ExitChecklist';
    this.router.navigate(['/exit-chceklist']);

  }
  navigateAttendence() {
    sessionStorage.setItem("isTitle", "Attendence")
    this.loaderService.isTitle = 'Attendence';
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
     this.activeSection = this.activeSection === 'survey' ? '' : 'survey';
  }
  navigateTakeSurvey() {

    sessionStorage.setItem("isTitle", "TakeSurvey");
    this.loaderService.isTitle = 'TakeSurvey';
    this.router.navigate(['/survey']);
  }
  navigateHoliday() {

    sessionStorage.setItem("isTitle", "Holiday");
    this.loaderService.isTitle = 'Holiday';
    this.router.navigate(['/Holiday']);

  }
  navigateAnnouncement() {
    sessionStorage.setItem("isTitle", "Announcement");
    this.loaderService.isTitle = 'Announcement';
    this.router.navigate(['/Announcement']);

  }

}
