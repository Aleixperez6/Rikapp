import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ICharacters } from '../interfaces/characters';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) {}
  /*
  getData():Observable<ICharacters>{
    return this.http.get<ICharacters>(this.charactersUrl+'?name');

  }*/

  getXorizo(){
    const url_api = "/character";
    return this.http.get(url_api);
  }

  getXorizo1(){
    const url_api = "/character";
    return this.http.get(url_api);
  }






}
