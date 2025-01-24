import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage, NgStyle} from '@angular/common';

@Component({
  selector: 'app-left-block',
  imports: [
    NgForOf,
    NgIf,
    NgOptimizedImage,
    NgStyle,
    NgClass,
  ],
  standalone: true,
  templateUrl: './left-block.component.html',
  styleUrl: './left-block.component.scss'
})
export class LeftBlockComponent implements OnInit {
  public widthScreen!: number

  public elementsVisibility = [true, true];

  ngOnInit() {
    this.widthScreen = window.innerWidth
    if (window.innerWidth <= 400) {
      this.elementsVisibility = [true, false];
      this.myTask = [
        {
          name: 'Создание нового чата или вопроса по процедуре',
          url: '/icon_task.png',
          code: 'TR-333',
          iconStatus: '/ic_StatusTask_16.png'
        },
        {
          name: 'Загрузка списка вопросов глючит',
          url: '/bug116_16.png',
          code: 'TR-334',
          iconStatus: '/coordination-icon.png'
        }
      ]
    }
  }

  public showElement(index: number) {
    this.elementsVisibility[index] = !this.elementsVisibility[index];
  }

  public getStyles(index: number): { [key: string]: string } {
    return this.elementsVisibility[index]
      ? {}
      : {'transform': 'rotate(-90deg)'};
  }

  public myTask = [
    {
      name: 'Разработка нового компонента для отображения графиков',
      url: '/icon_task.png',
      code: 'TR-321',
      iconStatus: '/ic_StatusTask_16.png'
    },
    {
      name: 'Рефакторинг кода модуля авторизации',
      url: '/icon_task.png',
      code: 'TR-322',
      iconStatus: '/ic_StatusTask_16.png'
    },
    {
      name: 'Устранить проблемы с кроссбраузерной совместимостью',
      url: '/bug116_16.png',
      code: 'TR-121',
      iconStatus: '/ic_StatusTask_16.png'
    },
    {
      name: 'Ошибка валидации формы при пустом поле “номер телефона”',
      url: '/bug116_16.png',
      code: 'TR-122',
      iconStatus: '/ic_StatusTask_16.png'
    },
    {
      name: 'Неверное поведение компонента “Главный экран”  при изменении размера окна',
      url: '/bug116_16.png',
      code: 'TR-123',
      iconStatus: '/ic_StatusTask_16.png'
    },
    {
      name: 'Ошибка при обработке события клика (несоответствие контекста)',
      url: '/bug-sec.png',
      code: 'TR-124',
      iconStatus: '/ic_StatusTask_16.png'
    },
    {
      name: 'Невозможно загрузить динамически импортируемые модули',
      url: '/bug-red.png',
      code: 'TR-125',
      iconStatus: '/ic_StatusTask_16.png'
    },
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
  private hoverTimeout: any = null;

  public hoveredMyTaskIndex: number | null = null;

  public hoveredNotAssignedIndex: number | null = null;

  // showRoadToTask:number |null = null
  public showRoadMyTask: number | null = null
  public showRoadNotAssigned: number | null = null

  public handleMouseMove(event: MouseEvent, index: number, type: 'myTask' | 'notAssigned'): void {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const mouseY = event.clientY - rect.top; // Позиция мыши относительно элемента

    // Очищаем предыдущий таймер
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
    }

    // Устанавливаем таймер
    this.hoverTimeout = setTimeout(() => {
      const isInUpperHalf = mouseY < rect.height / 2;

      if (isInUpperHalf) {
        if (type === 'myTask') {
          this.showRoadMyTask = isInUpperHalf ? index : null;
          this.hoveredMyTaskIndex = null; // Скрываем тег нижней части
        } else {
          this.showRoadNotAssigned = isInUpperHalf ? index : null;
          this.hoveredNotAssignedIndex = null;
        }
      } else {
        if (mouseY > rect.height / 2) {
          if (type === 'myTask') {
            this.hoveredMyTaskIndex = index;
          } else {
            this.hoveredNotAssignedIndex = index;
          }
        } else {
          if (type === 'notAssigned') {
            this.hoveredMyTaskIndex = null;
          } else {
            this.hoveredNotAssignedIndex = null;
          }
        }
      }
    }, 70); // Задержка 70 мс
  }

  public handleMouseLeave(type: 'myTask' | 'notAssigned'): void {
    // Сбрасываем все индексы при уходе курсора
    if (type === 'myTask') {
      this.showRoadMyTask = null
      this.hoveredMyTaskIndex = null;
    } else {
      this.showRoadNotAssigned = null
      this.hoveredNotAssignedIndex = null;
    }

    // Очищаем таймер
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
    }
  }
}
