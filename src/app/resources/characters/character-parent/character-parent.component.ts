import { Component, OnDestroy, OnInit } from '@angular/core';
import { Characters } from 'src/app/services/interface';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-parent',
  templateUrl: './character-parent.component.html',
  styleUrls: ['./character-parent.component.scss'],
  providers: [CharacterService],
})
export class CharacterParentComponent implements OnDestroy, OnInit {
  charactersArray: Characters[] | any;
  results: any;
  detail: {} | any;
  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.characterService
      .listCharacters()
      .subscribe((results: Characters[]) => {
        this.charactersArray = results.filter(
          (element: { image: string }) => element.image != ''
        );
      });
  }
  ngOnDestroy() {
    this.characterService.listCharacters();
  }
  getCharacter($event: any) {
    return (this.detail = $event.value);
  }
}
