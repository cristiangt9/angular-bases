import { Component, OnInit } from '@angular/core';
import { CharacterBtz } from '../../Interfaces/characterBtz.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent{
  constructor( private dbzService: DbzService ) {}
  
  get characters(): CharacterBtz[] {
    return [...this.dbzService.characters]
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacter(id);
  }

  onNewCharacter(character: CharacterBtz): void {
    this.dbzService.addCharacter(character);
  }
}