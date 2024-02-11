import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CharacterBtz } from '../../Interfaces/characterBtz.interface';
import { v4 as uuid } from 'uuid';
const initialCharacter: CharacterBtz  = {
  id: '',
  name: '',
  power: 0
}
@Component({
  selector: 'btz-add-character',
  templateUrl: './addCharacter.component.html',
  styleUrl: './addCharacter.component.css',
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<CharacterBtz> = new EventEmitter();
  public character: CharacterBtz = {...initialCharacter};
  sendForm():void {
    if (this.character.name.length === 0) return;
    
    this.onNewCharacter.emit({...this.character, id: uuid()});
    this.character = {...initialCharacter};
  }
}
