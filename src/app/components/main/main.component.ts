import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu);
@Component({
  selector: 'app-main',
  imports: [
    NgOptimizedImage,
    NgForOf,
    NgIf,
  ],
  standalone:true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  elementsVisibility = [true, true, true, true];

  showElement(index: number) {
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

}
