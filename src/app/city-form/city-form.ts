import { Component, EventEmitter, Input, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { SharedModule } from '../../Shared/shared.module';
import { Api } from '../../Services/api';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-city-form',
  imports: [SharedModule],
  templateUrl: './city-form.html',
  styleUrl: './city-form.css',
  inputs: ['editid'],
  outputs: ['closemodal']
})
export class CityForm {

  editid: any;
  closemodal = new EventEmitter<any>();
  contactForm: any;
  provinceData: any;
  countryData: any;
  countryID: any;
  ID: any;
  newone: any;





  constructor(public apiService: Api, public router: Router, public activateRoute: ActivatedRoute, public modelService: NgbModal) {


  }
  ngOnInit() {
    this.buildForm();
    if (this.editid) {

      this.getByID()
      console.log(this.editid);

    }
    this.getCountry();
  }


  buildForm() {

    this.contactForm = new FormGroup({
      ID: new FormControl(''),
      CountryID: new FormControl('', Validators.required),
      ProvinceID: new FormControl('', Validators.required),
      City: new FormControl('', Validators.required),
      Description: new FormControl('', Validators.required)

    });

  }

  async onChange(even: any) {
    debugger;
    let result = await this.apiService.getMethod(`Master/GetProvinceByCountryID?ID=${even.target.value}`);
    this.provinceData = result.data;
  }

  async getByID() {
    debugger;
    let response = await this.apiService.getMethod(`Master/GetCityByID?ID=${this.editid}`);
    console.log(response)

    this.contactForm = new FormGroup({
      ID: new FormControl(this.editid),
      CountryID: new FormControl(response.data[0]?.countryID, Validators.required),
      ProvinceID: new FormControl(response.data[0]?.provinceID, Validators.required),
      City: new FormControl(response.data[0]?.city, Validators.required),
      Description: new FormControl(response.data[0]?.description, Validators.required)

    });

  }



  async getCountry() {
    let result = await this.apiService.getMethod('Master/GetCountryTable');
    this.countryData = result.data;

  }




  async submit(type: any) {

    if (type == 'save') {
      let result = await this.apiService.postMethod('Master/InsertCity', this.contactForm.value);
      console.log(result.data)

      if (result.data > 0) {
        Swal.fire("Data Saved Successfully");
        this.closemodal.emit('save');

      }
    }
    else {

      let result = await this.apiService.postMethod('Master/UpdateCity', this.contactForm.value);

      if (result.data > 0) {
        Swal.fire("Data Updated Successfully");
        this.closemodal.emit('update');

      }
    }
  }
}
