import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Api } from '../../Services/api';
import { LoanTypeForm } from '../loan-type-form/loan-type-form';

@Component({
  selector: 'app-loan-type-table',
  imports: [FormsModule, CommonModule,ReactiveFormsModule,LoanTypeForm],
  templateUrl: './loan-type-table.html',
  styleUrl: './loan-type-table.css'
})
export class LoanTypeTable implements OnInit{

   loanData:any;
   editid:any;
   constructor(public apiservice:Api, public router:Router,public modalService: NgbModal){}
 

     ngOnInit(){
       this.getData();
     }
   
   
       async getData(){
       const result =await this.apiservice.getMethod("Master/GetLoan");
       this. loanData = result.data;
    
       
    
     }
    
    
       async delete(id:any){
       const result = await this.apiservice.getMethod(`Master/DeleteLoan?ID=${id}`);
       if (result.data > 0) {
         this.getData();
       
         Swal.fire("Data deleted Successfully");
   
       }
       }
   
   
    openModal(modal: any, id: any = null) {
    debugger
    if (id) {
      this.editid = id;
    }

    this.modalService.open(modal, { centered: true, size: "lg", backdrop: "static", scrollable: true });
  }
  close(data:any = null) {
    debugger;
    this.editid = null;
    this.modalService.dismissAll();
    if (data == 'update' || data == 'submit') {
      this.getData();
    }
  }
}
