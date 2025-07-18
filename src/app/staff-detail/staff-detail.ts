import { Component } from '@angular/core';
import { StaffNavbar } from "../staff-navbar/staff-navbar";
import { EmployeeDetails } from "../employee-details/employee-details";
import { PositionDetails } from "../position-details/position-details";
import { SharedModule } from '../../Shared/shared.module';
import { Loader } from '../../Services/loader';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-staff-detail',
  imports: [StaffNavbar, EmployeeDetails, PositionDetails,SharedModule],
  templateUrl: './staff-detail.html',
  styleUrl: './staff-detail.css'
})
export class StaffDetail {
  editid:any;

  constructor(public loaderService:Loader, public activateRoute:ActivatedRoute){
     this.activateRoute.params.subscribe(parms => {
      debugger
      this.editid = parms['id'];

    })

  }
  ngOnInit(){
    
    this.activateRoute.params.subscribe(parms=> {
      debugger
      this.editid = parms['id'];
    })
  }
}
