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
  Image: any;
  imgSrc:any;
  resImage:any;
  imageUrl:any;
  imgPath:any='';
  entity: any;
  selectedFile: any;
  insertImage: any;
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
      Images: new FormControl('', Validators.required)

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
    this.imgPath='update'
    this.resImage = this.contactForm.value.Images.slice(3);
    console.log(this.contactForm.value.Images);
    console.log(this.resImage);
    
    this.imageUrl=`https://103.12.1.103/${this.resImage}`
    console.log(this.imageUrl)
  }

  async getEmployeeDetails() {
    let result = await this.api.getMethod("Master/GetCountryTable");
    this.countryList = result.data;
  }


  async Submit(type: any) {

    debugger;

      if (type == 'update') {
        this.entity =
        {
          ID:this.contactForm.value.ID,
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
          Images: this.contactForm.value.Images
        }
        // console.log(this.entity);
        

      console.log(this.entity);
      let result = await this.api.postMethod('Master/UpdateEmployeeDetails', this.entity);
      this.loaderService.isEmployee = "Yes";
      this.loaderService.isEmployeeDetails = String(this.editid);
      console.log(result.data);

      if (result.data > 0) {
        console.log(result);

        Swal.fire({
          text: 'Updated Successfully'
        });
        this.goToNext();
      }
    }
    else {
      this.entity =
      {
        ID: this.contactForm.value.ID,
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
        Images: this.Image
      }

        console.log(this.entity);
        
        console.log(this.contactForm.invalid);
        
        
         if (this.contactForm.invalid) {
      Swal.fire({
        text: 'Please Fill All Details'
      });
      return;
    }

      let result = await this.api.postMethod('Master/InsertEmployeeDetails', this.entity);
      this.loaderService.isEmployee = "Yes";
      console.log(result.data);
      sessionStorage.setItem("isEmployeeDetails", String(result.data));
      this.loaderService.isEmployeeDetails = String(result.data);
      console.log(this.loaderService.isEmployeeDetails);

      if (result.data > 0) {
        Swal.fire({
          text: 'Employee Details Added Successfully'
        });
        this.goToNext();
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
    console.log(event);

    this.files.push(...event.addedFiles);


    const selectedFile = event.addedFiles[0];
    let formData = new FormData();
    formData.append('file_upload', selectedFile, selectedFile.name);

    try {
      let resURL = await this.api.postMethod('Master/UploadAttachments/', formData);
      console.log(resURL.data);

      if (resURL && resURL.data) {
        this.Image= resURL.data
        this.imgPath='insert'
        this.insertImage = (resURL.data).slice(3);
        console.log(this.Image);
         this.contactForm.get('Images')?.setValue(this.Image);

        this.imgSrc =`https://103.12.1.103/${this.insertImage}`;
        console.log(this.imgSrc);


        Swal.fire('Uploaded Successfully.');
      } else {
        Swal.fire('Upload failed')
        this.Image = '';
      }
    } catch (error) {
      console.error('Upload Error:', error);
      Swal.fire('Upload failed');
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