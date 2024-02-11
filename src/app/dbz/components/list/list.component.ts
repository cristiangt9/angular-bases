import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacterBtz } from '../../Interfaces/characterBtz.interface';

@Component({
  selector: 'btz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: CharacterBtz[] = [];
  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  onDeleteButton(id: string): void {
    this.onDeleteCharacter.emit(id);
  }
}
