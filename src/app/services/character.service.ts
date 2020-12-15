import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ICharacters } from '../interfaces/characters';
import { Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore'
import {MessageI } from '../interfaces/message.interface'





@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl:string = "character";
  private contactCollection: AngularFirestoreCollection<MessageI>;

  constructor(private http: HttpClient,
              private afs: AngularFirestore) {
                this.contactCollection = afs.collection<MessageI>('contacts');
              }

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
  saveMessage( newContact: MessageI ):void {
    this.contactCollection.add(newContact);
  }
















}
