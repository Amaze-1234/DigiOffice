import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { Api } from '../../Services/api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit-table',
  imports: [SharedModule],
  templateUrl: './unit-table.html',
  styleUrl: './unit-table.css'
})
export class UnitTable {

DepartmentData:any;
deptid:any=7;
deptLength:any;
constructor(public api:Api,public modalService:NgbModal,public route:Router){}
ngOnInit()
{
this.getDepartmentdetails();
}

async getDepartmentdetails()
{
  const result= await this.api.getMethod("DigiOffice/GetUnitJoinDepartment");
  this.DepartmentData=result.data;
  this.deptLength=this.DepartmentData.length
  console.log(this.DepartmentData)
}
async deleteDepartment(id:any)
{
  const result= await this.api.getMethod(`DigiOffice/DeleteUnit?id=${id}`);
  console.log(id)
  
  this.getDepartmentdetails();
}

navigate()
{
  this.route.navigate(['/unitform']);
}

}
