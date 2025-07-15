import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Api } from '../../Services/api';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-department-form',
  imports: [ReactiveFormsModule],
  templateUrl: './department-form.html',
  styleUrl: './department-form.css',
  inputs: ['deptID'],
  outputs: ['closeModal']
})
export class DepartmentForm {
  deptID: any
  closeModal = new EventEmitter<any>();;
  departmentInfo: any;
  constructor(public api: Api, public route: Router) { }
  ngOnInit() {

    if (this.deptID) {
      this.updateDepartmentForm();
    }
    this.departmentFormDetails();
  }
  departmentFormDetails() {
    this.departmentInfo = new FormGroup({
      ID: new FormControl(''),
      departmentName: new FormControl('', Validators.required),
      departmentDescription: new FormControl('', Validators.required)
    })
  }
  async addDepartment(type: any) {
    if (this.departmentInfo.invalid) {
      Swal.fire({
        text: 'Please fill all the details'
      });
      return;
    }
    if (type == 'save') {
      let result = await this.api.postMethod('DigiOffice/InsertDepartment', this.departmentInfo.value);
      this.closeModal.emit("save");
      if (result.data > 0) {
        Swal.fire("Data saved Successfully");
      }
    }
    else {
      let result = await this.api.postMethod('DigiOffice/UpdateDepartment', this.departmentInfo.value);
      this.closeModal.emit("update");
      Swal.fire("Data Updated Successfully");
    }
  }
  async updateDepartmentForm() {
    const result = await this.api.getMethod(`DigiOffice/GetDepartmentByID?ID=${this.deptID}`)
    this.departmentInfo = new FormGroup({
      ID: new FormControl(this.deptID),
      departmentName: new FormControl(result.data[0].departmentName, Validators.required),
      departmentDescription: new FormControl(result.data[0].departmentDescription, Validators.required)
    })
    // is not working console.log(result.data[0].ID)
  }
  cancel() {
    this.closeModal.emit("cancel");
  }


}
