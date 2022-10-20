import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarShipsService {


  private apiUrl: string = 'https://swapi.dev/api';

  constructor( private http: HttpClient ) { }

  getAllStarships(page: number): Observable<any> {
    const url = `${this.apiUrl}/starships/?page=${ page }`;
    return this.http.get<any>(url);
  }

  getStarship(id: string): Observable<any> {
    const url = `${this.apiUrl}/starships/${ id }`;
    return this.http.get<any>(url);
  }

}
