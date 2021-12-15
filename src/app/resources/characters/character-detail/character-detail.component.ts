import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent {
  @Input() characterDetail: any;
  constructor() {
    console.log(this.characterDetail);
  }
}
