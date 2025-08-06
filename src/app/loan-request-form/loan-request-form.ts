import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loan-request-form',
  imports: [SharedModule],
  templateUrl: './loan-request-form.html',
  styleUrl: './loan-request-form.css'
})
export class LoanRequestForm {
  contactForm: any;
  constructor() { }
  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.contactForm = new FormGroup({
      LoanType: new FormControl('', Validators.required),
      LoanAmount: new FormControl('', Validators.required),
      PayPeriod: new FormControl('', Validators.required),
      Comments: new FormControl('', Validators.required)
    })
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

}
