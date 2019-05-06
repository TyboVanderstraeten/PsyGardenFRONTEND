import { Component, OnInit } from '@angular/core';
import { EventDataService } from '../event-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-remove-event',
  templateUrl: './remove-event.component.html',
  styleUrls: ['./remove-event.component.css']
})
export class RemoveEventComponent implements OnInit {
  private _id: Number;
  private _subscription: any;
  private _errorMessage: string;

  constructor(
    private _eventDataService: EventDataService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._subscription = this._route.params.subscribe(params => {
      this._id = +params['id'];
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
    this._id = 0;
  }

  onSubmit() {
    this._eventDataService.removeEvent(this._id)
      .subscribe((response) => {
        if (response) {
          this._router.navigate(['all-events']);
        } else {
          this._errorMessage = 'Could not remove event';
        }
      })
  }

}
