export class Price {
    private _priceId: Number;

    constructor(
        private _name: string,
        private _description: string,
        private _cost: Number
    ) { }

    get priceId(): Number { return this._priceId; }
    get name(): string { return this._name; }
    get description(): string { return this._description; }
    get cost(): Number { return this._cost; }

    static fromJSON(json: any): Price {
        const priceFromJSON = new Price(json.name, json.description, json.cost);
        priceFromJSON._priceId = json.priceId;
        return priceFromJSON;
    }

    toJSON(): any {
        return {
            name: this.name,
            description: this.description,
            cost: this.cost
        }
    }
}