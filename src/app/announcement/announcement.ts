import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { AnnouncementForm } from "../announcement-form/announcement-form";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-announcement',
  imports: [SharedModule, AnnouncementForm],
  templateUrl: './announcement.html',
  styleUrl: './announcement.css'
})
export class Announcement {
  selectedTab: any;
  constructor(public modalservice:NgbModal){}
  ngOnInit(){
    
  }
    selectTab(tab: any){
    this.selectedTab = tab;
  }

  openModal(Modal: any, id: any=[]){
    this.modalservice.open(Modal, {centered: true, size: 'lg', backdrop: 'static'});
  }

}
