import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-leave-request',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './leave-request.html',
  styleUrls: ['./leave-request.css'] 
})
export class LeaveRequest  {   

  leaveDetails: boolean = true;
  calendarList: boolean = true;
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
