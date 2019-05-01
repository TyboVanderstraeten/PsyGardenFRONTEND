import { Event } from 'src/app/modules/event/event.model';

export class User {
    constructor(
        private _userId: Number,
        private _firstname: string,
        private _lastname: string,
        private _email: string,
        private _isAdmin: boolean,
        private _interests: any[],
        private _goings: any[]
    ) { }

    get userId(): Number { return this._userId; }
    get firstname(): string { return this._firstname; }
    get lastname(): string { return this._lastname; }
    get email(): string { return this._email; }
    get isAdmin(): boolean { return this._isAdmin; }
    get interests(): Event[] { return this._interests; }
    get goings(): Event[] { return this._goings; }

    static fromJSON(json: any): User {
        const userFromJSON = new User(json.userId, json.firstName, json.lastName,
            json.email, json.isAdmin, json.interest, json.goings);
        return userFromJSON;
    }
}