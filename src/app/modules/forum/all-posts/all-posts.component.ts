import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Observable } from 'rxjs';
import { PostDataService } from '../post-data.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  private _fetchPosts$: Observable<Post[]>
    = this._postDataService.posts$;

  constructor(
    private _postDataService: PostDataService
  ) { }

  ngOnInit() {
  }

  get posts$(): Observable<Post[]> {
    return this._fetchPosts$;
  }

}
