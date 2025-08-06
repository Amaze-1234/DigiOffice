import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-overtime-details-form',
  imports: [SharedModule],
  templateUrl: './overtime-details-form.html',
  styleUrl: './overtime-details-form.css'
})
export class OvertimeDetailsForm {
  @Output() closeModal = new EventEmitter<any>();
  constructor(public modalservice: NgbModal){}

  submitForm(form: any) {
    if (!form.valid) {
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
