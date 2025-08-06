import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { CityForm } from "../city-form/city-form";
import { AttendenceCorrectionForm } from "../attendence-correction-form/attendence-correction-form";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-attendence-correction',
  imports: [SharedModule, AttendenceCorrectionForm],
  templateUrl: './attendence-correction.html',
  styleUrl: './attendence-correction.css'
})
export class AttendenceCorrection {

  editid:any;
  selectedTab: any = 'pending';
  teamSelectedTab: any = 'pending';
  isMyAttendenceType: any = true;

  constructor(public modelService:NgbModal){

  }

  AttendenceType(even: any) {
    this.isMyAttendenceType = even;
  }

  selectTab(tab: any) {
    this.selectedTab = tab;
  }


  teamselectTab(tab: any) {
    this.teamSelectedTab = tab;
  }
  
  openModel(Modal:any,id:any=null){
    
     if (id) {
      this.editid = id;
    }
      this.modelService.open(Modal,{centered: true, size:"lg", backdrop:'static',scrollable:true});

  }

  close(type:any){
    debugger
    this.editid = null;
    this.modelService.dismissAll();
   
  }
}
