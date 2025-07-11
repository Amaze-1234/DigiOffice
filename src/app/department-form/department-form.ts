import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Api } from '../../Services/api';

@Component({
  selector: 'app-department-form',
  imports: [ReactiveFormsModule],
  templateUrl: './department-form.html',
  styleUrl: './department-form.css'
})
export class DepartmentForm {
  @Input() deptID:any
  @Output() closeModal=new EventEmitter<any>();;
  departmentInfo:any;
  constructor(public api:Api){}
  ngOnInit()
  {
    this.DepartmentFormDetails();
  }
  DepartmentFormDetails()
  {
    this.departmentInfo=new FormGroup({

      departmentName: new FormControl('',Validators.required),
      departmentDescription:new FormControl('',Validators.required)
    })
  }
  async addDepartment()
  {
    const result=await this.api.postMethod('DigiOffice/InsertDepartment',this.departmentInfo.value);
    this.closeModal.emit("save")
  }

}
