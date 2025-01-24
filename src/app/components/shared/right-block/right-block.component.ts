import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage, NgStyle} from '@angular/common';

@Component({
  selector: 'app-right-block',
  imports: [
    NgIf,
    NgOptimizedImage,
    NgForOf,
    NgStyle,
    NgClass
  ],
  standalone: true,
  templateUrl: './right-block.component.html',
  styleUrl: './right-block.component.scss'
})
export class RightBlockComponent implements OnInit {
  public widthScreen!: number

  public elementsVisibility = [true]


  ngOnInit() {
    this.widthScreen = window.innerWidth
    if (window.innerWidth <= 400) {
      this.inWork[0].iconStatus = '/ic_StatusTask_16-blue.png'
      this.onPause = this.onPause.slice(0, 2)
      this.onPause[1].iconStatus = '/coordination-icon.png'
    }
  }

  public showElement(index: number) {
    this.elementsVisibility[index] = !this.elementsVisibility[index];
  }

  public getStyles(index: number): { [key: string]: string } {
    // Если элемент невидим, добавляется стиль поворота
    return this.elementsVisibility[index]
      ? {}
      : {'transform': 'rotate(-90deg)'};
  }

  inWork = [
    {
      name: "Разработка нового интерфейса для панели управления",
      url: "/icon_task.png",
      code: "TR-323",
      iconStatus: "/watched-task-icon.png"
    }
  ];

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


  public tabs = [
    {name: 'На согласование', count: 1},
    {name: 'На ревью', count: 3},
    {name: 'Для работы', count: 11},
    {name: 'Черновики', count: 2},
  ];

  public activeTabIndex = 2; // Устанавливаем активный таб по умолчанию

  public selectTab(index: number): void {
    this.activeTabIndex = index;
  }

  private hoverTimeout: any = null;
  hoveredOnPauseIndex: number | null = null; // Индекс текущей задачи для отслеживания
  public hoveredInWork: number | null = null
  // showRoadToTask:number |null = null
  showRoadInWork: number | null = null
  showRoadOnPause: number | null = null

  handleMouseMove(event: MouseEvent, index: number, type: 'inWork' | 'onPause'): void {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const mouseY = event.clientY - rect.top; // Позиция курсора относительно элемента
    const isInUpperHalf = mouseY < rect.height / 2; // Определяем, в верхней половине или нет

    // Очищаем предыдущий таймер, чтобы не было конфликтов
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
    }

    // Устанавливаем новый таймер
    this.hoverTimeout = setTimeout(() => {
      if (type === 'inWork') {
        this.showRoadInWork = isInUpperHalf ? index : null;
      } else {
        this.showRoadOnPause = isInUpperHalf ? index : null;
      }
      if (mouseY > rect.height / 2) {
        if (type === 'inWork') {
          this.hoveredInWork = index;
        } else {
          this.hoveredOnPauseIndex = index;
        }
      } else {
        if (type === 'onPause') {
          this.hoveredInWork = null;
        } else {
          this.hoveredOnPauseIndex = null;
        }
      }

    }, 80); // 70 мс задержки
  }

  handleMouseLeave(type: 'inWork' | 'onPause'): void {
    // Сбрасываем состояние при выходе мыши
    if (type === 'inWork') {
      this.hoveredInWork = null;
      this.showRoadInWork = null
    } else {
      this.hoveredOnPauseIndex = null;
      this.showRoadOnPause = null
    }

    // Очищаем таймер
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
    }
  }
}
