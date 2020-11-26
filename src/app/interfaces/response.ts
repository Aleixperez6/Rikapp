import { ICharacters } from './characters';

export interface Response {
  characters: ICharacters[];
  ok: boolean;
}

export interface characResponse{
  ok: boolean;
  characters: ICharacters[];
  error?:string;
  errors?:string[];
}
