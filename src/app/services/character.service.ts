import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ICharacters, IResultados } from '../interfaces/characters';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl:string = "character";






  constructor(private http: HttpClient) {}

  getData():Observable<ICharacters['results']>{
     return this.http.get<ICharacters['results']>(this.apiUrl);
  }

  getCharactersPaged(page:number):Observable<ICharacters>{
    const requestUrl = this.apiUrl+'?page='+(page);
    return this.http.get<ICharacters>(requestUrl);
  }

  getCharactersFilter(name:string):Observable<ICharacters>{
    const requestUrl= this.apiUrl+ '?=name'+(name)
    return this.http.get<ICharacters>(requestUrl);
  }
















}
