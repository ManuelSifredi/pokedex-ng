import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private URL = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  getAllPokemons(page: Number){
    const params = new HttpParams().set('page', page.toString());
    return this.httpClient.get<any>(`${this.URL}/getPokemons`, { params });
  }

  getPokemonByName(name: String){
    return this.httpClient.get<any>(`${this.URL}/getPokemon?name=${name}`)
  }

}
