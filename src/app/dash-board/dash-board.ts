import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { Api } from '../../Services/api';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dash-board',
  imports: [SharedModule],
  templateUrl: './dash-board.html',
  styleUrl: './dash-board.css'
})
export class DashBoard {
  worktype: any;
  selectedWorkType: any;
  punchInTime: any;
  punchOutTime: any;
  currentDateTime: any;

  currentTime: any;

  constructor(public api: Api) { }

  ngOnInit() {


    this.getWorkType();
    this.getDateTime();
      //     setInterval(() => {
      //   this.currentTime = new Date(this.currentTime.getTime() + 1000); 
      // }, 1000);

  }
  

  async getWorkType() {
    const result = await this.api.getMethod("Master/GetWorkType");
    this.worktype = result.data;
  }
  async getDateTime() {
    const result = await this.api.getMethod("Master/GetDateTime");
    this.currentDateTime = result.data[0];

    console.log(this.currentDateTime);
    this.currentTime = new Date(this.currentDateTime.currentTime);
    console.log(this.currentTime);

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
      const timeResult = await this.api.getMethod("Master/GetDateTime");
  this.punchInTime = new Date(timeResult.data[0].currentTime);
      
      

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
      const timeResult = await this.api.getMethod("Master/GetDateTime");
  this.punchOutTime = new Date(timeResult.data[0].currentTime);
    }

  }



}
