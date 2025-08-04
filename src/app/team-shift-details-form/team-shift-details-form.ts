import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Api } from '../../Services/api';
import { Loader } from '../../Services/loader';
import { SharedModule } from '../../Shared/shared.module';

@Component({
  selector: 'app-team-shift-details-form',
  imports: [ReactiveFormsModule,SharedModule],
  templateUrl: './team-shift-details-form.html',
  styleUrl: './team-shift-details-form.css'
})
export class TeamShiftDetailsForm {
  shiftDetails:any;
  staffID:any;
  constructor(public api:Api,public loader:Loader){}
  ngOnInit()
  {
   this.getStaffDetails()
  }
   async getStaffDetails()
  {
    this.staffID= parseInt(this.loader.staffID);
    console.log(typeof(this.staffID) ,this.staffID)
    const result =await this.api.getMethod(`Master/GetStaffDetailsJoinShift?ID=${this.staffID}`)
    this.shiftDetails=result.data;
    console.log(this.shiftDetails)
  }

}
