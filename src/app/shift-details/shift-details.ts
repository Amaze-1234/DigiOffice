import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { TeamShiftDetails } from "../team-shift-details/team-shift-details";
import { MyShift } from '../my-shift/my-shift';

@Component({
  selector: 'app-shift-details',
  imports: [SharedModule, TeamShiftDetails,MyShift],
  templateUrl: './shift-details.html',
  styleUrl: './shift-details.css'
})
export class ShiftDetails {
action:any ='myShift';

myShift()
{
 this.action='myShift';
}

  myTeamShift()
  {
  this.action='myTeamShift';
  }

}
