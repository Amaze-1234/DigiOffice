import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Api } from '../../Services/api';

@Component({
  selector: 'app-shift-form',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './shift-form.html',
  styleUrl: './shift-form.css'
})
export class ShiftForm implements OnInit{
   shiftForm:any;
  shiftType:any;
  startTime:any;
  endTime:any;
  shiftCode:any;
  gracePeriod:any;

   constructor(public router: Router, public apiservice: Api, public activeroute: ActivatedRoute) { }
  
   @Input() editid: any;
   @Output() closemodal = new EventEmitter<any>();
 
 
 
  ngOnInit() {
  this.buildForm(); 
  if (this.editid) {
    this.getByID(); 
  }
}
 
 
 
   buildForm() {
     this.shiftForm = new FormGroup({
      id: new FormControl(''),
       shiftType: new FormControl('', Validators.pattern('^[A-Z a-z]+$')),
       startTime: new FormControl('', Validators.required),
       endTime: new FormControl('', Validators.required),
       shiftCode: new FormControl('', Validators.required),
       gracePeriod: new FormControl('', Validators.required)
 
     })
   }
 
  async onSubmit(type: any) {
           debugger;
           
           if (type == 'submit') {
             let result = await this.apiservice.postMethod("Master/InsertShift", this.shiftForm.value);
             if (result.data > 0) {
               Swal.fire("Data Saved Successfully");
               this.closemodal.emit('submit');
       
             }
       
           }
           else {
             let result = await this.apiservice.postMethod("Master/UpdateShift", this.shiftForm.value);
             if (result.data > 0) {
               Swal.fire("Data Updated Successfully");
               this.closemodal.emit('update');
            
       
             }
           }
         }

 
   async getByID() {
     debugger;
     const response = await this.apiservice.getMethod(`Master/GetShiftByID?ID=${this.editid}`);
     console.log(response);
     this.shiftForm = new FormGroup({
 
       id: new FormControl(this.editid),
       shiftType: new FormControl(response.data[0]?. shiftType, Validators.required),
      startTime: new FormControl(response.data[0]?.startTime, Validators.required),
            endTime: new FormControl(response.data[0]?.endTime, Validators.required),
            shiftCode: new FormControl(response.data[0]?.shiftCode, Validators.required),

       gracePeriod: new FormControl(response.data[0]?.gracePeriod, Validators.required),
 
 
     })
 
   }

}
