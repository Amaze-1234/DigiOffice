import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Api } from '../../Services/api';
import axios from 'axios';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DepartmentForm } from "../department-form/department-form";
@Component({
  selector: 'app-department-table',
  imports: [CommonModule, DepartmentForm],
  templateUrl: './department-table.html',
  styleUrl: './department-table.css'
})
export class DepartmentTable {

DepartmentData:any;
deptID:any;
deptLength:any;
constructor(public api:Api,public modalService:NgbModal){}
ngOnInit()
{
this.getDepartmentdetails();
}

async getDepartmentdetails()
{
  const result= await this.api.getMethod("DigiOffice/GetDepartment");
  this.DepartmentData=result.data;
  this.deptLength=this.DepartmentData.length
  console.log(this.DepartmentData)
}
async deleteDepartment(id:any)
{
  const result= await this.api.getMethod(`DigiOffice/DeleteDepartment?id=${id}`);
  
  this.getDepartmentdetails();
}
openModal(modal:any,id:any=null)
{
    if (id) {
      this.deptID = id;
    }
    this.modalService.open(modal, { centered: true, size: "lg", backdrop: "static", scrollable: true });

}


 close(data: any = null) {
  
    this.deptID = null;
    this.modalService.dismissAll();
    if (data == 'update' || data == 'save') {
      this.getDepartmentdetails();
    }


}
}