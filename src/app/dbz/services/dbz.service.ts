import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { CharacterBtz } from '../Interfaces/characterBtz.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: CharacterBtz[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 10,
    }
  ];
  
  deleteCharacter(id: string): void{
    this.characters = this.characters.filter((value) => value.id !== id);
  }

  addCharacter(character: CharacterBtz): void{
    this.characters.push(character);
  }
}