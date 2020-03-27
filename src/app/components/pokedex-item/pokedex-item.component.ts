import { Component, OnInit, Input } from '@angular/core';

import Pokemon from 'src/app/models/api/pokemon';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokedex-item',
  templateUrl: './pokedex-item.component.html',
  styleUrls: ['./pokedex-item.component.css']
})
export class PokedexItemComponent implements OnInit {

  @Input() pokemon: Pokemon;

  // shiny: Boolean;

  constructor(private pokedexService: PokedexService) {
    // this.shiny = false;
  }

  ngOnInit() {
    this.pokedexService.getPokemonByName(this.pokemon.name)
    .subscribe(res => {
      this.SetData(res);
    }, err => {
      console.log(err);
    });
  }

  SetData(res: any){
    this.pokemon = Pokemon.prototype.CreatePokemon(res.results[0]);
  }
  
}