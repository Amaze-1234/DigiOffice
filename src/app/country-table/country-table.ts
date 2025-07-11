import { Component } from '@angular/core';
import { CountryForm } from '../country-form/country-form';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Api } from '../../Services/api';

@Component({
  selector: 'app-country-table',
  imports: [CountryForm],
  templateUrl: './country-table.html',
  styleUrl: './country-table.css'
})
export class CountryTable {
  editid: any;
  countryData: any;
  constructor(public api:Api, public router:Router,public modalservice:NgbModal){}


  ngOnInit() {
    this.getData();
  }

  async getData() {
    const result = await this.api.getMethod("Master/GetCountryTable");
    console.log("Country data:", result.data);
    this.countryData = result.data;
  }

  openModal(Modal: any,id:any =null ){
    if(id){
      this.editid=id;
    }   
      this.modalservice.open(Modal,{centered: true, size:"lg", backdrop:'static'});
    }
}
