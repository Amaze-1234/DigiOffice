import { Component, Input } from '@angular/core';
import { Api } from '../../Services/api';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-province-form',
  imports: [],
  templateUrl: './province-form.html',
  styleUrl: './province-form.css'
})
export class ProvinceForm {
  editid: any;
  contactForm: any;
  constructor(public api: Api,public router:Router,public activateRoute:ActivatedRoute ,public modalservice:NgbModal) {}
  ngOnInit() {
       if (this.editid) {
        this.getByID()
      }
      this.buildForm();
  }
 
   buildForm(){
    this.contactForm = new FormGroup({
      id: new FormControl(''),
      provinceName: new FormControl('', Validators.required),
      provinceDescription: new FormControl('', Validators.required),
    });
  }
  async getByID(){
    let response=await this.api.getMethod(`Master/GetCountryTableByID?ID=${this.editid}`);
    this.contactForm=new FormGroup({
      id :new FormControl(this.editid),
      provinceName: new FormControl(response.data[0].provinceName,Validators.required),
      provinceDescription:new FormControl(response.data[0].provinceDescription,Validators.required),
    })
  }

}
