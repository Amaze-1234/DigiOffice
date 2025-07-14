import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Api } from '../../Services/api';
import axios from 'axios';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DepartmentForm } from "../department-form/department-form";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-department-table',
  imports: [CommonModule, DepartmentForm],
  templateUrl: './department-table.html',
  styleUrl: './department-table.css'
})
export class DepartmentTable {

departmentData:any;
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
  this.departmentData=result.data;
  this.deptLength=this.departmentData.length
  console.log(this.departmentData)
}
async deleteDepartment(id:any)
{
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then(async (result) => {
  if (result.isConfirmed) {
    
  const result= await this.api.getMethod(`DigiOffice/DeleteDepartment?id=${id}`);
  this.getDepartmentdetails();
    if(result.data)
    {
  
    Swal.fire({
      title: "Deleted!",
      text: "Your data has been deleted.",
      icon: "success"
    });
  }
  else{
     Swal.fire({
      title: " Not Deleted!",
      text: "This is can't Delete Due to Unit consists this Department",
      icon: "error"
    });

  }
}

});

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