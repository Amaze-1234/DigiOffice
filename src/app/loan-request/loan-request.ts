import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { Api } from '../../Services/api';
import { LoanRequestForm } from "../loan-request-form/loan-request-form";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-loan-request',
  imports: [SharedModule, LoanRequestForm],
  templateUrl: './loan-request.html',
  styleUrl: './loan-request.css'
})
export class LoanRequest {
  loanData: any;
selectedTab: any;
isMyLoanDetails: any;
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

  myLoanDetails(loan: any) {
    this.isMyLoanDetails = loan;
  }

}
