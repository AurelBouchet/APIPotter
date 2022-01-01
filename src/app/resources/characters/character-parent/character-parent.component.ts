import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/services/interface';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-parent',
  templateUrl: './character-parent.component.html',
  styleUrls: ['./character-parent.component.scss'],
  providers: [CharacterService],
})
export class CharacterParentComponent implements OnInit {
  charactersArray: Characters[] | any;
  gryffindorsArray: Characters[] | any;
  charactersArrayToFilter: Characters[] | any;
  character: {} | any;
  detailsOfCharacter: {} | any;
  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.characterService
      .listCharacters()
      .subscribe((results: Characters[]) => {
        this.charactersArray = results.filter(
          (element: { image: string }) => element.image != ''
        );
        this.charactersArrayToFilter = results.filter(
          (element: { image: string }) => element.image != ''
        );
      });
  }

  getCharacter(character: []) {
    this.detailsOfCharacter = character;
  }

  getOnlyGryffindors(gryffindorsArray: []) {
    if (this.charactersArray.length === 25) {
      this.gryffindorsArray = this.charactersArrayToFilter.filter(
        (element: { house: string }) => element.house === 'Gryffindor'
      );
      this.charactersArray = this.gryffindorsArray;
    } else {
      return (this.charactersArray = this.charactersArrayToFilter);
    }
  }
}
