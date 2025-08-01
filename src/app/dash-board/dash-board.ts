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

  constructor(public api: Api) { }

  ngOnInit() {
    this.getWorkType();
  }

  async getWorkType() {
    const result = await this.api.getMethod("Master/GetWorkType");
    this.worktype = result.data;
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
      const now = new Date();
      this.punchInTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      await Swal.fire({
        icon: 'success',
        title: 'Punched in Successfully!',
        text: 'Your Shift has been added.',
        timer: 2000,
        showConfirmButton: true
      });
    }
  }



}
