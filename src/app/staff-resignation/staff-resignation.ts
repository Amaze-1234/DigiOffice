import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staff-resignation',
  imports: [SharedModule,CommonModule],
  templateUrl: './staff-resignation.html',
  styleUrl: './staff-resignation.css'
})
export class StaffResignation {


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
