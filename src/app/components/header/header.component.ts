import {Component, OnInit} from '@angular/core';
import {DatePipe, NgOptimizedImage, NgStyle,} from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [
    DatePipe,
    NgOptimizedImage,
    NgStyle,
  ],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public time: Date = new Date();

  public hidden: boolean = true;

  public hiddenTask: string = 'Не отображается текст "Пока нет вопросов", если Заказчик откроет Вопросы по процедуре, в которой нет ни одного вопроса если Заказчик откроет Вопросы по процедуре, в которой нет ни одного вопроса';

  public showFull() {
    this.hidden = !this.hidden
  }

  ngOnInit() {
    setInterval(() => {
      this.time = new Date()
    }, 5000)
  }

  public getStyles(): { [key: string]: string } {
    if (this.hidden) {
      return {'height': '18px', overflow: 'hidden'};
    } else {
      return this.hidden ? {} : {'height': '50px', 'overflow-y': 'scroll'};
    }
  }
}
