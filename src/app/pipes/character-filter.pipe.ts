import { Pipe, PipeTransform } from '@angular/core';
import { IResultados } from '../interfaces/characters';

@Pipe({
  name: 'characterFilter'
})
export class CharacterFilterPipe implements PipeTransform {

  transform(character: IResultados[], filterByName: string): IResultados[] {

    const filterName = filterByName ? filterByName.toLocaleLowerCase(): null;
    return filterName ?
    character.filter(charac => charac.name.toLocaleLowerCase().includes(filterName)): character;
  }
}


@Pipe({
  name: 'characterFilterSpecies'
})
export class CharacterFilterPipeSpecies implements PipeTransform {

  transform(character: IResultados[], filterBySpecies: string): IResultados[] {
    const filterSpecies = filterBySpecies ? filterBySpecies.toLocaleLowerCase(): null;
    return filterSpecies ?
    character.filter(charac => charac.species.toLocaleLowerCase().includes(filterSpecies)): character;
  }
}

@Pipe({
  name: 'characterFilterStatus'
})
export class CharacterFilterPipeStatus implements PipeTransform {

  transform(character: IResultados[], filterByStatus: string): IResultados[] {
    const filterStatus = filterByStatus ? filterByStatus.toLocaleLowerCase(): null;
    return filterStatus ?
    character.filter(charac => charac.status.toLocaleLowerCase().includes(filterStatus)): character;
  }
}
