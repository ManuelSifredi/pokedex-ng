import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private URL = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  getPokedex(){
    return this.httpClient.get<any>(`${this.URL}/getPokemons`);
  }

  getPrivateTasks(){
    return this.httpClient.get<any>(`${this.URL}/private-tasks`);
  }

}
