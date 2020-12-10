export interface ICharacters {
  info: Info;
  results:IResultados[];
}

export interface IResultados {
  name:string;
  id:number;
  status:string;
  species:string;
  image:string;
  location: {name:string};
  gender:string;
}

export interface Info {
  pages: number;
  count:number;
}











