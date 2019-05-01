export class Event {
    constructor(
        private _eventId: Number,
        private _name: string,
        private _description: string,
        private _startDate: Date,
        private _endDate: Date,
        private _nrOfDays: Number,
        private _country: string,
        private _region: string,
        private _city: string,
        private _street: string,
        private _streetNr: string,
        private _zipCode: string,
        private _genres: any[],
        private _prices: any[],
        private _links: any[]
    ) { }

    get eventId(): Number { return this._eventId; }
    get name(): string { return this._name; }
    get description(): string { return this._description; }
    get startDate(): Date { return this._startDate; }
    get endDate(): Date { return this._endDate; }
    get nrOfDays(): Number { return this._nrOfDays; }
    get country(): string { return this._country; }
    get region(): string { return this._region; }
    get city(): string { return this._city; }
    get street(): string { return this._street; }
    get streetNr(): string { return this._streetNr; }
    get zipCode(): string { return this._zipCode; }
    get genres(): any[] { return this._genres; }
    get prices(): any[] { return this._prices; }
    get links(): any[] { return this._links; }

    static fromJSON(json: any): Event {
        const eventFromJSON = new Event(json.eventId, json.name, json.description, json.startDate, json.endDate,
            json.nrOfDays, json.country, json.region, json.city, json.street, json.streetNr, json.zipCode, json.eventGenres, json.prices, json.links
        );
        return eventFromJSON;
    }
}