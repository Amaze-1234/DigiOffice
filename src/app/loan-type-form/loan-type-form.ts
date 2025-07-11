import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Api } from '../../Services/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loan-type-form',
  imports: [FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './loan-type-form.html',
  styleUrl: './loan-type-form.css'
})
export class LoanTypeForm implements OnInit{

   loanForm:any;
  loanType:any;
  loanDescription:any;


   constructor(public router: Router, public apiservice: Api, public activeroute: ActivatedRoute) { }
  
   @Input() editid: any;
   @Output() closemodal = new EventEmitter<any>();
 
 
 
   ngOnInit() {
      if (this.editid) {
         console.log(this.editid)
         this.getByID();
       }
     this.buildForm();
 
   }
 
 
 
   buildForm() {
     this.loanForm = new FormGroup({
      ID: new FormControl(''),
       loanType: new FormControl('', Validators.pattern('^[A-Z a-z]+$')),
       loanDescription: new FormControl('', Validators.required)
 
     })
   }
 
    async onSubmit(type: any) {
          debugger;
          if (type == 'submit') {
            let result = await this.apiservice.postMethod("Master/InsertLoan", this.loanForm.value);
            if (result.data > 0) {
              Swal.fire("Data Saved Successfully");
              this.closemodal.emit('submit');
      
            }
      
          }
          else {
            let result = await this.apiservice.postMethod("Master/UpdateLoan", this.loanForm.value);
            if (result.data > 0) {
              Swal.fire("Data Updated Successfully");
              this.closemodal.emit('update');
           
      
            }
          }
        }
 
   async getByID() {
     debugger;
     const response = await this.apiservice.getMethod(`Master/GetLoanByID?ID=${this.editid}`);
  
     this.loanForm = new FormGroup({
 
       ID: new FormControl(this.editid),
       loanType: new FormControl(response.data[0]?. loanType, Validators.required),
      loanDescription: new FormControl(response.data[0]?. loanDescription, Validators.required)
 

     })
 
   }
}
