import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Api } from '../../Services/api';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-details',
  imports: [SharedModule],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css'
})
export class EmployeeDetails {
  editid: any;
  countryList: any;
  contactForm: any;
  constructor( public api:Api, public router: Router, public activateRoute: ActivatedRoute){}
  ngOnInit(){
    if(this.editid){
      this.getByID();
    }
    this.buildForm();
    this.getEmployeeDetails();
  }

  buildForm() {
    this.contactForm = new FormGroup({
      ID: new FormControl(''),
      Title: new FormControl('', Validators.required),
      FirstName: new FormControl('', Validators.required),
      MiddleName: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      NickName: new FormControl('', Validators.required),
      DateOfBirth: new FormControl('', Validators.required),
      PlaceOfBirth: new FormControl('', Validators.required),
      CountryID: new FormControl('', Validators.required),
      Gender: new FormControl('', Validators.required),
      MaritalStatus: new FormControl('', Validators.required),
      PersonalEmail: new FormControl('', Validators.required),
      MotherName: new FormControl('', Validators.required),
      FatherName: new FormControl('', Validators.required),
      Religion: new FormControl('', Validators.required),
      Citizenship: new FormControl('', Validators.required),
      Nationality: new FormControl('', Validators.required),
      BloodType: new FormControl('', Validators.required),

    })
  }

  async getByID() {
    let response = await this.api.getMethod(`Master/GetEmployeeDetailsByID?ID=${this.editid}`);
    console.log(response.data);
    this.contactForm = new FormGroup({
      ID: new FormControl(this.editid),
      Title: new FormControl(response.data[0].title, Validators.required),
      FirstName: new FormControl(response.data[0].firstName, Validators.required),
      MiddleName: new FormControl(response.data[0].middleName, Validators.required),
      LastName: new FormControl(response.data[0].lastName, Validators.required),
      NickName: new FormControl(response.data[0].nickName, Validators.required),
      DateOfBirth: new FormControl(response.data[0].dateOfBirth, Validators.required),
      PlaceOfBirth: new FormControl(response.data[0].placeOfBirth, Validators.required),
      CountryID: new FormControl(response.data[0].countryID, Validators.required),
      Gender: new FormControl(response.data[0].gender, Validators.required),
      MaritalStatus: new FormControl(response.data[0].maritalStatus, Validators.required),
      PersonalEmail: new FormControl(response.data[0].personalEmail, Validators.required),
      MotherName: new FormControl(response.data[0].motherName, Validators.required),
      FatherName: new FormControl(response.data[0].fatherName, Validators.required),
      Religion: new FormControl(response.data[0].religion, Validators.required),
      Citizenship: new FormControl(response.data[0].citizenship, Validators.required),
      Nationality: new FormControl(response.data[0].nationality, Validators.required),
      BloodType: new FormControl(response.data[0].bloodType, Validators.required)
    })
  }

  async getEmployeeDetails() {
    let result = await this.api.getMethod("Master/GetCountryTable");
    this.countryList = result.data;
  }

 async Submit(type: any){
  if(this.contactForm.invalid){
    Swal.fire({
      text: 'Please Fill All Details'
    });
    return;
  }
  if(type=='save'){
    let result = await this.api.postMethod('Master/InsertEmployeeDetails',this.contactForm.value);
    if(result.data > 0){
      Swal.fire({
        text: 'Employee Details Added Successfully'
      })
    }
  }else{
    let result = await this.api.postMethod('Master/UpdateEmployeeDetails', this.contactForm.value);
    if(result.data > 0){
      Swal.fire({
        text: 'Updated Successfully'
      })
    }
  }
 }

 goToNext(){
  if(this.contactForm.invalid){
    Swal.fire({
      icon:'error',
      title:"You Not Allowed to Navigate",
      text:'Please Fill Employee Details Tab'
    });
    return;
  }
  this.router.navigate(['/position-details']);
 }

}
