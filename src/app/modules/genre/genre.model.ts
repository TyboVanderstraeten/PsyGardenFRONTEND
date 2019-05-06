export class Genre {
    private _genreId: Number;

    constructor(
        private _name: string
    ) { }

    get genreId(): Number { return this._genreId; }
    get name(): string { return this._name; }

    static fromJSON(json: any): Genre {
        const genreFromJSON = new Genre(json.name);
        genreFromJSON._genreId = json.genreId;
        return genreFromJSON;
    }

    toJSON(): any {
        return {
            name: this.name
        };
    }
}