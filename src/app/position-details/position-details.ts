import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Api } from '../../Services/api';

@Component({
  selector: 'app-position-details',
  imports: [SharedModule,ReactiveFormsModule],
  templateUrl: './position-details.html',
  styleUrl: './position-details.css'
})
export class PositionDetails {
  positionDetails:any;
 designationData:any;

 jobLevelData:any
 loginTypeData:any;
 departmentData:any;
 countryData:any;
 provinceData:any;
 cityData:any;
 designationName:string='';
  constructor(public apiService:Api){}
  ngOnInit()
  {
    this.getDesignation();
    this.getJobLevel();
    this.getDepartmentdetails();
    this.getCountry();
    this.getProvince();
    this.getCity();
  }

async getDesignation()
{
  const result=await this.apiService.getMethod('DigiOffice/GetDesignation');
  this.designationData=result.data;
}
async getJobLevel()
{
  const result=await this.apiService.getMethod('DigiOffice/GetJoblevelType');
  this.jobLevelData=result.data;
}
async getLogin()
{
  const result=await this.apiService.getMethod('DigiOffice/GetLoginType');
  this.loginTypeData=result.data;
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

}
