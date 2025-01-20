import {Component, OnInit} from '@angular/core';
import {DatePipe, NgOptimizedImage,} from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [
    DatePipe,
    NgOptimizedImage,
  ],
  standalone:true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  time: Date = new Date();
  hiddenTask: string = 'Не отображается текст "Пока нет вопросов", если...';
  ngOnInit() {
      setInterval(()=>{
        this.time = new Date()
      },5000)
    }

}
