export class Post {
    private _postId: Number;

    constructor(
        private _title: string,
        private _content: string,
        private _datePosted: Date,
        private _author: string,
        private _comments: any[]
    ) { }

    get postId(): Number { return this._postId; }
    get title(): string { return this._title; }
    get content(): string { return this._content; }
    get datePosted(): Date { return this._datePosted; }
    get author(): string { return this._author; }
    get comments(): any[] { return this._comments; }

    static fromJSON(json: any): Post {
        const postFromJSON = new Post(json.title, json.content, json.datePosted,
            json.author, json.comments);
        postFromJSON._postId = json.postId;
        return postFromJSON;
    }

    toJSON(): any {
        return {
            title: this.title,
            content: this.content,
            author: this.author,
            comments: []
        }
    }
}