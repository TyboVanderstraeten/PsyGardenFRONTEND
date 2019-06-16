import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../post-data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-full',
  templateUrl: './post-full.component.html',
  styleUrls: ['./post-full.component.css']
})
export class PostFullComponent implements OnInit {
  private _id: Number;
  private _subscription: any;
  private _fetchPost$: Observable<Post>;

  constructor(
    private _postDataService: PostDataService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._subscription = this._route.params.subscribe(params => {
      this._id = +params['id'];
    });
    this._postDataService.postId = this._id;
    this._fetchPost$ = this._postDataService.post$;
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
    this._postDataService.postId = 0;
    this._fetchPost$ = null;
  }

  get post$():Observable<Post>{
    return this._fetchPost$;
  }

}
