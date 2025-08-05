import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';

@Component({
  selector: 'app-holiday',
  imports: [SharedModule],
  templateUrl: './holiday.html',
  styleUrl: './holiday.css'
})
export class Holiday {

  selectedTab:any;

  selectTab(tab: any) {
    this.selectedTab = tab;
  }

}
