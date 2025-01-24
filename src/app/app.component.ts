import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import  {MainComponent} from './components/main/main.component';
import {NgIf} from '@angular/common';
import {HeaderMobileComponent} from './components/header-mobile/header-mobile.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainComponent, NgIf, HeaderMobileComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  windowWidth:number = innerWidth
  title = 'testTask';
}
