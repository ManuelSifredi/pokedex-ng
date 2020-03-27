import Ability from "./ability";
import Type from "./type";
import Sprite from "./sprite";

export default class Pokemon{

    private constructor(
        public id: Number,
        public name: String,
        public height: Number,
        public weight: Number,
        public types: Type[],
        public abilities: Ability[],
        public sprite: Sprite
    ){

    }

    CreatePokemon(data: any): Pokemon{
        const abilities: Ability[] = Ability.prototype.CreateAbilities(data.abilities);
        const types: Type[] = Type.prototype.CreateTypes(data.types);
        const sprite: Sprite = Sprite.prototype.CreateSprite(data.sprites);
        return new Pokemon(data.id, this.CapitalizeFirstLetter(data.name), data.height, data.weight, types, abilities, sprite);
    }

    CreatePokemons(data: any): Pokemon[]{
        const pokemons: Pokemon[] = [];
        data.forEach((element: any) => {
            pokemons.push(this.CreatePokemon(element));
        });
        return pokemons;
    }

    CapitalizeFirstLetter(str: String): String {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}