export class Event {
    private _eventId: Number;
    private _nrOfDays: Number;

    constructor(
        private _name: string,
        private _description: string,
        private _startDate: Date,
        private _endDate: Date,
        private _country: string,
        private _region: string,
        private _city: string,
        private _street: string,
        private _streetNr: string,
        private _zipCode: string,
        private _headerImageURL: string,
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
    get headerImageURL(): string { return this._headerImageURL; }
    get genres(): any[] { return this._genres; }
    get prices(): any[] { return this._prices; }
    get links(): any[] { return this._links; }

    calculateDaysLeft(): Number {
        var oneDay = 1000 * 60 * 60 * 24;
        var startDate_ms = this.parseDate(this.startDate).getTime();
        var today_ms = new Date().getTime();
        var difference_ms = Math.abs(startDate_ms - today_ms);
        return Math.round(difference_ms / oneDay);
    }

    private parseDate(date) {
        var parts = date.match(/(\d+)/g);
        return new Date(parts[0], parts[1] - 1, parts[2]);
    }

    static fromJSON(json: any): Event {
        const eventFromJSON = new Event(json.name, json.description, json.startDate, json.endDate,
            json.country, json.region, json.city, json.street, json.streetNr, json.zipCode, json.headerImageURL, json.eventGenres,
            json.prices, json.links);
        eventFromJSON._eventId = json.eventId;
        eventFromJSON._nrOfDays = json.nrOfDays;
        return eventFromJSON;
    }

    toJSON(): any {
        return {
            name: this.name,
            description: this.description,
            startDate: this.startDate,
            endDate: this.endDate,
            country: this.country,
            region: this.region,
            city: this.city,
            street: this.street,
            streetNr: this.streetNr,
            zipCode: this.zipCode,
            headerImageURL: this.headerImageURL,
            eventGenres: [],
            prices: [],
            links: []
        }
    }

}