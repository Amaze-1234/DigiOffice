import { Component } from '@angular/core';
import { CityForm } from "../city-form/city-form";
import { SharedModule } from '../../Shared/shared.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Api } from '../../Services/api';
import Swal from 'sweetalert2';

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
  ngOnInit(){
    this.getCity();
  }
 

  openModel(Modal:any,id:any=null){
    
     if (id) {
      this.editid = id;
    }
      this.modelService.open(Modal,{centered: true, size:"lg", backdrop:'static'});

  }
  close(type:any){
    debugger
    this.editid = null;
    this.modelService.dismissAll();
    if (type == 'save' || type == 'update') {
      this.getCity();
    }
  }

  async deleteCity(id:any){
   
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
     let response = await this.apiService.getMethod(`Master/DeleteCity?ID=${id}`);
    if (response.data > 0) {
      this.getCity();
    }
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
  }
   async getCity() {
    let result = await this.apiService.getMethod('Master/GetCity');
    this.CityData = result.data;
    console.log(result.status);

  }
  
}
