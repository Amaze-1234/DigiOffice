import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Api } from '../../Services/api';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { SharedModule } from '../../Shared/shared.module';

@Component({
  selector: 'app-province-form',
  imports: [SharedModule],
  templateUrl: './province-form.html',
  styleUrl: './province-form.css'
})
export class ProvinceForm {
  @Input() editid: any;
  @Output() closeModal= new EventEmitter<any>();
  contactForm: any;
   countryList:any=[
    {
      ID:1,
      value:"India"
    },
    {
      ID:2,
      value:"Africa"
    },
    {
      ID:3,
      value:"Srilanka"
    },
    {
      ID:4,
      value:"France"
    }]

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

  async submit( type:any){
      if (this.contactForm.invalid) {
      Swal.fire({
        text: 'Please fill all the details'
      });
      return;
    }
  
      if (type == 'save') {
        let result = await this.api.postMethod('Master/InsertProvince', this.contactForm.value);
        if (result.data > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Saved Successfully',
          });
        }
      } else {
        let result = await this.api.postMethod('Master/UpdateProvince', this.contactForm.value);
        if (result.data > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Updated Successfully',
          });
        }
      }
    }



}
