import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent {
  @Input() characters: [] | undefined;
  @Input() gryffindorsArray: [] | boolean | undefined;
  @Output() oneCharacter: EventEmitter<any> = new EventEmitter();
  @Output() onlyGryffindors: EventEmitter<any> = new EventEmitter();
  buttonName: string | undefined = 'Only the Gryffindors';

  getOneCharacter(character: {}) {
    this.oneCharacter.emit(character);
  }

  getGryffindors() {
    this.onlyGryffindors.emit();
    this.gryffindorsArray = !this.gryffindorsArray;
    this.gryffindorsArray
      ? (this.buttonName = 'Get back to all')
      : (this.buttonName = 'Only to Gryffindors');
  }
}
