import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamShiftDetailsForm } from "../team-shift-details-form/team-shift-details-form";
import { Api } from '../../Services/api';

@Component({
  selector: 'app-team-shift-details',
  imports: [SharedModule, TeamShiftDetailsForm],
  templateUrl: './team-shift-details.html',
  styleUrl: './team-shift-details.css'
})
export class TeamShiftDetails {
  action: any;
  staffID: any;
  StaffShiftDetails: any;
  editID: any;
  constructor(public modal: NgbModal, public apiService: Api) { }
  ngOnInit(){
    this.getStaffShiftDetails();
    this.getStaffShiftDetailsByShiftEmployeeShiftType();
  }
  myShift() {
    this.action = 'myShift';
  }

  myTeamShift() {
    this.action = 'myTeamShift';
  }
  openModal(modal:any,id: any=null) {
     if (id) {
      this.editID = id;
    }
    console.log(this.editID);
    
    this.modal.open(modal, { centered: true, size: "lg", backdrop: "static" });
  }
  close(data: any = null) {
    this.editID = null;
    this.modal.dismissAll();

  }
async getStaffShiftDetails(){
  let result = await this.apiService.getMethod('Master/GetStaffShiftDetails')
  console.log(result.data);
  
}
async getStaffShiftDetailsByShiftEmployeeShiftType(){
  let result = await this.apiService.getMethod('Master/GetStaffShiftDetailsByShiftEmployeeShiftType');
  console.log(result.data);
  this.StaffShiftDetails = result.data;
  
}

}
