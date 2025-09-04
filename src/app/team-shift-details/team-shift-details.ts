import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamShiftDetailsForm } from "../team-shift-details-form/team-shift-details-form";
import { Api } from '../../Services/api';
import { Loader } from '../../Services/loader';
import Swal from 'sweetalert2';

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
  constructor(public modal: NgbModal, public apiService: Api, public loaderService: Loader) { }
  ngOnInit() {
    // this.getStaffShiftDetails();
    this.getTeamShiftDetailsUnderManager();
  }
  myShift() {
    this.action = 'myShift';
  }

  myTeamShift() {
    this.action = 'myTeamShift';
  }
  openModal(modal: any, id: any = null) {
    if (id) {
      this.editID = id;
    }
    console.log(this.editID);

    this.modal.open(modal, { centered: true, size: "lg", backdrop: "static" });
  }
  close(data: any = null) {
    this.editID = null;
    this.modal.dismissAll();
    if (data == 'save' || data == 'update') {
      this.getTeamShiftDetailsUnderManager();
    }

  }
  // async getStaffShiftDetails(){
  //   let result = await this.apiService.getMethod('Master/GetStaffShiftDetails')
  //   console.log(result.data);

  // }
  async getTeamShiftDetailsUnderManager() {
    this.staffID = this.loaderService.staffID;
    let result = await this.apiService.getMethod(`Master/GetTeamShiftDetailsUnderManager?StaffID=${this.staffID}`);
    console.log(result.data);
    this.StaffShiftDetails = result.data;

  }

  async deleteDetails(id:any)
{
  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then(async (result) => {
  if (result.isConfirmed) {
     const result =await this.apiService.getMethod(`Master/DeleteStaffShiftDetails?ID=${id}`);
  if(result.data>0)
    Swal.fire("Shift deleted successfully");
    this.getTeamShiftDetailsUnderManager();
  }
});
}

}
