import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import Pokemon from 'src/app/models/api/pokemon';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokedex-item',
  templateUrl: './pokedex-item.component.html',
  styleUrls: ['./pokedex-item.component.css']
})
export class PokedexItemComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Output() typeSearch = new EventEmitter<string>();

  constructor(private pokedexService: PokedexService) {
    
  }

  ngOnInit() {
    this.pokedexService.getPokemonByName(this.pokemon.name)
    .subscribe(res => {
      this.pokemon = Pokemon.prototype.CreatePokemon(res.results[0]);
    }, err => {
      console.log(err);
    });
  }
  
  SetTypeParent(type: string){
    this.typeSearch.emit(type);
  }
  
}