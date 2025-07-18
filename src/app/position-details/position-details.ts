import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Api } from '../../Services/api';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Loader } from '../../Services/loader';

@Component({
  selector: 'app-position-details',
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './position-details.html',
  styleUrl: './position-details.css'
})
export class PositionDetails {
  positionDetails: any;
  designationData: any;

  jobLevelData: any
  loginTypeData: any;
  departmentData: any;
  countryData: any;
  provinceData: any;
  cityData: any;
  employeeDetails: any;
  editid: any;
  unitType: any;
  constructor(public apiService: Api, public route :Router, public loaderService:Loader) { }
  ngOnInit() {
    if (this.editid) {
      this.getByID();
    }
    this.getPositionDetailsData();
    this.getDesignation();
    this.getJobLevel();
    this.getDepartmentdetails();
    this.getCountry();
    this.getProvince();
    this.getCity();
    this.getLoginDetails();
    
  }

  async getDesignation() {
    const result = await this.apiService.getMethod('DigiOffice/GetDesignation');
    this.designationData = result.data;
  }
  async getJobLevel() {
    const result = await this.apiService.getMethod('DigiOffice/GetJoblevelType');
    this.jobLevelData = result.data;
    console.log(this.jobLevelData.levelType);
  }
  async getLogin() {
    const result = await this.apiService.getMethod('DigiOffice/GetLoginType');
    this.loginTypeData = result.data;
  }
  async getDepartmentdetails() {
    const result = await this.apiService.getMethod("DigiOffice/GetUnitJoinDepartment");
    this.departmentData = result.data;

  }
//   getDetails()
// {
//   debugger;
//   console.log(this.positionDetails.value.DesignationID)
//   this.unitType=this.departmentData.filter((x: { departmentID: any; })=>x.departmentID==this.positionDetails.value.DepartmentID).map((x: { unitName: any; })=>x.unitName)
//    console.log(this.unitType)  
// }
 
  async getCountry() {
    let result = await this.apiService.getMethod('Master/GetCountryTable');
    this.countryData = result.data;
  }
  async getProvince() {
    const result = await this.apiService.getMethod("Master/GetProvince");
    this.provinceData = result.data;

  }
  async getCity() {
    let result = await this.apiService.getMethod('Master/GetCity');
    this.cityData = result.data;
  }

   async getLoginDetails() {
    let result = await this.apiService.getMethod('Master/GetLoginType');
    this.loginTypeData = result.data;
  }

  getPositionDetailsData() {
    this.employeeDetails = this.loaderService.isEmployeeDetails;
    this.positionDetails = new FormGroup({
      // ID: new FormControl(15),
      DesignationID: new FormControl('', Validators.required),
      JobLevel: new FormControl('', Validators.required),
      LoginType: new FormControl('', Validators.required),
      DepartmentID: new FormControl('', Validators.required),
      UnitID: new FormControl('', Validators.required),
      Manager: new FormControl('', Validators.required),
      WorkArrangement: new FormControl('', Validators.required),
      WorksiteCountry: new FormControl('', Validators.required),
      WorksiteProvince: new FormControl('', Validators.required),
      WorksiteCity: new FormControl('', Validators.required),
      WorkingLocation: new FormControl('', Validators.required),
      EmploymentType: new FormControl('', Validators.required),
      EmploymentStatus: new FormControl('', Validators.required),
      HiredDate: new FormControl('', Validators.required),
      ConfirmationDueDate: new FormControl('', Validators.required),
      ActualConfirmationDueDate: new FormControl('', Validators.required),
      SeperationDate: new FormControl('', Validators.required),
      ProbationEndDate: new FormControl('', Validators.required),
      ContractEndDate: new FormControl('', Validators.required),
      EmployeeDetailsID: new FormControl(Number(this.employeeDetails),Validators.required)
    })
  }

  async getByID() {
    let response = await this.apiService.getMethod(`Master/GetPositionDetailsByID?ID=${this.editid}`);
    console.log(response.data);
    this.positionDetails = new FormGroup({
      DesignationID: new FormControl(this.editid),
      JobLevel: new FormControl(response.data[0].jobLevel, Validators.required),
      LoginType: new FormControl(response.data[0].loginType, Validators.required),
      DepartmentID: new FormControl(response.data[0].departmentID, Validators.required),
      UnitID: new FormControl(response.data[0].unitID, Validators.required),
      WorkArrangement: new FormControl(response.data[0].workArrangement, Validators.required),
      WorksiteCountry: new FormControl(response.data[0].worksiteCountry, Validators.required),
      WorksiteProvince: new FormControl(response.data[0].worksiteProvince, Validators.required),
      WorksiteCity: new FormControl(response.data[0].worksiteCity, Validators.required),
      WorkingLocation: new FormControl(response.data[0].workingLocation, Validators.required),
      EmploymentType: new FormControl(response.data[0].employmentType, Validators.required),
      EmploymentStatus: new FormControl(response.data[0].employmentStatus, Validators.required),
      HiredDate: new FormControl(response.data[0].hiredDate, Validators.required),
      ConfirmationDueDate: new FormControl(response.data[0].confirmationDueDate, Validators.required),
      ActualConfirmationDueDate: new FormControl(response.data[0].actualConfirmationDueDate, Validators.required),
      SeperationDate: new FormControl(response.data[0].seperationDate, Validators.required),
      ProbationEndDate: new FormControl(response.data[0].probationEndDate, Validators.required),
      ContractEndDate: new FormControl(response.data[0].contractEndDate, Validators.required),
      EmployeeDetailsID: new FormControl(response.data[0].employeeDetailsID, Validators.required)

    })
  }

 async submitDetails()
{
  console.log(this.positionDetails.value);
  if(this.positionDetails.invalid ){
    Swal.fire("Please fill all the details");
    return;
  }
  if(this.employeeDetails == 'no'){
    Swal.fire("Your data is not associated with your Employee ID");
    return;
  }
console.log(this.loaderService.isEmployeeDetails);
console.log("position data");


  const result = await this.apiService.postMethod('Master/InsertPositionDetails',this.positionDetails.value);
  if(result.data >0){
    Swal.fire("Data Saved successfully")
    sessionStorage.removeItem("isEmployeeDetails");
  }
  
}

previousPage()
{
  this.loaderService.isDetail = "employee";
}

}
