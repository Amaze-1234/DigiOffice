import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { Router, RouterOutlet } from '@angular/router';
import { ResignationTab } from "../resignation-tab/resignation-tab";

@Component({
  selector: 'app-resignation',
  imports: [SharedModule, RouterOutlet, ResignationTab],
  templateUrl: './resignation.html',
  styleUrl: './resignation.css'
})
export class Resignation {

  action:any;
  constructor(public route:Router){}
  resignationTab()
  {
   this.action='myResignation'


  }
  resignationTeam()
  {
    this.action='teamResignation'

  }

}
