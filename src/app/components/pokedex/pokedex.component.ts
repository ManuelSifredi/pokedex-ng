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
  typeSearch = undefined;

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
      this.SearchAllPokemon();
    else
      this.SearchPokemonByName(name);
  }

  SearchAllPokemon(): any {
    this.pokedexService.getAllPokemons(this.page, this.typeSearch)
      .subscribe(res => {
        this.SetData(res);
      }, err => {
        console.log(err);
      });
  }

  SetTypeAndSearch(type: string){
    this.typeSearch = type;
    this.SearchAllPokemon();
  }

  SearchPokemonByName(name: String) {
    this.typeSearch = undefined;
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
    this.SetPaginationData();
  }

  ChangePage(page: number){
    this.page = page;
    this.GetPokemon();
  }

  SetPaginationData(){
    this.pages = Math.ceil(this.results.count / this.pageSize);

    let offset = 5;
    let minpage = 0;
    let maxpage = 0;
    
    if(this.pages < offset*2){
      minpage = 1;
      this.pagesarray = Array(this.pages);
      for (let index = 0; index < this.pagesarray.length; index++) {
        this.pagesarray[index] = minpage;
        minpage++;
      }
      return this.pagesarray;
    }

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
