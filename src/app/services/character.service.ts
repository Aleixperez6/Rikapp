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
  /*
  getData():Observable<ICharacters>{
    return this.http.get<ICharacters>(this.charactersUrl+'?name');

  }*/

  getData():Observable<ICharacters['results']>{
     return this.http.get<ICharacters['results']>(this.apiUrl);
  }
















}
