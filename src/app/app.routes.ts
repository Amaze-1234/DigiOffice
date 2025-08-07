import { Routes } from '@angular/router';
import { Login } from './login/login';
import { CountryForm } from './country-form/country-form';
import { CountryTable } from './country-table/country-table';
import { DepartmentForm } from './department-form/department-form';
import { DepartmentTable } from './department-table/department-table';
import { UnitForm } from './unit-form/unit-form';
import { UnitTable } from './unit-table/unit-table';
import { ShiftForm } from './shift-form/shift-form';
import { ShiftTable } from './shift-table/shift-table';
import { JobLevelTypeForm } from './job-level-type-form/job-level-type-form';
import { JobLevelTypeTable } from './job-level-type-table/job-level-type-table';
import { LoanTypeForm } from './loan-type-form/loan-type-form';
import { LoanTypeTable } from './loan-type-table/loan-type-table';
import { ProvinceForm } from './province-form/province-form';
import { ProvinceTable } from './province-table/province-table';
import { CityForm } from './city-form/city-form';
import { CityTable } from './city-table/city-table';
import { StaffDashboard } from './staff-dashboard/staff-dashboard';
import { EmployeeDetails } from './employee-details/employee-details';
import { PositionDetails } from './position-details/position-details';
import { StaffNavbar } from './staff-navbar/staff-navbar';
import { StaffDetail } from './staff-detail/staff-detail';

import { LoanRequest } from './loan-request/loan-request';
import { OvertimeDetails } from './overtime-details/overtime-details';
import { LoanRequestForm } from './loan-request-form/loan-request-form';
import { OvertimeDetailsForm } from './overtime-details-form/overtime-details-form';

import { ResignationTab } from './resignation-tab/resignation-tab';
import { AttendanceDetails } from './attendance-details/attendance-details';
import { ShiftDetails } from './shift-details/shift-details';
import { TeamShiftDetails } from './team-shift-details/team-shift-details';
import { DashBoard } from './dash-board/dash-board';
import { Resignation } from './resignation/resignation';
import { TeamResignation } from './team-resignation/team-resignation';
import { TeamShiftDetailsForm } from './team-shift-details-form/team-shift-details-form';
import { LeaveRequest } from './leave-request/leave-request';
import { Exitchecklistclearance } from './exitchecklistclearance/exitchecklistclearance';
import { Survey } from './survey/survey';
import { AttendenceCorrection } from './attendence-correction/attendence-correction';
import { Holiday } from './holiday/holiday';
import { Announcement } from './announcement/announcement';
import { AnnouncementForm } from './announcement-form/announcement-form';
import { MyShift } from './my-shift/my-shift';
import { StaffDashboardDetails } from './staff-dashboard-details/staff-dashboard-details';
import { StaffShiftDetails } from './staff-shift-details/staff-shift-details';
import { StaffAttendenceCorrection } from './staff-attendence-correction/staff-attendence-correction';




export const routes: Routes = [
  { path: "login", component: Login, pathMatch: "full" },
  { path: "countryform", component: CountryForm, pathMatch: "full" },
  { path: "countrytable", component: CountryTable, pathMatch: "full" },
  { path: "departmentform", component: DepartmentForm, pathMatch: "full" },
  { path: "department-table", component: DepartmentTable, pathMatch: "full" },
  { path: "unitform", component: UnitForm, pathMatch: "full" },
  { path: "unit-table", component: UnitTable, pathMatch: "full" },
  { path: "shiftform", component: ShiftForm, pathMatch: "full" },
  { path: "shift-table", component: ShiftTable, pathMatch: "full" },
  { path: "jobleveltypeform", component: JobLevelTypeForm, pathMatch: "full" },
  { path: "jobleveltypetable", component: JobLevelTypeTable, pathMatch: "full" },
  { path: "loantypeform", component: LoanTypeForm, pathMatch: "full" },
  { path: "loantypetable", component: LoanTypeTable, pathMatch: "full" },
  { path: "provinceform", component: ProvinceForm, pathMatch: "full" },
  { path: "provincetable", component: ProvinceTable, pathMatch: "full" },
  { path: "cityform", component: CityForm, pathMatch: "full" },
  { path: "citytable", component: CityTable, pathMatch: "full" },
  { path: "staffdashboard", component: StaffDashboard, pathMatch: "full" },
  { path: "employee-details", component: EmployeeDetails, pathMatch: "full" },
  { path: "position-details", component: PositionDetails, pathMatch: "full" },
  // { path: "employee-details/:id", component: EmployeeDetails, pathMatch: "full" },
  // { path: "position-details/:id", component: PositionDetails, pathMatch: "full" },
  { path: "staff-navbar", component: StaffNavbar, pathMatch: "full" },
  { path: "staff-details", component: StaffDetail, pathMatch: "full" },
  { path: "staff-details/:id", component: StaffDetail, pathMatch: "full" },
  { path: "resignation-tab", component: ResignationTab, pathMatch: 'full' },
  { path: "attendance-details", component: AttendanceDetails, pathMatch: "full" },
  { path: "resignation", component: Resignation, pathMatch: 'full' },
  { path: "team-resignation", component: TeamResignation, pathMatch: 'full' },

  { path: "loan-request", component: LoanRequest, pathMatch: "full" },
  { path: "overtime-details", component: OvertimeDetails, pathMatch: "full" },
  { path: "loan-request-form", component: LoanRequestForm, pathMatch: "full" },
  { path: "overtime-details-form", component: OvertimeDetailsForm, pathMatch: "full" },


  { path: "resignation-tab", component: ResignationTab, pathMatch: 'full' },
  { path: "AttendanceDetails", component: AttendanceDetails, pathMatch: "full" },
  { path: "ShiftDetails", component: ShiftDetails, pathMatch: "full" },
  { path: "my-shift", component: MyShift, pathMatch: "full" },
  { path: "TeamShiftDetails", component: TeamShiftDetails, pathMatch: "full" },
  { path: "dashboard", component: DashBoard, pathMatch: "full" },
  { path: "TeamShiftDetailsForm", component: TeamShiftDetailsForm, pathMatch: "full" },
  { path: "leave-request", component: LeaveRequest, pathMatch: "full" },
  { path: "exit-chceklist", component: Exitchecklistclearance, pathMatch: "full" },
  { path: "survey", component: Survey, pathMatch: "full" },
  { path: "Attendence-Correction", component: AttendenceCorrection, pathMatch: "full" },
  { path: "Holiday", component: Holiday, pathMatch: "full" },
  { path: "Announcement", component: Announcement, pathMatch: "full" },
  { path: "announcement-form", component: AnnouncementForm, pathMatch: "full"},
  { path: "Staffdashboard-details", component: StaffDashboardDetails, pathMatch: "full"},
  { path: "Staff-shift-details", component: StaffShiftDetails, pathMatch: "full"},
  { path: "Staff-attendence-correction", component:StaffAttendenceCorrection, pathMatch: "full"}
  





];
