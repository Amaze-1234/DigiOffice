import { Component, Input } from '@angular/core';
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

  @Input() editid: any;

  unitType: any;
  department: any;
  unitValue: any;
  levelNameValue: any;
  constructor(public apiService: Api, public route: Router, public loaderService: Loader) { }
  ngOnInit() {
    if (this.editid) {
      this.getByID();
    }
    this.getPositionDetailsData();
    
    this.getDesignation();
    // this.getJobLevel();
    this.getDepartmentdetails();
    this.getCountry();
    this.getProvince();
    this.getCity();
    this.getLoginDetails();
    // this.getDepartment();
    
     
    

  }
  event(event: any) {
    throw new Error('Method not implemented.');
  }

  async getDesignation() {
    const result = await this.apiService.getMethod('DigiOffice/GetDesignation');
    this.designationData = result.data;
    console.log(this.designationData);
    
  }
  // async getJobLevel() {
  //   const result = await this.apiService.getMethod('DigiOffice/GetJoblevelType');
  //   this.jobLevelData = result.data;
  //   console.log(this.jobLevelData.designation);
  //   if(this.editid&&this.positionDetails.value.DesignationID)
  //   {
  //     this.getJobDetails({target:{value:this.positionDetails.value.DesignationID}})
  //   }
  // }


  async getJobDetails(event:any) {
   const selectedDesignation=event.target.value;
   console.log(selectedDesignation);
   

    // console.log(this.positionDetails.value.DesignationID)
    // this.levelNameValue = this.jobLevelData
    //   .filter((x: { designation: any; }) => x.designation == selectedDesignation)
    //   .map((x: { designation: any; levelType: any; }) => ({ designationIndex: x.designation, jobName: x.levelType }))
    if(!selectedDesignation){
      this.levelNameValue = null;
    }
    else{
    let result = await this.apiService.getMethod(`Master/GetJobLevelTypeByDesignationID?DesignationID=${selectedDesignation}`);
    this.levelNameValue = result.data;
    }
    console.log(this.levelNameValue);
    

  }
  async getLogin() {
    const result = await this.apiService.getMethod('DigiOffice/GetLoginType');
    this.loginTypeData = result.data;
  }

  async getDepartmentdetails() {
    const result = await this.apiService.getMethod("DigiOffice/GetDepartment");
    this.departmentData = result.data;
    console.log(this.departmentData);

  }
  // async getDepartment() {
  //   const result = await this.apiService.getMethod("DigiOffice/GetUnit");
  //   this.department = result.data;
  //   console.log(this.positionDetails.value.DepartmentID);
  //       if (this.editid && this.positionDetails?.value?.DepartmentID) {
  //     this.getDetails({ target: { value: this.positionDetails.value.DepartmentID } });
  //   }

  // }

  async getDetails(event: any) {
    const selectedDepartmentId = event.target.value;
    console.log(selectedDepartmentId);
    
    // this.unitType = this.department
    //   .filter((x: { departmentID: any }) => x.departmentID == selectedDepartmentId)
    //   .map((x: { unitName: any; id: any }) => ({
    //     unitName: x.unitName,
    //     ID: x.id
    //   }));
    // console.log(this.unitType)
    if(!selectedDepartmentId){
      this.unitType = null;
    }
    else{
    let result = await this.apiService.getMethod(`Master/GetUnitByDepartmentID?DepartmentID=${selectedDepartmentId}`)
    this.unitType = result.data;
    }
    console.log(this.unitType);
    
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
      EmployeeDetailsID: new FormControl(Number(this.employeeDetails), Validators.required)
    })
    
  }

  async getByID() {
    let response = await this.apiService.getMethod(`Master/GetPositionDetailsByEmployeeDetails?ID=${this.editid}`);
    console.log(response.data[0]);
      const departmentID = response.data[0].departmentID;
      console.log("hi" +departmentID)
    this.positionDetails = new FormGroup({
      DesignationID: new FormControl(response.data[0].designationID, Validators.required),
      JobLevel: new FormControl(response.data[0].jobLevel, Validators.required),
      LoginType: new FormControl(response.data[0].loginType, Validators.required),
      DepartmentID: new FormControl(response.data[0].departmentID, Validators.required),
      UnitID: new FormControl(response.data[0].unitID, Validators.required),
      Manager: new FormControl(response.data[0].manager, Validators.required),
      WorkArrangement: new FormControl(response.data[0].workArrangement, Validators.required),
      WorksiteCountry: new FormControl(response.data[0].worksiteCountry, Validators.required),
      WorksiteProvince: new FormControl(response.data[0].worksiteProvince, Validators.required),
      WorksiteCity: new FormControl(response.data[0].worksiteCity, Validators.required),
      WorkingLocation: new FormControl(response.data[0].workingLocation, Validators.required),
      EmploymentType: new FormControl(response.data[0].employmentType, Validators.required),
      EmploymentStatus: new FormControl(response.data[0].employmentStatus, Validators.required),
      HiredDate: new FormControl(response.data[0].hiredDate.split('T')[0], Validators.required),
      ConfirmationDueDate: new FormControl(response.data[0].confirmationDueDate.split('T')[0], Validators.required),
      ActualConfirmationDueDate: new FormControl(response.data[0].actualConfirmationDueDate.split('T')[0], Validators.required),
      SeperationDate: new FormControl(response.data[0].seperationDate.split('T')[0], Validators.required),
      ProbationEndDate: new FormControl(response.data[0].probationEndDate.split('T')[0], Validators.required),
      ContractEndDate: new FormControl(response.data[0].contractEndDate.split('T')[0], Validators.required),
      EmployeeDetailsID: new FormControl(response.data[0].employeeDetailsID, Validators.required)

    })
      this.getJobDetails({ target: { value: response.data[0].designationID } });
    this.getDetails({ target: { value: response.data[0].departmentID } });
  }

  async submitDetails(type: any) {
    console.log(this.positionDetails.value);
    // if(this.positionDetails.invalid ){
    //   Swal.fire("Please fill all the details");
    //   return;
    // }
    // if(this.employeeDetails == 'no'){
    //   Swal.fire("Your data is not associated with your Employee ID");
    //   return;
    // }
    console.log(this.loaderService.isEmployeeDetails);
    console.log("position data");
    if (type == 'submit') {
      if (this.positionDetails.invalid) {
        Swal.fire("Please fill all the details");
        return;
      }
      if (this.employeeDetails == 'no') {
        Swal.fire("Your data is not associated with your Employee ID");
        return;
      }
      const result = await this.apiService.postMethod('Master/InsertPositionDetails', this.positionDetails.value);
      console.log(result.data);
      
      if (result.data > 0) {
        Swal.fire("Data Saved successfully")
        sessionStorage.removeItem("isEmployeeDetails");
        this.route.navigate(['/staffdashboard']);
      }
    }
    else {
      console.log(this.positionDetails.value);
      
      const result = await this.apiService.postMethod('Master/UpdatePositionDetails', this.positionDetails.value);
      console.log('after update');
      console.log(result);
      
      
      if (result.data > 0) {
        console.log(result.data);
        
        Swal.fire("Data Updated successfully");
         this.route.navigate(['/staffdashboard']);

      }
    }

  }

  previousPage() {
    this.loaderService.isDetail = "employee";
  }

}
