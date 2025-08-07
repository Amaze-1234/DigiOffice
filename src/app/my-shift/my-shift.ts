import { Component } from '@angular/core';
import { Loader } from '../../Services/loader';
import { Api } from '../../Services/api';
import { SharedModule } from '../../Shared/shared.module';

@Component({
  selector: 'app-my-shift',
  imports: [SharedModule,],
  templateUrl: './my-shift.html',
  styleUrl: './my-shift.css'
})
export class MyShift {
  staffID: any;
  myShiftDetails: any;
  constructor(public loaderService: Loader, public apiService: Api){
    
  }

  ngOnInit(){
    this.getStaffShiftDetailsByStaffID();
  }

  async getStaffShiftDetailsByStaffID(){
    this.staffID = this.loaderService.staffID;
    let result= await this.apiService.getMethod(`Master/GetStaffShiftDetailsByStaffID?StaffID=${this.staffID}`)
    console.log(result.data);
    
    this.myShiftDetails = result.data;
  }
 
}
