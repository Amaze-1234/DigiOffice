import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { HolidayForm } from "../holiday-form/holiday-form";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-holiday',
  imports: [SharedModule, HolidayForm],
  templateUrl: './holiday.html',
  styleUrl: './holiday.css'
})
export class Holiday {

  editid:any;

  selectedTab:any='Upcoming';

  constructor(public modelService:NgbModal){

  }

  selectTab(tab: any) {
    this.selectedTab = tab;
  }

  openModel(Modal:any,id:any=null){
    
     if (id) {
      this.editid = id;
    }
      this.modelService.open(Modal,{centered: true, size:"xl", backdrop:'static',scrollable:true});

  }
  close(even:any){

  }
}
