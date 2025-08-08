import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { LoanRequestForm } from "../loan-request-form/loan-request-form";
import { Api } from '../../Services/api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-staff-loan-request',
  imports: [SharedModule, LoanRequestForm],
  templateUrl: './staff-loan-request.html',
  styleUrl: './staff-loan-request.css'
})
export class StaffLoanRequest {

   loanData: any;
selectedTab: any = 'pending' ;

  constructor(public apiservice: Api, public modalservice: NgbModal){}
  ngOnInit(){
    this.getLoanType();
  }
  openModal(Modal: any,id:any =null ){
      this.modalservice.open(Modal,{centered: true, size:"lg", backdrop:'static'});
  }
  // close(type: any= null){
  //   this.modalservice.dismissAll();
  // }

  async getLoanType() {
    const result = await this.apiservice.getMethod("Master/GetLoan");
    this.loanData = result.data;
  }

  selectTab(tab: any){
    this.selectedTab = tab;
  }

 
}
