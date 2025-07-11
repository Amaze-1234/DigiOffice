import { Component } from '@angular/core';
import { CityForm } from "../city-form/city-form";
import { SharedModule } from '../../Shared/shared.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Api } from '../../Services/api';

@Component({
  selector: 'app-city-table',
  imports: [CityForm,SharedModule],
  templateUrl: './city-table.html',
  styleUrl: './city-table.css'
})
export class CityTable {

  editid:any;
  CityData: any;

  constructor(public modelService:NgbModal,public apiService:Api){

  }


  openModel(Modal:any,id:any=null){
     if (id) {
      this.editid = id;
    }
    this.modelService.open(Modal, { centered: true, size: 'lg', backdrop: "static", scrollable: true });

  }
  close(type:any){
    this.editid = null;
    this.modelService.dismissAll();
    if (type == 'save' || type == 'update') {
      this.getCity();
    }
  }

  async deleteCity(id:any){
    let result = await this.apiService.getMethod(`Master/DeleteCity?ID=${id}`);
    if (result.data > 0) {
      this.getCity();
    }
  }
   async getCity() {
    let result = await this.apiService.getMethod('Master/GetCity');
    this.CityData = result.data;

  }
}
