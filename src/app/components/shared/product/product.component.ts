import {Component} from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage, NgStyle} from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [
    NgOptimizedImage,
    NgClass,
    NgStyle
  ],
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  public activeIndex = [false, false];

  public toggleActive(index: number) {
    this.activeIndex[index] = !this.activeIndex[index];
  }

  public getStyles(index: number): { [key: string]: string } {
    return this.activeIndex[index]
      ? {'transform': 'rotate(-90deg)'}
      : {};
  }
}
