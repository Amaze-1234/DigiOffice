import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Api } from '../../Services/api';

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
  constructor(public apiService: Api) { }
  ngOnInit() {
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
  }
  async getLogin() {
    const result = await this.apiService.getMethod('DigiOffice/GetLoginType');
    this.loginTypeData = result.data;
  }
  async getDepartmentdetails() {
    const result = await this.apiService.getMethod("DigiOffice/GetUnitJoinDepartment");
    this.departmentData = result.data;

  }
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
    this.positionDetails = new FormGroup({
      ID: new FormControl(''),
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
      EmployeeDetailsID: new FormControl('')

    })

  }

}
