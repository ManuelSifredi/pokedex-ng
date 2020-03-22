export default class Type{

    private constructor(
        private id: Number,
        private name: String
    ){

    }

    CreateType(data: any): Type{
        return new Type(data.id, data.name);
    }

    CreateTypes(data: any): Type[]{
        let abilities: Type[] = [];
        data.forEach((element: any) => {
            if(element.name != undefined)
                abilities.push(this.CreateType(element));
            else
                abilities.push(this.CreateType(element.type));
        });
        return abilities;
    }
}