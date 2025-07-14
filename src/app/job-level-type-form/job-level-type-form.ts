import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { Api } from '../../Services/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-job-level-type-form',
  imports: [SharedModule],
  templateUrl: './job-level-type-form.html',
  styleUrl: './job-level-type-form.css',
  inputs:['editID'],
  outputs: ['closemodal']
})
export class JobLevelTypeForm {

  editID: any;
  closemodal = new EventEmitter<any>();
  designationDetails: any = [];
  jobLevelForm: any;
  constructor(public apiService: Api) { }

  ngOnInit() {
    if (this.editID) {
      this.getjoblevelTypeFormByID();
    }
    this.getjoblevelTypeForm();
    this.getDesignation();
  }
  async getDesignation() {
    let result = await this.apiService.getMethod('DigiOffice/GetDesignation');
    console.log(result.data);

    this.designationDetails = result.data;
  }

  getjoblevelTypeForm() {
    this.jobLevelForm = new FormGroup({
      ID: new FormControl(''),
      Designation: new FormControl('', Validators.required),
      LevelType: new FormControl('', Validators.required),
      LevelDescription: new FormControl('', Validators.required),

    })
    console.log(this.jobLevelForm.value);
    
  }

  async getjoblevelTypeFormByID() {
    debugger;
    let result = await this.apiService.getMethod(`DigiOffice/GetJobLevelTypeByID?ID=${this.editID}`);
    console.log(result.data);

    this.jobLevelForm = new FormGroup({
      ID: new FormControl(this.editID),
      Designation: new FormControl(result.data[0].designation, Validators.required),
      LevelType: new FormControl(result.data[0].levelType, Validators.required),
      LevelDescription: new FormControl(result.data[0].levelDescription, Validators.required),

    })
  }

  async submit(type: any) {
    debugger;
     if(this.jobLevelForm.invalid){
      Swal.fire("Please fill all the details");
      return;
     }
    console.log(this.jobLevelForm.value);
    if (type == 'save') {
      let result = await this.apiService.postMethod('DigiOffice/InsertJobLevelType', this.jobLevelForm.value);
      if (result.data > 0) {
        Swal.fire("Data Saved Successfully");
        this.closemodal.emit('save');
      }
    }
    else {
      let result = await this.apiService.postMethod('DigiOffice/UpdateJobLevelType', this.jobLevelForm.value);
      if (result.data > 0) {
        Swal.fire("Data Updated Successfully");
        this.closemodal.emit('update');
      }
    }

  }
  cancel(){
    console.log("child");
    this.closemodal.emit('close');
  }
}
