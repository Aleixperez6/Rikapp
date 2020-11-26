import { Component, OnInit } from '@angular/core';
import { ICharacters } from 'src/app/interfaces/characters';
import { CharacterService } from 'src/app/services/character.service';




@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public characters: ICharacters[]=[];

  constructor( characService:CharacterService ) { }

  ngOnInit(){

    

  }







}


