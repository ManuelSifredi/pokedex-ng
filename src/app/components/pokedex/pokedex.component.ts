import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokemons = []

  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {

    this.pokedexService.getPokedex()
    .subscribe(
      res => {
        this.pokemons = res;
      },
      err => {
        console.log(err);
      }
    );

  }

}
