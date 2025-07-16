
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Api } from '../../Services/api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ShiftForm } from "../shift-form/shift-form";
import { SharedModule } from '../../Shared/shared.module';


@Component({
  selector: 'app-shift-table',
  imports: [SharedModule, ShiftForm],
  templateUrl: './shift-table.html',
  styleUrl: './shift-table.css',
})
export class ShiftTable implements OnInit {
  shiftData: any;
  editid: any;
  shiftForm: any;
  shiftLength: any;
  closemodal: any;
  searchText:any='';
  constructor(public apiservice: Api, public router: Router, public modalService: NgbModal) { }


  ngOnInit() {
    this.getData();
  }


  async getData() {
    const result = await this.apiservice.getMethod("Master/GetShift");
    this.shiftData = result.data;
    this.shiftLength = this.shiftData.length;
console.log(this.shiftData)

  }




  async delete(id: any) {
    debugger
    const confirmation = await Swal.fire({
      title: "Are you sure you want to delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    });
    if (confirmation.isConfirmed) {
      const result = await this.apiservice.getMethod(`Master/DeleteShift?ID=${id}`);

      if (result.data > 0) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        this.getData();
      }
    }
  }

  openModal(modal: any, id: any = null) {
    debugger;
    this.editid = id;
    this.modalService.open(modal, {
      centered: true,
      size: "lg",
      backdrop: "static",
      scrollable: true
    });
  }
  close(data: any = null) {
    debugger;
    this.editid = null;
    this.modalService.dismissAll();
    if (data == 'update' || data == 'submit') {
      this.getData();
    }
  }

}
