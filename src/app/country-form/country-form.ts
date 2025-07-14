import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from '../../Services/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-country-form',
  imports: [SharedModule],
  templateUrl: './country-form.html',
  styleUrl: './country-form.css',
  inputs:['editid'],
  outputs: ['closemodal']
})
export class CountryForm {
  @Input() editid: any;
  contactForm: any;
  testvaraible:any;
  @Output() closeModal = new EventEmitter<any>();
  constructor(public api: Api, public router: Router, public activateRoute: ActivatedRoute, public modalservice: NgbModal) { }
  ngOnInit() {

    if (this.editid) {
      this.getByID();
    }
    this.buildForm();
  }

  buildForm() {
    this.contactForm = new FormGroup({
      id: new FormControl(''),
      countryName: new FormControl('', Validators.required),
      countryDescription: new FormControl('', Validators.required),
    });
  }
  async getByID() {
    let response = await this.api.getMethod(`Master/GetCountryTableByID?ID=${this.editid}`);
    this.contactForm = new FormGroup({
      id: new FormControl(this.editid),
      countryName: new FormControl(response.data[0].countryName, Validators.required),
      countryDescription: new FormControl(response.data[0].countryDescription, Validators.required),
    })
  }

  async submit(type: any) {
    debugger
    if (this.contactForm.invalid) {
      Swal.fire({
        text: 'Please fill all the details'
      });
      return;
    }

    if (type == 'save') {
      let result = await this.api.postMethod('Master/InsertCountryTable', this.contactForm.value);


      if (result.data > 0) {
        this.closeModal.emit("save");
        Swal.fire({
          icon: 'success',
          title: 'Saved Successfully',
        });
      }
    } else {
      let result = await this.api.postMethod('Master/UpdateCountryTable', this.contactForm.value);
      if (result.data > 0) {
        this.closeModal.emit("update")
        Swal.fire({
          icon: 'success',
          title: 'Updated Successfully',
        });
      }
    }
  }


}
