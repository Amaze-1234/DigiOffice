import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Api } from '../../Services/api';
import { Router } from '@angular/router';

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
  constructor(public api:Api,public route:Router){}
  ngOnInit()
  {
   
    if(this.deptID)
    {
      this.updateDepartmentForm();
    }
     this.DepartmentFormDetails();
  }
  DepartmentFormDetails()
  {
    this.departmentInfo=new FormGroup({
      ID: new FormControl(''),
      departmentName: new FormControl('',Validators.required),
      departmentDescription:new FormControl('',Validators.required)
    })
  }
  async addDepartment(type:any)
  {
    if(type=='save')
    {
    const result=await this.api.postMethod('DigiOffice/InsertDepartment',this.departmentInfo.value);
  
    this.closeModal.emit("save")
    }
    else
    {
      console.log(this.departmentInfo.value);
      const result=await this.api.postMethod('DigiOffice/UpdateDepartment',this.departmentInfo.value);
      console.log(result.data);
       this.deptID=null
      
       this.closeModal.emit("update")
    }
  }
  async updateDepartmentForm()
  {
    const result=await this.api.getMethod(`DigiOffice/GetDepartmentByID?ID=${this.deptID}`)
      this.departmentInfo=new FormGroup({
      ID: new FormControl(this.deptID),
      departmentName: new FormControl(result.data[0].departmentName,Validators.required),
      departmentDescription:new FormControl(result.data[0].departmentDescription,Validators.required)
    })
    // is not working console.log(result.data[0].ID)
  }
navigate()
{
  this.route.navigate(['department-table']);
  
}

}
