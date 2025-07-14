import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Api } from '../../Services/api';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-department-form',
  imports: [ReactiveFormsModule],
  templateUrl: './department-form.html',
  styleUrl: './department-form.css'
})
export class DepartmentForm {
  @Input() deptID: any
  @Output() closeModal = new EventEmitter<any>();;
  departmentInfo: any;
  constructor(public api: Api, public route: Router) { }
  ngOnInit() {

    if (this.deptID) {
      this.updateDepartmentForm();
    }
    this.DepartmentFormDetails();
  }
  DepartmentFormDetails() {
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
      Swal.fire({
        title: "Are you sure?",
        text: "You want to add Data!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Add it!"
      }).then(async (result) => {
        if (result.isConfirmed) {

          const result = await this.api.postMethod('DigiOffice/InsertDepartment', this.departmentInfo.value);

          this.closeModal.emit("save")
          Swal.fire({
            title: "Added!",
            text: "Your data is added successfully.",
            icon: "success"
          });
        }
      });
    }
    else {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to Update Data!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Update it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          const result = await this.api.postMethod('DigiOffice/UpdateDepartment', this.departmentInfo.value);

          this.deptID = null

          this.closeModal.emit("update")
          Swal.fire({
            title: "Updated!",
            text: "Your data is updated successfully.",
            icon: "success"
          });
        }
      });

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
