export class Coordinates {
    constructor(
        private _latitude: Number,
        private _longitude: Number
    ) { }

    get latitude(): Number { return this._latitude; }
    get longitude(): Number { return this._longitude; }

    static fromJSON(json: any): Coordinates {
        const coordinatesFromJSON = new Coordinates(json.geometry,
            json.geometry);
        return coordinatesFromJSON;
    }
}