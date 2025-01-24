import {Component, ViewEncapsulation} from '@angular/core';
import {NgClass, NgOptimizedImage, NgStyle} from '@angular/common';

@Component({
  selector: 'app-header-mobile',
  imports: [
    NgClass
  ],
  standalone:true,
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class HeaderMobileComponent {

  public activeIndex = 2

  public toggleActive(index:number) {
    this.activeIndex = index;
  }
}
