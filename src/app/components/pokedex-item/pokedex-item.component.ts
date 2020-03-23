import { Component, OnInit, Input } from '@angular/core';

import Pokemon from 'src/app/models/api/pokemon';

@Component({
  selector: 'app-pokedex-item',
  templateUrl: './pokedex-item.component.html',
  styleUrls: ['./pokedex-item.component.css']
})
export class PokedexItemComponent implements OnInit {

  @Input() pokemon: Pokemon;

  // shiny: Boolean;

  constructor() {
    // this.shiny = false;
  }

  ngOnInit() {
  }
  
}