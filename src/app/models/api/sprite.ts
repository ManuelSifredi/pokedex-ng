export default class Sprite{

    private constructor(
        
        public female: {
            default: {
                front: String,
                back: String,
            },
            shiny: {
                front: String,
                back: String,
            }
        },

        public male: {
            default: {
                front: String,
                back: String,
            },
            shiny: {
                front: String,
                back: String,
            }
        }
        
    ){

    }

    CreateSprite(data: any): Sprite{
        const female: any = {
            default: {
                front: data.frontFemale != undefined ? data.frontFemale : "/assets/img/missingno.png",
                back: data.backFemale != undefined ? data.backFemale : "/assets/img/missingno.png",
            },
            shiny: {
                front: data.frontShinyFemale != undefined ? data.frontShinyFemale : "/assets/img/missingno.png",
                back: data.backShinyFemale != undefined ? data.backShinyFemale : "/assets/img/missingno.png",
            }
        }
        const male: any = {
            default: {
                front: data.frontDefault != undefined ? data.frontDefault : "/assets/img/missingno.png",
                back: data.backDefault != undefined ? data.backDefault : "/assets/img/missingno.png",
            },
            shiny: {
                front: data.frontShiny != undefined ? data.frontShiny : "/assets/img/missingno.png",
                back: data.backShiny != undefined ? data.backShiny : "/assets/img/missingno.png",
            }
        }
        return new Sprite(female, male);
    }

    CreateSprites(data: any): Sprite[]{
        let sprites: Sprite[] = [];
        data.forEach((element: any) => {
            if(element.name != undefined)
                sprites.push(this.CreateSprite(element));
            else
                sprites.push(this.CreateSprite(element.sprite));
        });
        return sprites;
    }
}