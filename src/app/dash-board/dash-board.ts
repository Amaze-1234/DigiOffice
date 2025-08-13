import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { Api } from '../../Services/api';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Loader } from '../../Services/loader';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-dash-board',
  imports: [SharedModule],
  templateUrl: './dash-board.html',
  styleUrl: './dash-board.css'
})
export class DashBoard {
  staffID: any;
  dashboardData: any;
  worktype: any;
  selectedWorkType: any = null;
  punchInTime: any;
  punchOutTime: any;
  currentDate: any;

  currentTime: any;
  apiservice: any;
  shiftForm: any;
  closemodal: any;
  signInTime: any;
  signOutTime: any;
  entity: any;
  ID: any;

  signInDate: any;


  constructor(public api: Api, public loader: Loader) {

  }



  ngOnInit() {
    this.getDateTime();
    //this.getAttendanceDetails();

  }

  async getDateTime() {
    let currentDateTime = await this.api.getMethod('Master/GetDateTime');
    this.currentDate = currentDateTime.data[0].date;
    console.log(this.currentDate, typeof (this.currentDate));
    this.currentTime = currentDateTime.data[0].formattedTime;

    this.staffID = Number(this.loader.staffID);
    const response = await this.api.getMethod(`Master/GetAttendanceDetailsStaffByStaffID?StaffID=${this.staffID}`);
    console.log(response.data[response.data.length - 1]);
    let details = response.data[response.data.length - 1];
    console.log(formatDate(details.signInDate, 'dd-MM-yyyy', 'en-US'), typeof (formatDate(details.signInDate, 'dd-MM-yyyy', 'en-US')));

    if (formatDate(details.signInDate, 'dd-MM-yyyy', 'en-US') ==
      this.currentDate) {
      this.punchInTime = response.data[response.data.length - 1].signInTime;
      this.punchOutTime = response.data[response.data.length - 1].signOutTime;
    }

    console.log(this.punchInTime);
    console.log(this.punchOutTime);

  }

  // async getAttendanceDetails() {
  //   this.staffID = Number(this.loader.staffID);
  //   const response = await this.api.getMethod(`Master/GetAttendanceDetailsStaffByStaffID?StaffID=${this.staffID}`);
  //   console.log(response.data[response.data.length - 1]);
  //   let details = response.data[response.data.length - 1];
  //   console.log(formatDate(details.signInDate, 'dd-MM-yyyy', 'en-US'),typeof (formatDate(details.signInDate, 'dd-MM-yyyy', 'en-US')));

  //   if(formatDate(details.signInDate, 'dd-MM-yyyy', 'en-US') ==
  //   this.currentDate) {
  //   this.punchInTime = response.data[response.data.length - 1].signInTime;
  //   this.punchOutTime = response.data[response.data.length - 1].signOutTime;
  //   }

  //   console.log(this.punchInTime);
  //   console.log(this.punchOutTime);

  // }

  async confirmPunchIn() {

    console.log(this.staffID);

    let attendanceData = await this.api.getMethod(`Master/GetStaffShiftDetailsForAttendance?StaffID=${this.staffID}`);
    console.log(attendanceData.data?.[0]);
    const today = new Date();
    const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
    console.log(dayName, typeof(dayName));
    console.log(attendanceData.data?.[0]?.restDaysValue, typeof(attendanceData.data?.[0]?.restDaysValue));
    
    if (!(attendanceData.data?.[0]?.startDate) && (attendanceData.data?.[0]?.restDaysValue != dayName) ) {
      Swal.fire({

        text: "Shift is not assigned for you today",
        icon: "warning"
      })
      return;
    }

    this.entity = {
      StaffID: this.staffID
    }
    console.log(this.entity);

    let result = await this.api.postMethod("Master/InsertAttendanceDetailsStaff", this.entity);
    console.log(result.data, typeof (result.data));
    //this.ID = result.data;
    this.punchInTime = this.currentTime;


    if (result.data > 0) {
      Swal.fire({
        icon: 'success',
        title: 'Punched in Successfully!',
        text: 'Your Shift has been added.',
        timer: 2000,
        showConfirmButton: true
      });
    }
  }

  async confirmPunchOut() {

    this.entity = {
      StaffID: this.staffID
    }
    console.log(this.entity);

    let result = await this.api.postMethod("Master/UpdateAttendanceDetailsStaff", this.entity);
    console.log(result.data, typeof (result.data));
    this.punchOutTime = this.currentTime;

    if (result.data > 0) {
      Swal.fire({
        icon: 'success',
        title: 'Punched out Successfully!',
        timer: 2000,
        showConfirmButton: true
      });
    }
  }

}
