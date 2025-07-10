import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';

@Component({
  selector: 'app-job-level-type-table',
  imports: [SharedModule],
  templateUrl: './job-level-type-table.html',
  styleUrl: './job-level-type-table.css'
})
export class JobLevelTypeTable {
jobLevelShift:any;
}
