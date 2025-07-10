import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../Shared/shared.module';

@Component({
  selector: 'app-side-bar',
  imports: [SharedModule],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css'
})
export class SideBar {

  constructor(public router:Router){

  }

  navigateDepartment(){
    this.router.navigate(['/department-table']);
  }
  navigateUnit(){
     this.router.navigate(['/unit-table']);
  }
  navigateJobLevelType(){
    this.router.navigate(['/jobleveltypetable']);
  }
  navigateShift(){
    this.router.navigate(['/shift-table']);
  }
  navigateLoanType(){
    this.router.navigate(['/loantypetable']);
  }
  navigateCountry(){
    this.router.navigate(['/countrytable']);
  }
  navigateProvince(){
    this.router.navigate(['/provincetable']);
  }
  navigateCity(){
    this.router.navigate(['/citytable']);
  }
}
