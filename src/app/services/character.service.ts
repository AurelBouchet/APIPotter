import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Characters } from './interface';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  listCharacters(): Observable<Characters[]> {
    return this.http.get<any>('https://rickandmortyapi.com/api/character').pipe(
      map((res: Characters[]) => {
        return res;
      })
    );
  }
  showCharacter(id: number): Observable<Characters> {
    return this.http
      .get<any>('https://rickandmortyapi.com/api/character' + id)
      .pipe(
        map((res: Characters) => {
          return res;
        })
      );
  }
}
