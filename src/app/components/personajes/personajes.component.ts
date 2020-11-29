import { Component, OnInit } from '@angular/core';
import { ICharacters, IResultados } from 'src/app/interfaces/characters';
import { CharacterService } from 'src/app/services/character.service';




@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public allData: ICharacters[]=[];




  constructor(private servicio: CharacterService,
               ) { }

  ngOnInit():void{
    /* this.servicio.getData().subscribe(
      charactersRes => this.characters = charactersRes,
      error => console.error(error),
      () => console.log("servicios cargados"));

      getListCh(){
    this.servicio.getData().subscribe(charac=> console.log(charac)
    );
  }


      )*/




      this.servicio.getData().subscribe(data => console.log(data));






  }













}


