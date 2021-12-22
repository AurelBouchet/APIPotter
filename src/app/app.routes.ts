import { Routes } from '@angular/router';
import { CharacterListComponent } from './resources/characters/character-list/character-list.component';
import { CharacterParentComponent } from './resources/characters/character-parent/character-parent.component';

export const appRoutes: Routes = [
  { path: '', component: CharacterParentComponent },
  { path: 'characters', component: CharacterListComponent },
];
