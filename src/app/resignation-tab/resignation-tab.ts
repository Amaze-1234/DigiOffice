import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';

@Component({
  selector: 'app-resignation-tab',
  imports: [SharedModule],
  templateUrl: './resignation-tab.html',
  styleUrl: './resignation-tab.css'
})
export class ResignationTab {

  action='pending';


  pending()
  {

        this.action='pending'

  }
  approved()
  {
 
         this.action='approved'
  }
  rejected()
  {

       this.action='rejected'

  }



}
