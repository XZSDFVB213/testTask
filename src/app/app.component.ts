import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import  {MainComponent} from './components/main/main.component';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent,MainComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testTask';
}
