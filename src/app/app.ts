import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from './side-bar/side-bar';
import { NavBar } from './nav-bar/nav-bar';
import { Footer } from './footer/footer';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SideBar,NavBar,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'digiOfficePractice';
}
