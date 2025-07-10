import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { Api } from '../../Services/api';

@Component({
  selector: 'app-job-level-type-table',
  imports: [SharedModule],
  templateUrl: './job-level-type-table.html',
  styleUrl: './job-level-type-table.css'
})
export class JobLevelTypeTable {
jobLevelShift:any;

constructor(public apiService: Api){
  
}
ngOnInit(){
  this.jobLevelShiftdata();
}
 async jobLevelShiftdata(){
  let result = await this.apiService.getMethod('DigiOffice/GetJoblevelTypeJoinDesignation');
  console.log(result.data);
  this.jobLevelShift = result.data;
}
}
