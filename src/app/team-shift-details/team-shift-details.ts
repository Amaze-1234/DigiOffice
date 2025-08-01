import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamShiftDetailsForm } from "../team-shift-details-form/team-shift-details-form";

@Component({
  selector: 'app-team-shift-details',
  imports: [SharedModule, TeamShiftDetailsForm],
  templateUrl: './team-shift-details.html',
  styleUrl: './team-shift-details.css'
})
export class TeamShiftDetails {
action:any;
staffID:any;
constructor(public modal:NgbModal){}
myShift()
{
 this.action='myShift';
}

  myTeamShift()
  {
  this.action='myTeamShift';
  }
  openModal(id:any)
  {
       this.modal.open(id, { centered: true, size: "lg", backdrop: "static" });
  }
  close(id:any=null)
  {
   this.modal.dismissAll();

  }

}
