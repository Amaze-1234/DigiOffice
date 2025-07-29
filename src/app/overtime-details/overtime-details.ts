import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';

@Component({
  selector: 'app-overtime-details',
  imports: [SharedModule],
  templateUrl: './overtime-details.html',
  styleUrl: './overtime-details.css'
})
export class OvertimeDetails {
  selectedTab: any;
  
  selectTab(tab: any) {
    this.selectedTab = tab;
  }

}
