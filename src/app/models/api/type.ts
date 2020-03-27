export default class Type{

    private constructor(
        public id: Number,
        public name: String
    ){

    }

    CreateType(data: any): Type{
        return new Type(data.id, this.CapitalizeFirstLetter(data.name));
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

    CapitalizeFirstLetter(str: String): String {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}