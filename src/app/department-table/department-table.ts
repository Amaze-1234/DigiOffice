import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Api } from '../../Services/api';
import axios from 'axios';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DepartmentForm } from "../department-form/department-form";
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../Shared/shared.module';
@Component({
  selector: 'app-department-table',
  imports: [DepartmentForm,SharedModule],
  templateUrl: './department-table.html',
  styleUrl: './department-table.css'
})
export class DepartmentTable {

  departmentData: any;
  deptID: any;
  deptLength: any;
  searchItem:any
  constructor(public api: Api, public modalService: NgbModal) { }
  ngOnInit() {
    this.getDepartmentdetails();
  }

  async getDepartmentdetails() {
    const resultDetails = await this.api.getMethod("DigiOffice/GetDepartment");
    this.departmentData = resultDetails.data;
    this.deptLength = this.departmentData.length
    console.log(this.departmentData)
  }
  async deleteDepartment(id: any) {
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

        const result = await this.api.getMethod(`DigiOffice/DeleteDepartment?id=${id}`);
        this.getDepartmentdetails();


        Swal.fire({
          title: "Deleted!",
          text: "Your data has been deleted.",
          icon: "success"
        });
      }



    });

  }
  openModal(modal: any, id: any = null) {
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