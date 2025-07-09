import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-login',
  imports: [BrowserModule,FormsModule,ReactiveFormsModule ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}
