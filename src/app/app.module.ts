import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { CharacterDetailComponent } from './resources/characters/character-detail/character-detail.component';
import { CharacterListComponent } from './resources/characters/character-list/character-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharacterDetailComponent,
    CharacterListComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
