import { Component, Input, } from '@angular/core';
import { IResultados } from 'src/app/interfaces/characters';



@Component({
  selector: 'back-item',
  template: `
  <div class="back-item">
   <ng-content></ng-content>
 </div>
 `,
  styleUrls: ['./item.component.css']
})
export class BackItemComponent  {

  @Input() character: IResultados;

}
