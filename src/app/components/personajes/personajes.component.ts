import { Component, OnInit } from '@angular/core';
import { IResultados } from 'src/app/interfaces/characters';
import { CharacterService } from 'src/app/services/character.service';




@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public allData: IResultados[]=[];

  constructor(private servicio: CharacterService,
               ) { }

  ngOnInit():void{


    this.servicio.getData().subscribe(
      respData => this.allData= respData,
      error => console.log(error),
      () => console.log("characers charged")
    );

    this.servicio.getData().subscribe(data => console.log(data));








  }













}


