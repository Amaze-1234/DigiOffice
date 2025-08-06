import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';

@Component({
  selector: 'app-announcement',
  imports: [SharedModule],
  templateUrl: './announcement.html',
  styleUrl: './announcement.css'
})
export class Announcement {
  selectedTab: any;
  constructor(){}
  ngOnInit(){
    
  }
    selectTab(tab: any){
    this.selectedTab = tab;
  }

}
