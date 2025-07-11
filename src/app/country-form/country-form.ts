import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from '../../Services/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-country-form',
  imports: [SharedModule],
  templateUrl: './country-form.html',
  styleUrl: './country-form.css'
})
export class CountryForm {
  editid: any;
  contactForm:any;
  constructor(public api: Api,public router:Router,public activateRoute:ActivatedRoute) {}
  ngOnInit() {
    
       if (this.editid) {
        this.getByID()
      }
      this.buildForm();
  }
 
   buildForm(){
    this.contactForm = new FormGroup({
      id: new FormControl(''),
      countryName: new FormControl('', Validators.required),
      countryDescription: new FormControl('', Validators.required),
    });
  }
  async getByID(){
    let response=await this.api.getMethod(`Master/GetCountryTableByID?ID=${this.editid}`);
    this.contactForm=new FormGroup({
      id :new FormControl(this.editid),
      countryName: new FormControl(response.data[0].countryName,Validators.required),
      countryDescription:new FormControl(response.data[0].countryDescription,Validators.required),
    })
  }


}
