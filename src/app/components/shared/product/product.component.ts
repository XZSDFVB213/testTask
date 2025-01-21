import { Component } from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  standalone:true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  elementsVisibility = [false,false];
  showElement(index:number){
    this.elementsVisibility[index] = !this.elementsVisibility[index]
  }
}
