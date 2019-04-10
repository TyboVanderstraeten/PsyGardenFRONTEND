export class NewUser {
    constructor(
        private _firstname: string,
        private _lastname: string,
        private _email: string,
        private _emailConfirmation: string,
        private _password: string,
        private _passwordConfirmation: string
    ) { }

    get firstname():string{return this._firstname;}
    get lastname():string{return this._lastname;}
    get email():string{return this._email;}
    get emailConfirmation():string{return this._emailConfirmation;}
    get password():string{return this._password;}
    get passwordConfirmation():string{return this._passwordConfirmation;}
}