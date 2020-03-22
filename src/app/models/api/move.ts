export default class Move{

    private constructor(
        private id: Number,
        private name: String
    ){

    }

    CreateAbility(data: any): Move{
        return new Move(data.id, data.name);
    }

    CreateAbilities(data: any): Move[]{
        let abilities: Move[] = [];
        data.forEach((element: any) => {
            if(element.name != undefined)
                abilities.push(this.CreateAbility(element));
            else
                abilities.push(this.CreateAbility(element.move));
        });
        return abilities;
    }
}