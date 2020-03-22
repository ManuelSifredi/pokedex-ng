export default class Sprite{

    private constructor(
        
        private female: {
            default: {
                front: String,
                back: String,
            },
            shiny: {
                front: String,
                back: String,
            }
        },

        private male: {
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
                front: data.front_female,
                back: data.back_female,
            },
            shiny: {
                front: data.front_shiny_female,
                back: data.back_shiny_female,
            }
        }
        const male: any = {
            default: {
                front: data.front_default,
                back: data.back_default,
            },
            shiny: {
                front: data.front_shiny,
                back: data.back_shiny,
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