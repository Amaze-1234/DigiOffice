import { Component } from '@angular/core';
import { CountryForm } from '../country-form/country-form';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Api } from '../../Services/api';
import { SharedModule } from '../../Shared/shared.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-country-table',
  imports: [CountryForm, SharedModule],
  templateUrl: './country-table.html',
  styleUrl: './country-table.css'
})
export class CountryTable {
  editid: any;
  countryData: any;
  data: any;
  countryLength: any;
  searchText:any='';
  constructor(public api:Api, public router:Router,public modalservice:NgbModal){}
  ngOnInit() {
    this.getData();
  }

  async getData() {
    const result = await this.api.getMethod("Master/GetCountryTable");
    console.log( result.data);
    this.countryData = result.data;
    // this.countryLength = this.countryData.length;
  }

  openModal(Modal: any,id:any =null ){
    if(id){
      this.editid=id;
    }   
      this.modalservice.open(Modal,{centered: true, size:"lg", backdrop:'static'});
  }
  close(type:any=null){
    this.editid = null;
    this.modalservice.dismissAll();
    if (type == 'save' || type == 'update') {
      this.getData();
    }
  }
  async deleteCountry(id: any) {
    const confirmation = await Swal.fire({
      title: "Are you sure you want to delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#808080",
      confirmButtonText: "Yes"
    });
    if (confirmation.isConfirmed) {
      const result = await this.api.getMethod(`Master/DeleteCountryTable?ID=${id}`);     
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
