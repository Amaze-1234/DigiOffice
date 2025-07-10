import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Api } from '../../Services/api';
import axios from 'axios';
@Component({
  selector: 'app-department-table',
  imports: [CommonModule],
  templateUrl: './department-table.html',
  styleUrl: './department-table.css'
})
export class DepartmentTable {

DepartmentData:any;
constructor(public api:Api){}
ngOnInit()
{

}

async getDepartmentdetails()
{

}


}
