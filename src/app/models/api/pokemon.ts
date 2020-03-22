import Ability from "./ability";
import Type from "./type";
import Sprite from "./sprite";

export default class Pokemon{

    private constructor(
        private id: Number,
        private name: String,
        private height: Number,
        private weight: Number,
        private types: Type[],
        private abilities: Ability[],
        private sprite: Sprite
    ){

    }

    CreatePokemon(data: any): Pokemon{
        const abilities: Ability[] = Ability.prototype.CreateAbilities(data.abilities);
        const types: Type[] = Type.prototype.CreateTypes(data.types);
        const sprite: Sprite = Sprite.prototype.CreateSprite(data.sprites);
        return new Pokemon(data.id, data.name, data.height, data.weight, types, abilities, sprite);
    }

    CreatePokemons(data: any): Pokemon[]{
        const pokemons: Pokemon[] = [];
        data.forEach((element: any) => {
            pokemons.push(this.CreatePokemon(element));
        });
        return pokemons;
    }
}