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
  staff: any;
  dashboardData:any;
  worktype: any;
 selectedWorkType: string = '';
  punchInTime: Date | null = null;
  punchOutTime: Date | null = null;
  currentDateTime: any;

 currentTime: Date = new Date();
  apiservice: any;
  shiftForm: any;
  closemodal: any;
  signInTime:any;
    signOutTime:any;
    entity: any;



  constructor(public api: Api,public loader:Loader) {
    
  }
 


  ngOnInit(){
    this.buildForm();
    setInterval(() => {
      this.currentTime= new Date();
    }, 1000);
  }


  buildForm() {
    this. dashboardData = new FormGroup({
      id: new FormControl(''),
    staffID: new FormControl('',Validators.required),
      signInTime: new FormControl(''),
      signOutTime: new FormControl('')


    })
  }

    
 
  async confirmPunchIn() {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'There Is No Shift For You On 08-01-2025\nWould You Like TO Continue with the Default Shift From 10:00 to 19:00',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#007bff',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Continue',
      cancelButtonText: 'Cancel'
    });

    if (result.isConfirmed) {
      this.punchInTime = new Date();
      this.staff = this.loader.staffID;
      console.log(this.staff);
      // this.signInTime = new Date(timeResult.data[0].punchInTime);
 
      const timeResult = await this.api.postMethod("Master/InsertAttendanceDetailsStaff", this.dashboardData.value);
      this.entity={
        staffID: this.staff,
        // signInTime: new Date(timeResult.data[0].punchInTime),

      }
  this.signInTime = new Date(timeResult.data[0].punchInTime);
 

      await Swal.fire({
        icon: 'success',
        title: 'Punched in Successfully!',
        text: 'Your Shift has been added.',
        timer: 2000,
        showConfirmButton: true
      });
    }
  }

  async confirmPunchOut() {
    const result = await Swal.fire({
      title: 'Punched Out Successfully'
    });
    if (result.isConfirmed) {
        this.punchOutTime = new Date();
             this.staff = this.loader.staffID;
      console.log(this.staff);
      const timeResult = await this.api.postMethod("Master/UpdateAttendanceDetailsStaff",this.dashboardData.value);
      
  this.signOutTime= new Date(timeResult.data[0].punchOutTime);
    }

  }

 


}
