import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { Api } from '../../Services/api';

@Component({
  selector: 'app-attendance-details',
  imports: [SharedModule],
  templateUrl: './attendance-details.html',
  styleUrl: './attendance-details.css'
})
export class AttendanceDetails implements OnInit {
attendanceDetails:any;
  constructor(public apiservice: Api) { }
  ngOnInit() {
    this.getData();

  }
  async getData(){
    const result=await this.apiservice.getMethod("Master/GetAttendanceDetailsStaff");
    this.attendanceDetails=result.data;
    console.log(this.attendanceDetails);
  }
}
