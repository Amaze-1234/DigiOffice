import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-overtime-details-form',
  imports: [SharedModule],
  templateUrl: './overtime-details-form.html',
  styleUrl: './overtime-details-form.css'
})
export class OvertimeDetailsForm {
  contactForm: any;
  @Output() closeModal = new EventEmitter<any>();
  constructor(public modalservice: NgbModal){}
  ngOnInit(){
    this.buildForm();
  }

  buildForm(){
    this.contactForm = new FormGroup({
      // ID: new FormControl(''),
      DateRequest: new FormControl('', Validators.required),
      StartHour: new FormControl('', Validators.required),
      StartMinute: new FormControl('', Validators.required),
      EndHour: new FormControl('', Validators.required),
      EndMinute: new FormControl('', Validators.required),
      Document: new FormControl('', Validators.required),
      Purpose: new FormControl('', Validators.required),
    });
  }

  submitForm() {
    if (this.contactForm.invalid) {
      Swal.fire({
        text: 'Please Fill All Details'
      });
      return;
    } else {
      Swal.fire({
        text: 'Data Successfully Added'
      });
    }
  }

   openOTDetailsModal(Modal: any, id: any = null) {
    this.modalservice.open(Modal, { centered: true, size: "lg", backdrop: "static" });
  }
}
