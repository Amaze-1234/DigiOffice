import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../Shared/shared.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-announcement-form',
  imports: [SharedModule],
  templateUrl: './announcement-form.html',
  styleUrl: './announcement-form.css'
})
export class AnnouncementForm {
  editid: any;
  contactForm: any;
  @Output() closeModal = new EventEmitter<any>();
  constructor(public modalservice: NgbModal) { }
  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.contactForm = new FormGroup({
      ID: new FormControl(''),
      Date: new FormControl('', Validators.required),
      Time: new FormControl('', Validators.required),
      Text: new FormControl('', Validators.required),
      Images: new FormControl('', Validators.required),
      Textfield: new FormControl('', Validators.required)
    })
  }

  submit() {
    if (this.contactForm.invalid) {
      Swal.fire({
        text: 'Please fill all the details'
      });
      return;
    }
  }

}
