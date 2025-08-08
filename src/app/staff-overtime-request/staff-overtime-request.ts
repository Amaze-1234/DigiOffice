import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../Shared/shared.module';
import { OvertimeDetailsForm } from "../overtime-details-form/overtime-details-form";

@Component({
  selector: 'app-staff-overtime-request',
  imports: [SharedModule, OvertimeDetailsForm],
  templateUrl: './staff-overtime-request.html',
  styleUrl: './staff-overtime-request.css'
})
export class StaffOvertimeRequest {

  constructor(public modalservice: NgbModal) { }
  selectedTab: any='pending';
  selectedOT:any='preaprove';

  otDetailsForm: any;
  contactForm:any;

  selectTab(tab: any) {
    this.selectedTab = tab;
  }
  ngOnInit(){

  }

  selectOT(tab: any) {
    this.selectedOT = tab;
  }
 
  

  openModal(Modal: any, id: any = null) {
    this.modalservice.open(Modal, { centered: true, size: "lg", backdrop: "static" })
  }



}
