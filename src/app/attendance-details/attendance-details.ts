import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { Api } from '../../Services/api';
import { Loader } from '../../Services/loader';

@Component({
  selector: 'app-attendance-details',
  imports: [SharedModule],
  templateUrl: './attendance-details.html',
  styleUrl: './attendance-details.css'
})
export class AttendanceDetails implements OnInit {
attendanceDetails:any;
 searchText:any='';
  staffID: any;
  myAttendanceDetails: any;
  constructor(public apiservice: Api,public loader:Loader) { }
  ngOnInit() {
    this.getData();

  }
  async getData(){
    const result=await this.apiservice.getMethod("Master/GetAttendanceDetailsStaff");
    this.attendanceDetails=result.data;
    console.log(this.attendanceDetails);
  }

  async getAttendanceDetailsStaff(){
    this.staffID = this.loader.staffID;
    let result = await this.apiservice.getMethod('Master/GetAttendanceDetailsStaffByStaffID?StaffID=${this.StaffID}')
    this.myAttendanceDetails = result.data;
  }
}
