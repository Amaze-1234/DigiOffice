import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { Api } from '../../Services/api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { UnitForm } from "../unit-form/unit-form";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-unit-table',
  imports: [SharedModule, UnitForm],
  templateUrl: './unit-table.html',
  styleUrl: './unit-table.css'
})
export class UnitTable {

DepartmentData:any;
deptID:any;
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
 
  const result= await this.api.getMethod(`DigiOffice/DeleteUnit?id=${id}`);

  this.getDepartmentdetails();
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
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
close(data:any=null){
  debugger;
    this.deptID = null;
    this.modalService.dismissAll();
    if (data == 'update' || data == 'save') {
      this.getDepartmentdetails();
    }

}


}
