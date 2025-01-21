import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {ProductComponent} from '../shared/product/product.component';
import {LeftBlockComponent} from '../shared/left-block/left-block.component';

registerLocaleData(localeRu);
@Component({
  selector: 'app-main',
  imports: [
    NgOptimizedImage,
    NgForOf,
    NgIf,
    ProductComponent,
    LeftBlockComponent,
  ],
  standalone:true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  elementsVisibility = [true, true, true, true];

  widthScreen!:number

  hiddenQuestion:string = 'Не отображается текст "Пока нет вопросов", если Заказчик откроет Вопрос...'

  ngOnInit() {
    this.widthScreen = window.innerWidth
    if (window.innerWidth <= 400) {
      this.elementsVisibility = [true,false,true,true]
      this.onPause = this.onPause.slice(0,2)
    }
  }
  showElement(index: number) {
    this.elementsVisibility[index] = !this.elementsVisibility[index];
  }

  public onPause = [
    {
      name: 'Drag n drop доступен не админам',
      url: '/bug-red.png',
      code: 'TR-401',
      iconStatus: '/coordination-icon.png'
    },
    {
      name: 'Не отображается дефолтная иконка, если пользователь при создании проекта не загрузил свою',
      url: '/bug-gray.png',
      code: 'TR-41',
      iconStatus: '/watched-task-icon.png'
    },
    {
      name: 'Создание адаптивной версии главной страницы',
      url: '/icon-reshetka.png',
      code: 'TR-31',
      iconStatus: '/ic_StatusTask_16.png'
    },
    {
      name: 'Разработка и интеграция формы обратной связи',
      url: '/icon_task.png',
      code: 'TR-33',
      iconStatus: '/ic_StatusTask_16.png'
    },
    {
      name: 'Улучшение производительности рендеринга страницы',
      url: '/icon_task.png',
      code: 'TR-35',
      iconStatus: '/watched-task-icon.png'
    },
    {
      name: 'Рефакторинг CSS и SCSS для улучшения читаемости',
      url: '/icon_task.png',
      code: 'TR-36',
      iconStatus: '/ic_StatusTask_16.png'
    },
    {
      name: 'Разработка модального окна для подтверждения действий',
      url: '/icon_task.png',
      code: 'TR-37',
      iconStatus: '/ic_StatusTask_16.png'
    },
    {
      name: 'Интеграция анимаций при прокрутке страницы',
      url: '/icon_task.png',
      code: 'TR-38',
      iconStatus: '/ic_StatusTask_16.png'
    },
    {
      name: 'Оптимизация загрузки изображений с использованием lazy loading',
      url: '/icon_task.png',
      code: 'TR-39',
      iconStatus: '/watched-task-icon.png'
    },
    {
      name: 'Разработка компонента фильтрации данных',
      url: '/icon_task.png',
      code: 'TR-41',
      iconStatus: '/watched-task-icon.png'
    },
    {
      name: 'Создание карточки товара с динамическим контентом',
      url: '/icon_task.png',
      code: 'TR-45',
      iconStatus: '/ic_StatusTask_16.png'
    },
    {
      name: 'Настройка и интеграция системы отображения уведомлений',
      url: '/icon_task.png',
      code: 'TR-48',
      iconStatus: '/watched-task-icon.png'
    },
    {
      name: 'Создание кастомного компонента для загрузки файлов',
      url: '/icon_task.png',
      code: 'TR-56',
      iconStatus: '/ic_StatusTask_16.png'
    },
    {
      name: 'Реализация эффекта параллакса для секции сайта',
      url: '/icon_task.png',
      code: 'TR-67',
      iconStatus: '/ic_StatusTask_16.png'
    },
  ]


  tabs = [
    { name: 'На согласование', count: 1 },
    { name: 'На ревью', count: 3 },
    { name: 'Для работы', count: 11 },
    { name: 'Черновики', count: 2 },
  ];

  activeTabIndex = 2; // Устанавливаем активный таб по умолчанию

  selectTab(index: number): void {
    this.activeTabIndex = index;
  }

}
