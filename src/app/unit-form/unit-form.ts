import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { Api } from '../../Services/api';

@Component({
  selector: 'app-unit-form',
  imports: [SharedModule],
  templateUrl: './unit-form.html',
  styleUrl: './unit-form.css'
})
export class UnitForm {
    designation: any =[];
    constructor(public apiService: Api){}
  
    ngOnInit(){
      this.getDepartment();
    }
    async getDepartment(){
      let result = await this.apiService.getMethod('DigiOffice/GetDepartment');
      this.designation = result.data
    }

}
