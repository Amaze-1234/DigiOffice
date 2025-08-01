import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { TeamShiftDetails } from "../team-shift-details/team-shift-details";

@Component({
  selector: 'app-shift-details',
  imports: [SharedModule, TeamShiftDetails],
  templateUrl: './shift-details.html',
  styleUrl: './shift-details.css'
})
export class ShiftDetails {
action:any;

myShift()
{
 this.action='myShift';
}

  myTeamShift()
  {
  this.action='myTeamShift';
  }

}
