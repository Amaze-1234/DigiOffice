import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';

@Component({
  selector: 'app-teamleave-details',
  imports: [SharedModule],
  templateUrl: './teamleave-details.html',
  styleUrl: './teamleave-details.css'
})
export class TeamleaveDetails {
calendarList:boolean=true;
leaveDetails:boolean=false;
approval: string = 'pending'; 
constructor(){}
}
