import { Component, EventEmitter } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../Shared/shared.module';

@Component({
  selector: 'app-attendence-correction-form',
  imports: [SharedModule],
  templateUrl: './attendence-correction-form.html',
  styleUrl: './attendence-correction-form.css'
})
export class AttendenceCorrectionForm {
  editid: any;
  closemodal = new EventEmitter<any>();
  contactForm: any;

  constructor(public modelService: NgbModal) {

  }
  ngOnInit(){
    this.buildForm();
  }

  buildForm() {

    this.contactForm = new FormGroup({
      ID: new FormControl(''),
      Date: new FormControl('', Validators.required),
      StartTime: new FormControl('', Validators.required),
      EndTime: new FormControl('', Validators.required),
      WorkType: new FormControl('', Validators.required),
      Comments: new FormControl('', Validators.required)

    });

  }
  submit() {

  }
}
