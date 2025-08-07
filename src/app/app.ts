import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from './side-bar/side-bar';
import { Footer } from './footer/footer';
import { NavBar } from './nav-bar/nav-bar';
import { SharedModule } from '../Shared/shared.module';
import { Loader } from '../Services/loader';
import { Login } from "./login/login";
import { ManagerSideBar } from "./manager-side-bar/manager-side-bar";
import { StaffSideBar } from "./staff-side-bar/staff-side-bar";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBar, Footer, NavBar, SharedModule, Login, ManagerSideBar, StaffSideBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'digiOfficePractice';
  islogin: any;

  constructor(public loderService: Loader){

  }

  ngOnInit(){
  debugger
  
  this.islogin = this.loderService.isLogin;
  }
}
