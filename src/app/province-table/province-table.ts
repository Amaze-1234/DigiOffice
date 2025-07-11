import { Component } from '@angular/core';
import { ProvinceForm } from '../province-form/province-form';
import Swal from 'sweetalert2';
import { Api } from '../../Services/api';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../Shared/shared.module';

@Component({
  selector: 'app-province-table',
  imports: [ProvinceForm, SharedModule],
  templateUrl: './province-table.html',
  styleUrl: './province-table.css'
})
export class ProvinceTable {
  editid: any;
  data: any;
  provinceData: any;
  constructor(public api:Api, public router:Router,public modalservice:NgbModal){}


  ngOnInit() {
    this.getData();
  }

  async getData() {
    const result = await this.api.getMethod("Master/GetProvince");
    console.log( result.data);
    this.provinceData = result.data;
  }

  openModal(Modal: any,id:any =null ){
    if(id){
      this.editid=id;
    }  
    console.log(1);
     
      this.modalservice.open(Modal,{centered: true, size:"lg", backdrop:'static'});
  }
  close(type:any=null){
    this.editid = null;
    this.modalservice.dismissAll();
    if (type == 'save' || type == 'update') {
      this.getData();
    }
    
  }
  async delete(id: any) {
    const confirmation = await Swal.fire({
      title: "Are you sure you want to delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    });
    if (confirmation.isConfirmed) {
      const result = await this.api.getMethod(`Master/DeleteProvince?ID=${id}`);
      
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

}
