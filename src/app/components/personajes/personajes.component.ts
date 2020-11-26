import { Component, OnInit } from '@angular/core';
import { ICharacters, IResultados } from 'src/app/interfaces/characters';
import { CharacterService } from 'src/app/services/character.service';




@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public characters: ICharacters;
  public imagenes: IResultados;

  constructor(private servicio: CharacterService,
               ) { }

  ngOnInit(){
    /* this.servicio.getData().subscribe(
      charactersRes => this.characters = charactersRes,
      error => console.error(error),
      () => console.log("servicios cargados"));*/

      this.getListCh();
  }

  getListCh(){
    this.servicio.getXorizo().subscribe(charac=> console.log(charac));
  }








}


