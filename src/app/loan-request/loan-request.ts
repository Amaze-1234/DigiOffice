import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { Api } from '../../Services/api';

@Component({
  selector: 'app-loan-request',
  imports: [SharedModule],
  templateUrl: './loan-request.html',
  styleUrl: './loan-request.css'
})
export class LoanRequest {
  loanData: any;
selectedTab: any;
isMyLoanDetails: any;
  constructor(public apiservice: Api){}
  ngOnInit(){
    this.getLoanType();
  }

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
