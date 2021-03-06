import { Component, Input, OnInit } from '@angular/core';
import { IResultados } from 'src/app/interfaces/characters';
import { CharacterService } from 'src/app/services/character.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() character: IResultados;

  toggleProperty = false;



  constructor(private servicios: CharacterService) { }

  ngOnInit(): void { }

  toggle(){
    this.toggleProperty = !this.toggleProperty;
  }



}
