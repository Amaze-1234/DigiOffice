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


  hide = true;
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
  navigateEmployeeManager() {
    sessionStorage.setItem("isTitle", "EmployeeManagement")
    this.loaderService.isTitle = 'EmployeeManagement';
    this.hide = !this.hide;

  }
  navigateExitChecklist() {

    sessionStorage.setItem("isTitle", "ExitChecklist");
    this.loaderService.isTitle = 'ExitChecklist';
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
  }
  navigateAttendenceCorrection() {
    sessionStorage.setItem("isTitle", "AttendenceCorrection")
    this.loaderService.isTitle = 'AttendenceCorrection';
  }

  navigateRequest() {

    sessionStorage.setItem("isTitle", "Request");
    this.loaderService.isTitle = 'Request';
    this.hide3 = !this.hide3;
  }
  navigateLoanRequest() {
    sessionStorage.setItem("isTitle", "LoanRequest")
    this.loaderService.isTitle = 'LoanRequest';
  }
  navigateOvertimeDetails() {
    sessionStorage.setItem("isTitle", "OvertimeDetails")
    this.loaderService.isTitle = 'OvertimeDetails';
  }
  navigateLeaveRequest() {
    sessionStorage.setItem("isTitle", "LeaveRequest")
    this.loaderService.isTitle = 'LeaveRequest';
  }
  navigateResignation() {
    sessionStorage.setItem("isTitle", "Resignation")
    this.loaderService.isTitle = 'Resignation';
  }

  navigateSurvey() {

    sessionStorage.setItem("isTitle", "Survey")
    this.loaderService.isTitle = 'Survey';
    this.hide4 = !this.hide4;
  }
  navigateTakeSurvey() {

    sessionStorage.setItem("isTitle", "TakeSurvey")
    this.loaderService.isTitle = 'TakeSurvey';
  }
  navigateHoliday() {

    sessionStorage.setItem("isTitle", "Holiday")
    this.loaderService.isTitle = 'Holiday';
  }
  navigateAnnouncement() {
    sessionStorage.setItem("isTitle", "Announcement")
    this.loaderService.isTitle = 'Announcement';
  }

}
