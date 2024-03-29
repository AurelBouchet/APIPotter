import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Characters } from './interface';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  url = 'https://hp-api.onrender.com/api/characters';

  listCharacters(): Observable<Characters[]> {
    return this.http.get<[]>(this.url).pipe(
      map((res: Characters[]) => {
        return res;
      })
    );
  }
}
