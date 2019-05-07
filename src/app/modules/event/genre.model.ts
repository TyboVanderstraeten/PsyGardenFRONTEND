export class Genre {

    constructor(
        private _genreId: Number
    ) { }

    get genreId(): Number { return this._genreId; }

    static fromJSON(json: any): Genre {
        const genreFromJSON = new Genre(json.genreId);
        return genreFromJSON;
    }

    toJSON(): any {
        return {
            genreId: this.genreId
        }
    }
}