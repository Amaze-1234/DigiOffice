import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Api } from '../../Services/api';
import { Loader } from '../../Services/loader';
import { SharedModule } from '../../Shared/shared.module';

@Component({
  selector: 'app-team-shift-details-form',
  imports: [ReactiveFormsModule, SharedModule],
  templateUrl: './team-shift-details-form.html',
  styleUrl: './team-shift-details-form.css'
})
export class TeamShiftDetailsForm {
  shiftDetails: any;
  staffID: any;
  Staff: any;
  StartDate: any;
  EndDate: any;
  ShiftTypeID: any;
  ShiftCode: any;
  StartTime: any;
  EndTime: any;
  restDaysID: any = [];
  restDaysValue: any = [];
  dropdownList: any = [];
  entity: any;
  shiftTypeData: any;
  selectedItems: any = [];
  dropdownSettings: any = {};
  teamShiftDetailsForm: any;
  shiftCodeDetails: any;
  changedShiftType: any;
  filteredCode: any;
  defaultStartTime: any;
  defaultEndTime: any;
  constructor(public api: Api, public loader: Loader) { }
  ngOnInit() {
    this.getStaffDetails();
    this.getShiftType();
    this.getShiftDetailsByShiftTable();
    this.getTeamShiftDetails();
    this.dropdownList = [
      { id: 1, text: 'Monday' },
      { id: 2, text: 'Tuesday' },
      { id: 3, text: 'Wednesday' },
      { id: 4, text: 'Thursday' },
      { id: 5, text: 'Friday' },
      { id: 6, text: 'Saturday' },
      { id: 7, text: 'Sunday' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'text',
      itemsShowLimit: 2,
      limitSelection: 2,
      allowSearchFilter: true
    };
  }
  async getStaffDetails() {
    this.staffID = parseInt(this.loader.staffID);
    console.log(typeof (this.staffID), this.staffID)
    const result = await this.api.getMethod(`Master/GetStaffDetailsJoinShift?ID=${this.staffID}`)
    this.shiftDetails = result.data;
    console.log(this.shiftDetails);
  }

  async getShiftType(){
    let result = await this.api.getMethod('Master/GetShiftType');
    this.shiftTypeData = result.data;
  }

  async getShiftDetailsByShiftTable(){
    let result = await this.api.getMethod('Master/GetShiftDetailsByShiftTable');
    this.shiftCodeDetails = result.data;
  }

  ChangedValueOfShiftType(event: any){
    const changedShiftType = event.target.value;
    console.log(changedShiftType);
    console.log(this.shiftCodeDetails);
    
    
     this.changedShiftType = this.shiftCodeDetails.filter((code: { shiftID: any; }) =>
      code.shiftID == changedShiftType
    ).map((x: { id: any; shiftCode: any; }) =>({id: x.id, shiftCode: x.shiftCode}))
    console.log(this.changedShiftType);
    
  }

  changedValueOfCode(event: any){
    let changedCode = event.target.value;
   console.log(changedCode);
   
    this.defaultStartTime = this.shiftCodeDetails.filter((code: { id: any; }) =>
      code.id == changedCode
    ).map((x: { id: any; startTime: any; }) => ({id: x.id, startTime: x.startTime}))
    console.log(this.defaultStartTime[0].startTime, typeof(this.defaultStartTime[0].id));
    console.log(this.defaultStartTime[0].id);
      
  }

  getTeamShiftDetails() {
    this.teamShiftDetailsForm = new FormGroup({
      ID: new FormControl(''),
      Staff: new FormControl('',),
      StartDate: new FormControl('',),
      EndDate: new FormControl('',),
      ShiftTypeID: new FormControl('',),
      ShiftCode: new FormControl(''),
      StartTime: new FormControl('',),
      EndTime: new FormControl('',),
      selectedItems: new FormControl('',)


    })


  }

  submit() {
    debugger;
    console.log(this.teamShiftDetailsForm.value);
    let restID = '';
    let restValue = '';
    for (let i = 0; i < this.teamShiftDetailsForm.value.selectedItems.length; i++) {
      console.log(i);

      restID = restID ? restID + ',' + this.teamShiftDetailsForm.value.selectedItems[i].id : this.teamShiftDetailsForm.value.selectedItems[i].id;
      restValue = restValue ? restValue + ',' + this.teamShiftDetailsForm.value.selectedItems[i].text : this.teamShiftDetailsForm.value.selectedItems[i].text;
      console.log(this.teamShiftDetailsForm.value.selectedItems[i].id);

    }


    this.entity = {
      ID: this.teamShiftDetailsForm.value.ID,
      StaffID: this.teamShiftDetailsForm.value.Staff,
      StartDate: this.teamShiftDetailsForm.value.StartDate,
      EndDate: this.teamShiftDetailsForm.value.EndDate,
      ShiftTypeID: 1,
      ShiftCode: 'MR3',
      StartTime: this.teamShiftDetailsForm.value.StartTime,
      EndTime: this.teamShiftDetailsForm.value.EndTime,
      RestDaysID: restID,
      RestDaysValue: restValue
    }
    console.log(this.entity);

  }
}
