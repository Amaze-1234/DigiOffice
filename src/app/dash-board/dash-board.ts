import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { Api } from '../../Services/api';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Loader } from '../../Services/loader';

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
  selectedWorkType: any;
  punchInTime: any;
  punchOutTime:any;
  currentDateTime: any;

  currentTime: Date = new Date();
  apiservice: any;
  shiftForm: any;
  closemodal: any;
  signInTime: any;
  signOutTime: any;
  entity: any;
  ID: any;


  constructor(public api: Api, public loader: Loader) {

  }



  ngOnInit() {
  setInterval(() => {
    this.currentTime = new Date();
  }, 1000);

  const storedPunchIn = localStorage.getItem('punchInTime');
  const storedPunchOut = localStorage.getItem('punchOutTime');
  const storedWorkType = localStorage.getItem('selectedWorkType');

  if (storedPunchIn) {
    this.punchInTime = storedPunchIn;
  }

  if (storedPunchOut) {
    this.punchOutTime = storedPunchOut;
  }

  if (storedWorkType) {
    this.selectedWorkType = storedWorkType;
  }
}





  async confirmPunchIn() {
  
    this.staffID = Number(this.loader.staffID);
    console.log(this.staffID);

    this.entity = {
      StaffID: this.staffID
    }
    console.log(this.entity);

    let result = await this.api.postMethod("Master/InsertAttendanceDetailsStaff", this.entity);
    console.log(result.data, typeof (result.data));
    this.ID = result.data;

    let response = await this.api.getMethod(`Master/GetAttendanceDetailsStaffByID?ID=${result.data}`)
    console.log(response.data);
this.punchInTime = response.data[0].signInTime;
localStorage.setItem('selectedWorkType', this.selectedWorkType);
localStorage.setItem('punchInTime', this.punchInTime);
    console.log(this.punchInTime);

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
        ID: this.ID
      }
      console.log(this.entity);

      let result = await this.api.postMethod("Master/UpdateAttendanceDetailsStaff", this.entity);
      console.log(result.data, typeof (result.data));

       let response = await this.api.getMethod(`Master/GetAttendanceDetailsStaffByID?ID=${result.data}`)
    console.log(response.data);

this.punchOutTime = response.data[0].signOutTime;
localStorage.setItem('punchOutTime', this.punchOutTime);
    console.log(this.punchInTime);
    
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
