export class EventGenre {

    constructor(
        private _genreId: Number
    ) { }

    get genreId(): Number { return this._genreId; }

    static fromJSON(json: any): EventGenre {
        const genreFromJSON = new EventGenre(json.genreId);
        return genreFromJSON;
    }

    toJSON(): any {
        return {
            genreId: this.genreId
        }
    }
}