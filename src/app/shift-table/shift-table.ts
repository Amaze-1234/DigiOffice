import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Api } from '../../Services/api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-shift-table',
  imports: [ FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './shift-table.html',
  styleUrl: './shift-table.css'
})
export class ShiftTable implements OnInit{
   shiftData:any;
   editid:any;
   constructor(public apiservice:Api, public router:Router,public modalService: NgbModal){}
 

     ngOnInit(){
       this.getData();
     }
   
   
       async getData(){
       const result =await this.apiservice.getMethod("Master/GetShift");
       this. shiftData = result.data;
    
       
    
     }
    
    
       async delete(id:any){
       const result = await this.apiservice.getMethod(`Master/DeleteShift?ID=${id}`);
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
    if (data == 'update' || data == 'save') {
      this.getData();
    }
  }

}
