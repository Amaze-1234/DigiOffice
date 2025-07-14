import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { Api } from '../../Services/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-unit-form',
  imports: [SharedModule],
  templateUrl: './unit-form.html',
  styleUrl: './unit-form.css',

})
export class UnitForm {
    department: any =[];
    unitDetails:any;
  @Input() deptID:any;
  @Output()  closeModal=new EventEmitter<any>();
    constructor(public apiService: Api){}
  
    ngOnInit(){
      this.getDepartment();
      if(this.deptID)
      {
       this.updateunitForm();
      }
      this.unitForm();
    }


    async getDepartment(){
      let result = await this.apiService.getMethod('DigiOffice/GetDepartment');
      this.department= result.data
    }
async addDepartment(type:any)
{
    if (this.unitDetails.invalid) {
           Swal.fire({
             text: 'Please fill all the details'
           });
           return;
         }
     if(type=='save')
     {
       Swal.fire({
   title: "Are you sure?",
   text: "You want to add Data!",
   icon: "warning",
   showCancelButton: true,
   confirmButtonColor: "#3085d6",
   cancelButtonColor: "#d33",
   confirmButtonText: "Yes, Add it!"
 }).then(async (result) => {
   if (result.isConfirmed) {
     
     const result =await this.apiService.postMethod('DigiOffice/InsertUnit',this.unitDetails.value)
   this.closeModal.emit('save');
   
     this.closeModal.emit("save")
     Swal.fire({
       title: "Added!",
       text: "Your data is added successfully.",
       icon: "success"
     });
   }
 });
}
   
  
  else{
   
    const result =await this.apiService.postMethod(`DigiOffice/UpdateUnit`,this.unitDetails.value)
   this.closeModal.emit('save');

  }

}
unitForm()
{
this.unitDetails=new FormGroup({
  departmentID:new FormControl('',Validators.required),
  unitName:new FormControl('',Validators.required),
   unitDescription:new FormControl('',Validators.required)
})
}
 async updateunitForm()
{
const result=await this.apiService.getMethod(`DigiOffice/GetUnitByID?ID=${this.deptID}`)
console.log(result.data)
this.unitDetails=new FormGroup({
   ID:new FormControl(this.deptID,Validators.required),
  departmentID:new FormControl(result.data[0].departmentID,Validators.required),
  unitName:new FormControl(result.data[0].unitName,Validators.required),
   unitDescription:new FormControl(result.data[0].unitDescription,Validators.required)
})

}
cancel()
{
  this.closeModal.emit("cancel")
}


}
