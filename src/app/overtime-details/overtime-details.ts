import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { OvertimeDetailsForm } from "../overtime-details-form/overtime-details-form";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-overtime-details',
  imports: [SharedModule, OvertimeDetailsForm],
  templateUrl: './overtime-details.html',
  styleUrl: './overtime-details.css'
})
export class OvertimeDetails {
  constructor(public modalservice: NgbModal) { }
  selectedTab: any;
  isMyOvertimeDetails: any;
  otDetailsForm: any;
  selectTab(tab: any) {
    this.selectedTab = tab;
  }
  overtimeDeatils(overtime: any) {
    this.isMyOvertimeDetails = overtime;
  }

  openModal(Modal: any, id: any = null) {
    this.modalservice.open(Modal, { centered: true, size: "lg", backdrop: "static" })
  }

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
  openOTDetailsModal(Modal: any, id: any = null) {
    this.modalservice.open(Modal, { centered: true, size: "lg", backdrop: "static" });
  }

}
