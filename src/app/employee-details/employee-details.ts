import { Component, Input } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Api } from '../../Services/api';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Loader } from '../../Services/loader';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-details',
  imports: [SharedModule],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css'
})
export class EmployeeDetails {
  @Input() editid: any;
  countryList: any;
  contactForm: any;
  files: File[] = [];
  Images: any;
  entity: any;
  constructor(public api: Api, public router: Router, public activateRoute: ActivatedRoute, public loaderService: Loader, public modalService: NgbModal) { }
  ngOnInit() {

    if (this.editid) {
      this.getByID();
    }
    this.buildForm();
    this.getEmployeeDetails();
  }

  buildForm() {
    this.contactForm = new FormGroup({
      EmployeeID: new FormControl('', Validators.required),
      Title: new FormControl('', Validators.required),
      FirstName: new FormControl('', Validators.required),
      MiddleName: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      NickName: new FormControl('', Validators.required),
      DateOfBirth: new FormControl('', Validators.required),
      PlaceOfBirth: new FormControl('', Validators.required),
      CountryID: new FormControl('', Validators.required),
      Gender: new FormControl('', Validators.required),
      MaritalStatus: new FormControl('', Validators.required),
      PersonalEmail: new FormControl('', Validators.required),
      MotherName: new FormControl(''),
      FatherName: new FormControl(''),
      Religion: new FormControl(''),
      Citizenship: new FormControl(''),
      Nationality: new FormControl('', Validators.required),
      BloodType: new FormControl('', Validators.required),
      Images: new FormControl(this.Images, Validators.required)

    })
  }

  async getByID() {
    let response = await this.api.getMethod(`Master/GetEmployeeDetailsByID?ID=${this.editid}`);
    console.log(response.data);
    this.contactForm = new FormGroup({
      ID: new FormControl(this.editid),
      EmployeeID: new FormControl(response.data[0].employeeID, Validators.required),
      Title: new FormControl(response.data[0].title, Validators.required),
      FirstName: new FormControl(response.data[0].firstName, Validators.required),
      MiddleName: new FormControl(response.data[0].middleName, Validators.required),
      LastName: new FormControl(response.data[0].lastName, Validators.required),
      NickName: new FormControl(response.data[0].nickName, Validators.required),
      DateOfBirth: new FormControl(response.data[0].dateOfBirth.split('T')[0], Validators.required),
      PlaceOfBirth: new FormControl(response.data[0].placeOfBirth, Validators.required),
      CountryID: new FormControl(response.data[0].countryID, Validators.required),
      Gender: new FormControl(response.data[0].gender, Validators.required),
      MaritalStatus: new FormControl(response.data[0].maritalStatus, Validators.required),
      PersonalEmail: new FormControl(response.data[0].personalEmail, Validators.required),
      MotherName: new FormControl(response.data[0].motherName, Validators.required),
      FatherName: new FormControl(response.data[0].fatherName, Validators.required),
      Religion: new FormControl(response.data[0].religion, Validators.required),
      Citizenship: new FormControl(response.data[0].citizenship, Validators.required),
      Nationality: new FormControl(response.data[0].nationality, Validators.required),
      BloodType: new FormControl(response.data[0].bloodType, Validators.required),
      Images: new FormControl(response.data[0].images, Validators.required)
    })
  }

  async getEmployeeDetails() {
    let result = await this.api.getMethod("Master/GetCountryTable");
    this.countryList = result.data;
  }


  // async Submit() {
  //   if (this.contactForm.invalid) {
  //     Swal.fire({
  //       text: 'Please Fill All Details'
  //     });
  //     return;
  //   }
  //   else {
  //     if (this.editid) {
  //       console.log(this.contactForm.value);
  //       let result = await this.api.postMethod('Master/UpdateEmployeeDetails', this.contactForm.value);
  //       this.loaderService.isEmployee = "Yes";
  //       this.loaderService.isEmployeeDetails = String(this.editid);
  //       if (result.data > 0) {
  //         console.log(result);



  //         Swal.fire({
  //           text: 'Updated Successfully'
  //         });
  //         this.goToNext();
  //       }
  //     }
  //     else {
  //       console.log(this.contactForm.value)
  //       let result = await this.api.postMethod('Master/InsertEmployeeDetails', this.contactForm.value);
  //       this.loaderService.isEmployee = "Yes";
  //       console.log(result.data);
  //       sessionStorage.setItem("isEmployeeDetails", String(result.data));
  //       this.loaderService.isEmployeeDetails = String(result.data);
  //       console.log(this.loaderService.isEmployeeDetails);

  //       if (result.data > 0) {
  //         Swal.fire({
  //           text: 'Employee Details Added Successfully'
  //         });
  //         this.goToNext();
  //       }
  //     }

  //   }
  // }

  async Submit() {
    if (this.contactForm.invalid) {
      Swal.fire({ text: 'Please Fill All Required Details' });
      return;
    }

    this.entity = {
      EmployeeID: this.contactForm.value.EmployeeID,
      Title: this.contactForm.value.Title,
      FirstName: this.contactForm.value.FirstName,
      MiddleName: this.contactForm.value.MiddleName,
      LastName: this.contactForm.value.LastName,
      NickName: this.contactForm.value.NickName,
      DateOfBirth: this.contactForm.value.DateOfBirth,
      PlaceOfBirth: this.contactForm.value.PlaceOfBirth,
      CountryID: this.contactForm.value.CountryID,
      Gender: this.contactForm.value.Gender,
      MaritalStatus: this.contactForm.value.MaritalStatus,
      PersonalEmail: this.contactForm.value.PersonalEmail,
      MotherName: this.contactForm.value.MotherName,
      FatherName: this.contactForm.value.FatherName,
      Religion: this.contactForm.value.Religion,
      Citizenship: this.contactForm.value.Citizenship,
      Nationality: this.contactForm.value.Nationality,
      BloodType: this.contactForm.value.BloodType,
      Images: this.Images || ''
    };

    if (this.editid) {
      this.entity.ID = this.editid;
      let result = await this.api.postMethod('Master/UpdateEmployeeDetails', this.entity);
      if (result.data > 0) {
        Swal.fire({ text: 'Updated Successfully' });
      }
    } else {
      let result = await this.api.postMethod('Master/InsertEmployeeDetails', this.entity);
      if (result.data > 0) {
        sessionStorage.setItem('isEmployeeDetails', String(result.data));
        Swal.fire({ text: 'Employee Details Added Successfully' });
        this.contactForm.reset();
        this.files = [];
        this.Images = '';
      }
    }
  }





  goToNext() {
    if (this.loaderService.isEmployee != "Yes") {
      Swal.fire({
        icon: 'error',
        title: "You Not Allowed to Navigate",
        text: 'Please Fill Employee Details Tab'
      });
      return;
    }
    this.loaderService.isDetail = 'position';

  }





  async onSelect(event: any) {
  this.files.push(...event.addedFiles);
  const file = event.addedFiles[0];
  if (!file) return;

  const formData = new FormData();
  formData.append('file_upload', file, file.name);

  try {
    const res: any = await this.api.postMethod('Master/UploadAttachments/', formData);

    if (res?.data) {
      this.Images = res.data; 
      Swal.fire('Uploaded Successfully.');
    } else {
      Swal.fire('Upload Failed');
      this.Images = '';
    }
  } catch (error) {
    Swal.fire('An error occurred while uploading.');
    console.error(error);
  }
}


  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }



  openModal(Modal: any, id: any = null) {
    this.modalService.open(Modal, { centered: true, size: "lg", backdrop: 'static' });
  }
}
