import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';

@Component({
  selector: 'app-team-shift-details',
  imports: [SharedModule],
  templateUrl: './team-shift-details.html',
  styleUrl: './team-shift-details.css'
})
export class TeamShiftDetails {
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
