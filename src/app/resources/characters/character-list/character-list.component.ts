import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent {
  @Input()
  characters: [] | undefined;

  @Output() oneCharacter: EventEmitter<any> = new EventEmitter();

  getOneCharacter(character: {}) {
    this.oneCharacter.emit(character);
  }
}
