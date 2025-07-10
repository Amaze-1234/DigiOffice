import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { Api } from '../../Services/api';

@Component({
  selector: 'app-job-level-type-form',
  imports: [SharedModule],
  templateUrl: './job-level-type-form.html',
  styleUrl: './job-level-type-form.css'
})
export class JobLevelTypeForm {

  designation: any =[];
  constructor(public apiService: Api){}

  ngOnInit(){
    this.getDesignation();
  }
  async getDesignation(){
    let result = await this.apiService.getMethod('DigiOffice/GetDesignation');
    this.designation = result.data
  }
}
