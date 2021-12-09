import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/services/interface';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
  providers: [CharacterService],
})
export class CharacterListComponent implements OnInit {
  characters: Characters[] | any;
  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.characterService.listCharacters().subscribe((res: Characters[]) => {
      this.characters = res;
    });
  }
}
