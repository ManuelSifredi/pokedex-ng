import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokemons = [];
  results = [];
  page = 1;
  pageSize =10;
  items = [];

  constructor(private pokedexService: PokedexService) { 
    for(let i = 1; i <= 100; i++){
      this.items.push({Name: 'Shop ' + i});
   }
  }

  ngOnInit() {

    this.pokemons = this.SearchAllPokemon();

  }

  GetPokemon(name: String = "") {
    if (name == "")
      this.SearchAllPokemon();
    else
      this.SearchPokemonByName(name);
  }

  SearchAllPokemon(): any {
    this.pokedexService.getAllPokemons()
      .subscribe(res => {
        this.results = res;
        this.pokemons = res.results;
      }, err => {
        console.log(err);
      });
  }

  SearchPokemonByName(name: String){
    this.pokedexService.getPokemonByName(name)
      .subscribe(res => {
        if(res){
          this.results = res;
          this.pokemons = [res.results];
        }
        else
          this.pokemons = [];
      }, err => {
        console.log(err);
      });
  }

}
