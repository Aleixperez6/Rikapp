import { Component, Input, } from '@angular/core';
import { IResultados } from 'src/app/interfaces/characters';



@Component({
  selector: 'front-item',
  template: `
  <div class="front-item">
   <ng-content></ng-content>
 </div>
 `,
  styleUrls: ['./item.component.css']
})
export class FrontItemComponent  {

  @Input() character: IResultados;

}
