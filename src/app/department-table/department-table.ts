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
deptid:any=7;
constructor(public api:Api,public modalService:NgbModal){}
ngOnInit()
{
this.getDepartmentdetails();
}

async getDepartmentdetails()
{
  const result= await this.api.getMethod("DigiOffice/GetDepartment");
  this.DepartmentData=result.data;

}
close(data:any){

}


}
