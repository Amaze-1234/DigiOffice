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
<<<<<<< HEAD
import { LoanRequest } from './loan-request/loan-request';
import { OvertimeDetails } from './overtime-details/overtime-details';
import { LoanRequestForm } from './loan-request-form/loan-request-form';
import { OvertimeDetailsForm } from './overtime-details-form/overtime-details-form';
=======
import { ResignationTab } from './resignation-tab/resignation-tab';
import { AttendanceDetails } from './attendance-details/attendance-details';
import { ShiftDetails } from './shift-details/shift-details';
import { TeamShiftDetails } from './team-shift-details/team-shift-details';
import { DashBoard } from './dash-board/dash-board';
>>>>>>> c0ff2fbb1c3a7426cf42dcd3974c8408d1e9cb9b


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
<<<<<<< HEAD
  { path: "loan-request", component: LoanRequest, pathMatch: "full"},
  { path: "overtime-details", component: OvertimeDetails, pathMatch: "full"},
  { path: "loan-request-form", component: LoanRequestForm, pathMatch: "full"},
  { path: "overtime-details-form", component:OvertimeDetailsForm, pathMatch: "full"},
  
=======
  { path: "resignation-tab", component: ResignationTab, pathMatch: 'full' },
  { path: "AttendanceDetails", component: AttendanceDetails, pathMatch: "full" },
  { path: "ShiftDetails", component: ShiftDetails, pathMatch: "full" },
  { path: "TeamShiftDetails", component: TeamShiftDetails, pathMatch: "full" },
  { path: "dashboard", component: DashBoard, pathMatch: "full" }

>>>>>>> c0ff2fbb1c3a7426cf42dcd3974c8408d1e9cb9b

];
