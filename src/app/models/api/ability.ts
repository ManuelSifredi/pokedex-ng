export default class Ability{

    private constructor(
        public id: Number,
        public name: String
    ){

    }

    CreateAbility(data: any): Ability{
        return new Ability(data.id, data.name);
    }

    CreateAbilities(data: any): Ability[]{
        let abilities: Ability[] = [];
        data.forEach((element: any) => {
            if(element.name != undefined)
                abilities.push(this.CreateAbility(element));
            else
                abilities.push(this.CreateAbility(element.ability));
        });
        return abilities;
    }
}