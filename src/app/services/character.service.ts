import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ICharacters } from '../interfaces/characters';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private charactersUrl:string='https://rickandmortyapi.com/api/characters'



  constructor(private http: HttpClient) {}


 


}
