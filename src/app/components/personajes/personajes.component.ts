import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {merge, of as observableOf} from 'rxjs';
import {catchError,  map, startWith, switchMap} from 'rxjs/operators';
import { IResultados } from 'src/app/interfaces/characters';
import { CharacterService } from 'src/app/services/character.service';





@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public allData: IResultados[]=[];

  public filteredCharacters: IResultados [] = []

  resultsLength=0;

  filterSearch:string="";
  filterSpecies:string="";
  filterStatus:string="";

  @ViewChild(MatPaginator, {static:false}) paginator!:MatPaginator;

  constructor(private servicio: CharacterService, ) {
   }

  ngOnInit():void{

      this.servicio.getData().subscribe(
      respData => this.allData = respData['results'],
      error => console.log(error),
      () => console.log("go")
    );
  }

  ngAfterViewInit(){

    /*
    const page:number=22;
    this.servicio.getCharactersPaged(page).subscribe(
      respCharacters => this.allData = respCharacters.results,
      error => console.log(error),
      () => console.log(this.allData)
    )*/

      merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(()=>{
          return this.servicio.getCharactersPaged(this.paginator.pageIndex+1)
        }),
        map(data => {
          const results = data['results'];
          this.resultsLength= data['info']['count'];
          return results;
        }),
        catchError(()=> {
          return observableOf([]);
        })
      ).subscribe(data => this.allData = data)

  }

  onSearchClear(){
    this.filterSearch="";
  }
  onSpeciesClear(){
    this.filterSpecies="";
  }
  onStatusClear(){
    this.filterStatus="";
  }



}


