import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {
  public postId: Number;

  constructor(private _http: HttpClient) { }

  get posts$(): Observable<Post[]> {
    return this._http.get(`${environment.psyGardenApiUrl}/Posts/`)
      .pipe(
        map(
          (postListJSON: any[]): Post[] => postListJSON.map(Post.fromJSON)
        )
      );
  }

  get post$(): Observable<Post> {
    return this._http.get(`${environment.psyGardenApiUrl}/Posts/${this.postId}`)
      .pipe(
        map(
          (postJSON: any): Post => Post.fromJSON(postJSON)
        )
      );
  }
}
