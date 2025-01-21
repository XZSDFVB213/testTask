import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-left-block',
  imports: [
    NgForOf,
    NgIf,
    NgOptimizedImage
  ],
  standalone:true,
  templateUrl: './left-block.component.html',
  styleUrl: './left-block.component.css'
})
export class LeftBlockComponent implements OnInit{
  public widthScreen!:number

  public elementsVisibility = [true, true];

  ngOnInit() {
    this.widthScreen = window.innerWidth
    if (window.innerWidth <= 400) {
      this.elementsVisibility = [true, false];
      this.myTask = this.myTask = [
        {name:'Создание нового чата или вопроса по процедуре',url: '/icon_task.png',code: 'TR-333'},
        {name:'Загрузка списка вопросов глючит',url: '/bug116_16.png',code: 'TR-334'}
      ]
    }
  }
  public showElement(index: number) {
    this.elementsVisibility[index] = !this.elementsVisibility[index];
  }
  public myTask = [
    {name: 'Разработка нового компонента для отображения графиков', url: '/icon_task.png', code: 'TR-321'},
    {name: 'Рефакторинг кода модуля авторизации', url: '/icon_task.png', code: 'TR-322'},
    {name: 'Устранить проблемы с кроссбраузерной совместимостью', url: '/bug116_16.png', code: 'TR-121'},
    {name: 'Ошибка валидации формы при пустом поле “номер телефона”', url: '/bug116_16.png', code: 'TR-122'},
    {
      name: 'Неверное поведение компонента “Главный экран”  при изменении размера окна',
      url: '/bug116_16.png',
      code: 'TR-123'
    },
    {name: 'Ошибка при обработке события клика (несоответствие контекста)', url: '/bug-sec.png', code: 'TR-124'},
    {name: 'Невозможно загрузить динамически импортируемые модули', url: '/bug-red.png', code: 'TR-125'},
  ]

  public notAssigned = [
    {
      name: 'Отсутствует лоадер при загрузке списка вопросов',
      url: '/bug116_16.png',
      code: 'TR-126',
      iconStatus: '/ic_StatusTask_16.png'
    },
    {
      name: 'Адаптация макетов под различные устройства',
      url: '/icon-task-sec.png',
      code: 'TR-127',
      iconStatus: '/ic_StatusTask_16.png'
    },
    {
      name: 'Создание многоуровневого выпадающего меню',
      url: '/icon_task.png',
      code: 'TR-128',
      iconStatus: '/ic_StatusTask_16.png'
    },
    {
      name: 'Создание кастомного компонента для загрузки файлов',
      url: '/icon_task.png',
      code: 'TR-129',
      iconStatus: '/watched-task-icon.png'
    },
    {
      name: 'Подключение и настройка системы международных переводов',
      url: '/icon_task.png',
      code: 'TR-130',
      iconStatus: '/ic_StatusTask_16.png'
    },
    {
      name: 'Интеграция с системой аутентификации через OAuth',
      url: '/icon_task.png',
      code: 'TR-133',
      iconStatus: '/ic_StatusTask_16.png'
    },
    {
      name: 'Создание адаптивной версии страницы Профиль',
      url: '/icon_task.png',
      code: 'TR-345',
      iconStatus: '/watched-task-icon.png'
    },
    {
      name: 'Верстка страницы Отпуска и Больничные',
      url: '/icon_task.png',
      code: 'TR-333',
      iconStatus: '/ic_StatusTask_16.png'
    },
    {
      name: 'Возможность брать больничные не админу',
      url: '/icon_task.png',
      code: 'TR-321',
      iconStatus: '/ic_StatusTask_16.png'
    },
  ]

}
