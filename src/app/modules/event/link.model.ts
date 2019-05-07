export class Link {
    private _linkId: Number;

    constructor(
        private _name: string,
        private _url: string
    ) { }

    get linkId(): Number { return this._linkId; }
    get name(): string { return this._name; }
    get url(): string { return this._url; }

    static fromJSON(json: any): Link {
        const linkFromJSON = new Link(json.name, json.url);
        linkFromJSON._linkId = json.linkId;
        return linkFromJSON;
    }

    toJSON(): any {
        return {
            name: this.name,
            url: this.url
        }
    }
}