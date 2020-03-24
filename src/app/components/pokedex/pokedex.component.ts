import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokemons = [];
  results: any;
  page = 1;
  pageSize = 20;
  pages = 0;
  pagesarray = [];

  constructor(private pokedexService: PokedexService) {
    
  }

  ngOnInit() {

    this.results = {
      count: 0
    };
    this.ChangePage(1);

  }

  GetPokemon(name: String = "") {
    if (name == "")
      this.SearchAllPokemon(this.page);
    else
      this.SearchPokemonByName(name);
  }

  SearchAllPokemon(page: Number = 1): any {
    this.pokedexService.getAllPokemons(page)
      .subscribe(res => {
        this.SetData(res);
      }, err => {
        console.log(err);
      });
  }

  SearchPokemonByName(name: String) {
    this.pokedexService.getPokemonByName(name)
      .subscribe(res => {
        if (res) {
          this.SetData(res);
        }
        else{
          this.pokemons = [];
          this.pages = 0;
          this.pagesarray = Array(0);
        }
      }, err => {
        console.log(err);
      });
  }

  SetData(res: any){
    this.results = res;
    this.pokemons = res.results;
    this.SetPagesData();
  }

  ChangePage(page: number){
    this.page = page;
    this.GetPokemon();
  }

  SetPagesData(){
    this.pages = Math.ceil(this.results.count / this.pageSize);

    let offset = 5;
    let minpage = 0;
    let maxpage = 0;

    const mindiff = this.page - offset;
    if(mindiff > 0)
      minpage = mindiff;
    else{
      minpage = 1;
      offset -= mindiff - 1;
    }

    if(this.page < (this.pages - offset))
      maxpage = this.page + offset;
    else{
      maxpage = this.pages;
      minpage = maxpage - 10;
    }

    this.pagesarray = Array(maxpage - minpage);
    for (let index = 0; index < this.pagesarray.length; index++) {
      this.pagesarray[index] = minpage;
      minpage++;
    }
  }
}
