import { Component, EventEmitter } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-holiday-form',
  imports: [SharedModule],
  templateUrl: './holiday-form.html',
  styleUrl: './holiday-form.css'
})
export class HolidayForm {

  editid: any;
  closemodal = new EventEmitter<any>();
  contactForm:any;

  constructor(public modelService:NgbModal){

  }

  ngOnInit(){
    this.buildForm();
  }


   buildForm() {

    this.contactForm = new FormGroup({
      ID: new FormControl(''),
      HolidayType: new FormControl('', Validators.required),
      Holiday: new FormControl('', Validators.required),
      HolidayDate: new FormControl('', Validators.required),
      Attachment: new FormControl('', Validators.required),
      HolidayDescription: new FormControl('', Validators.required)

    });

  }
  submit(){

  }
}
