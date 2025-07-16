import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Api } from '../../Services/api';
import { LoanTypeForm } from '../loan-type-form/loan-type-form';
import { SharedModule } from '../../Shared/shared.module';

@Component({
  selector: 'app-loan-type-table',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, LoanTypeForm,SharedModule],
  templateUrl: './loan-type-table.html',
  styleUrl: './loan-type-table.css'
})
export class LoanTypeTable implements OnInit {

  loanData: any;
  editid: any;
  loanForm: any;
  closemodal: any;
  loanLength: any;
  searchText:any='';
  constructor(public apiservice: Api, public router: Router, public modalService: NgbModal) { }


  ngOnInit() {
    this.getData();
  }


  async getData() {
    const result = await this.apiservice.getMethod("Master/GetLoan");
    this.loanData = result.data;


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
      const result = await this.apiservice.getMethod(`Master/DeleteLoan?ID=${id}`);

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
