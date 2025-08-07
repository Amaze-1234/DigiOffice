import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-staff-leave-request',
  imports: [SharedModule,CommonModule],
  templateUrl: './staff-leave-request.html',
  styleUrl: './staff-leave-request.css'
})
export class StaffLeaveRequest {
 
  calendarList: boolean = false;
  approval: string = 'pending';
  leaves = ['Maternity Leave', 'Paternity Leave', 'Sick Leave', 'Emergency Leave', 'Vocation Leave', 'Loss Of Pay'];

  constructor(public modalService: NgbModal) {}

  openModal(modal: any) {
    debugger;
   
    this.modalService.open(modal, {
      centered: true,
      size: "lg",
      backdrop: "static",
      scrollable: true
    });
  }
  close(data: any = null) {
    debugger;

    this.modalService.dismissAll();
   
  }


}
