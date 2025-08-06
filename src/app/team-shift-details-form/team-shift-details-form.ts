import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Api } from '../../Services/api';
import { Loader } from '../../Services/loader';
import { SharedModule } from '../../Shared/shared.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-team-shift-details-form',
  imports: [ReactiveFormsModule, SharedModule],
  templateUrl: './team-shift-details-form.html',
  styleUrl: './team-shift-details-form.css'
})
export class TeamShiftDetailsForm {
  shiftDetails: any;
  staffId: any;
  StaffID: any;
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
  @Input() editID: any;
  @Output() closemodal = new EventEmitter<any>();

  constructor(public api: Api, public loader: Loader) { }
  ngOnInit() {
    this.getStaffDetails();
    this.getShiftType();
    this.getShiftDetailsByShiftTable();
    this.getTeamShiftDetails();
    if (this.editID) {
      this.getTeamShiftDetailsByID();
    }
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
    this.staffId = parseInt(this.loader.staffID);
    console.log(typeof (this.staffId), this.staffId)
    const result = await this.api.getMethod(`Master/GetStaffDetailsJoinShift?ID=${this.staffId}`)
    this.shiftDetails = result.data;
    // console.log(this.shiftDetails);
  }

  async getShiftType() {
    let result = await this.api.getMethod('Master/GetShiftType');
    this.shiftTypeData = result.data;
  }

  async getShiftDetailsByShiftTable() {
    let result = await this.api.getMethod('Master/GetShiftDetailsByShiftTable');
    this.shiftCodeDetails = result.data;
    if (this.editID) {
      this.ChangedValueOfShiftType({ target: { value: this.teamShiftDetailsForm.value.ShiftTypeID } });
      this.changedValueOfCode({ target: { value: this.teamShiftDetailsForm.value.ShiftCode } });

    }
  }

  ChangedValueOfShiftType(event: any) {
    const changedShiftType = event.target.value;
    // console.log(changedShiftType);
    // console.log(this.shiftCodeDetails);


    this.changedShiftType = this.shiftCodeDetails.filter((code: { shiftID: any; }) =>
      code.shiftID == changedShiftType
    ).map((x: { id: any; shiftCode: any; }) => ({ id: x.id, shiftCode: x.shiftCode }))
    // console.log(this.changedShiftType);

  }

  changedValueOfCode(event: any) {
    let changedCode = event.target.value;
    // console.log(changedCode);

    this.defaultStartTime = this.shiftCodeDetails.filter((code: { id: any; }) =>
      code.id == changedCode
    ).map((x: { id: any; startTime: any; endTime: any }) => ({ id: x.id, startTime: x.startTime, endTime: x.endTime }))
   

    this.teamShiftDetailsForm.patchValue({
      StartTime: this.defaultStartTime[0].startTime,
      EndTime: this.defaultStartTime[0].endTime
    })
  }

  getTeamShiftDetails() {
    this.teamShiftDetailsForm = new FormGroup({
      ID: new FormControl(''),
      StaffID: new FormControl('', Validators.required),
      StartDate: new FormControl('', Validators.required),
      EndDate: new FormControl('', Validators.required),
      ShiftTypeID: new FormControl('', Validators.required),
      ShiftCode: new FormControl('', Validators.required),
      StartTime: new FormControl('', Validators.required),
      EndTime: new FormControl('', Validators.required),
      selectedItems: new FormControl('', Validators.required)
    })
  }

  async getTeamShiftDetailsByID() {
    debugger;
    let result = await this.api.getMethod(`Master/GetStaffShiftDetailsByID?ID=${this.editID}`);
    // console.log(result.data);
    // console.log(this.editID);
    let restDaysID = result.data[0].restDaysID.split(',');
    let restDaysValue = result.data[0].restDaysValue.split(',');
    // console.log(restDaysValue, typeof (restDaysValue[0]));
    // console.log(restDaysID, typeof (restDaysID[0]));

    
    let myItems = []; 
    for(let i=0;i<restDaysID.length;i++){
      myItems.push({ id: Number(restDaysID[i]), text: restDaysValue[i] });
    }
    console.log(myItems, typeof(myItems));
    this.teamShiftDetailsForm = new FormGroup({
      ID: new FormControl(this.editID),
      StaffID: new FormControl(result.data[0].staffID, Validators.required),
      StartDate: new FormControl(result.data[0].startDate.split('T')[0], Validators.required),
      EndDate: new FormControl(result.data[0].endDate.split('T')[0], Validators.required),
      ShiftTypeID: new FormControl(result.data[0].shiftTypeID, Validators.required),
      ShiftCode: new FormControl(result.data[0].shiftCode, Validators.required),
      StartTime: new FormControl(result.data[0].startTime, Validators.required),
      EndTime: new FormControl(result.data[0].endTime, Validators.required),
      selectedItems: new FormControl(myItems, Validators.required)
    })
  }


   onItemSelect(event: any){
    console.log(event);
    
  }


  async submit(type: any) {
    debugger;
    console.log(this.teamShiftDetailsForm.value);
    let restID = '';
    let restValue = '';
    for (let i = 0; i < this.teamShiftDetailsForm.value.selectedItems.length; i++) {

      restID = restID ? restID + ',' + this.teamShiftDetailsForm.value.selectedItems[i].id : this.teamShiftDetailsForm.value.selectedItems[i].id;
      restValue = restValue ? restValue + ',' + this.teamShiftDetailsForm.value.selectedItems[i].text : this.teamShiftDetailsForm.value.selectedItems[i].text;
      // console.log(this.teamShiftDetailsForm.value.selectedItems[i].id);

    }


    if(type == 'save'){
      this.entity = {
      StaffID: this.teamShiftDetailsForm.value.StaffID,
      StartDate: this.teamShiftDetailsForm.value.StartDate,
      EndDate: this.teamShiftDetailsForm.value.EndDate,
      ShiftTypeID: this.teamShiftDetailsForm.value.ShiftTypeID,
      ShiftCode: this.teamShiftDetailsForm.value.ShiftCode,
      StartTime: this.defaultStartTime[0].id,
      EndTime: this.defaultStartTime[0].id,
      RestDaysID: restID,
      RestDaysValue: restValue
    }
    console.log(this.entity);
    if (this.teamShiftDetailsForm.invalid) {
      Swal.fire("Please fill all the details");
      return;
    }
    let result = await this.api.postMethod('Master/InsertStaffShiftDetails', this.entity);
    if (result.data > 0) {
      Swal.fire("Data Submitted Successfully");
    }
    }
    else{
     this.entity = {
      ID : this.teamShiftDetailsForm.value.ID,
      StaffID: this.teamShiftDetailsForm.value.StaffID,
      StartDate: this.teamShiftDetailsForm.value.StartDate,
      EndDate: this.teamShiftDetailsForm.value.EndDate,
      ShiftTypeID: this.teamShiftDetailsForm.value.ShiftTypeID,
      ShiftCode: this.teamShiftDetailsForm.value.ShiftCode,
      StartTime: this.defaultStartTime[0].id,
      EndTime: this.defaultStartTime[0].id,
      RestDaysID: restID,
      RestDaysValue: restValue
    }
    console.log(this.entity);
    let result = await this.api.postMethod('Master/UpdateStaffShiftDetails', this.entity);
    if (result.data > 0) {
      Swal.fire("Data Updated Successfully");
    }
    }
  }
}
