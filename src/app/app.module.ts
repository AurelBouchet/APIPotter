import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { CharacterListComponent } from './resources/characters/character-list/character-list.component';
import { CharacterParentComponent } from './resources/characters/character-parent/character-parent.component';
import { CharacterDetailComponent } from './resources/characters/character-detail/character-detail.component';
import { LogInterceptor } from './core/log.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharacterListComponent,
    CharacterParentComponent,
    CharacterDetailComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
