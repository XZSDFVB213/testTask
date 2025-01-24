import {Component} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {ProductComponent} from '../shared/product/product.component';
import {LeftBlockComponent} from '../shared/left-block/left-block.component';
import {RightBlockComponent} from '../shared/right-block/right-block.component';

registerLocaleData(localeRu);
@Component({
  selector: 'app-main',
  imports: [
    ProductComponent,
    LeftBlockComponent,
    RightBlockComponent,
  ],
  standalone:true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent{

}
