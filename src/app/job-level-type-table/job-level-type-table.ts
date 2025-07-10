import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { Api } from '../../Services/api';
import { Router } from '@angular/router';
import { JobLevelTypeForm } from '../job-level-type-form/job-level-type-form';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-job-level-type-table',
  imports: [SharedModule,JobLevelTypeForm],
  templateUrl: './job-level-type-table.html',
  styleUrl: './job-level-type-table.css'
})
export class JobLevelTypeTable {
jobLevelShift:any;

constructor(public apiService: Api, public router: Router, public modalService: NgbModal ){
  
}
ngOnInit(){
  this.jobLevelShiftdata();
}
 async jobLevelShiftdata(){
  let result = await this.apiService.getMethod('DigiOffice/GetJoblevelTypeJoinDesignation');
  console.log(result.data);
  this.jobLevelShift = result.data;
}

addDetails(){
  console.log(1);
  this.router.navigate(['/jobleveltypeform'])
}

openModal(modal: any){
  this.modalService.open(modal,{centered: true, size: "lg", scrollable: true})
}
}
