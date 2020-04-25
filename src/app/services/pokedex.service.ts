import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private httpClient: HttpClient) { }

  getAllPokemons(page: Number, type: string){
    let map = new Map<string, string>();
    map.set('page', page.toString());
    if(type != undefined){
      map.set('type', type);
    }

    let params = new HttpParams();
    map.forEach(function (value: string, key: string) { 
      params = params.set(key, value);
    });

    return this.httpClient.get<any>(`${environment.API}/pokemon`, { params });
  }

  getPokemonByName(name: String){
    return this.httpClient.get<any>(`${environment.API}/pokemon/${name}`)
  }

}
