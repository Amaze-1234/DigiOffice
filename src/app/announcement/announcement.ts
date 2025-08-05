import { Component } from '@angular/core';

@Component({
  selector: 'app-announcement',
  imports: [],
  templateUrl: './announcement.html',
  styleUrl: './announcement.css'
})
export class Announcement {
  selectedTab: any;
    selectTab(tab: any){
    this.selectedTab = tab;
  }

}
