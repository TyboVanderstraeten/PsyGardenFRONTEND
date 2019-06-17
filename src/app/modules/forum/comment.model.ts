export class Comment {
    private _commentId: Number;

    constructor(
        private _content: string,
        private _datePosted: Date
    ) { }

    get commentId(): Number { return this._commentId; }
    get content(): string { return this._content; }
    get datePosted(): Date { return this._datePosted; }

    static fromJSON(json: any): Comment {
        const commentFromJSON = new Comment(json.content, json.datePosted);
        commentFromJSON._commentId = json.commentId;
        return commentFromJSON;
    }

    toJSON(): any {
        return {
            content: this.content
        }
    }
}