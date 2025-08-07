import { Component } from '@angular/core';
import { Loader } from '../../Services/loader';
import { Api } from '../../Services/api';

@Component({
  selector: 'app-my-shift',
  imports: [],
  templateUrl: './my-shift.html',
  styleUrl: './my-shift.css'
})
export class MyShift {
  constructor(public loaderService: Loader, public apiService: Api){
    
  }
 
}
