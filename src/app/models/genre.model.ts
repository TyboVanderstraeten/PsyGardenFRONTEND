export class Genre {
    constructor(
        private _genreId: Number,
        private _name: string
    ) { }

    get genreId(): Number { return this._genreId; }
    get name(): string { return this._name; }

    static fromJSON(json: any): Genre {
        const genreFromJSON = new Genre(json.genreId,json.name);
        return genreFromJSON;
    }
}