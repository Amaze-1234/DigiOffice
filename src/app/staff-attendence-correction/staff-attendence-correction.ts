import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../Shared/shared.module';
import { AttendenceCorrectionForm } from "../attendence-correction-form/attendence-correction-form";

@Component({
  selector: 'app-staff-attendence-correction',
  imports: [SharedModule, AttendenceCorrectionForm],
  templateUrl: './staff-attendence-correction.html',
  styleUrl: './staff-attendence-correction.css'
})
export class StaffAttendenceCorrection {

  
  editid:any;
  selectedTab: any = 'pending';
 


  constructor(public modelService:NgbModal){

  }

  

  selectTab(tab: any) {
    this.selectedTab = tab;
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
