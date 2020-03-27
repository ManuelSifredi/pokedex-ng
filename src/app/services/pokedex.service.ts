import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  // private URL = 'https://localhost:44332/api';
  private URL = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  getAllPokemons(page: Number){
    const params = new HttpParams().set('page', page.toString());
    return this.httpClient.get<any>(`${this.URL}/pokemon`, { params });
  }

  getPokemonByName(name: String){
    return this.httpClient.get<any>(`${this.URL}/pokemon/${name}`)
  }

}
