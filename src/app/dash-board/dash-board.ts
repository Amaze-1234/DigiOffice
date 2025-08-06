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
  selectedWorkType: string = '';
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
  }




  async confirmPunchIn() {
    // const result = await Swal.fire({
    //   title: 'Are you sure?',
    //   text: 'There Is No Shift For You On 08-01-2025\nWould You Like TO Continue with the Default Shift From 10:00 to 19:00',
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#007bff',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, Continue',
    //   cancelButtonText: 'Cancel'
    // });

    // if (result.isConfirmed) {
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
    //}
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
