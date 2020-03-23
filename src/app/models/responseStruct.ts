export default class ResponseStruct{

    constructor(public count: Number, public next: String | null, public previous: String | null, public results: any[] | undefined){

    }
}