import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { OvertimeDetailsForm } from "../overtime-details-form/overtime-details-form";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  contactForm:any;

  selectTab(tab: any) {
    this.selectedTab = tab;
  }
  ngOnInit(){

  }

 
  overtimeDeatils(overtime: any) {
    this.isMyOvertimeDetails = overtime;
  }

  openModal(Modal: any, id: any = null) {
    this.modalservice.open(Modal, { centered: true, size: "lg", backdrop: "static" })
  }

  // openOTDetailsModal(Modal: any, id: any = null) {
  //   this.modalservice.open(Modal, { centered: true, size: "lg", backdrop: "static" });
  // }

}
